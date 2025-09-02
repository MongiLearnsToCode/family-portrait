'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useMutation } from 'convex/react';
import { api } from '@convex/_generated/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UploadCloud, X, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import { CldUploadWidget } from 'next-cloudinary';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';

export function FileUploader({ background, style, hires }: { background: string, style: string, hires: boolean }) {
  const { data: session } = useSession();
  const [files, setFiles] = useState<any[]>([]);
  const [transformedFiles, setTransformedFiles] = useState<any[]>([]);
  const savePortrait = useMutation(api.portraits.savePortrait);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onUpload = async (result: any) => {
    const publicId = result.info.public_id;
    const response = await fetch('/api/transform', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ publicId }),
    });
    const data = await response.json();
    setTransformedFiles((prevFiles) => [...prevFiles, { ...result.info, secure_url: data.url }]);
    setFiles((prevFiles) => [...prevFiles, result.info]);
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setTransformedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    setLoading(true);
    setError(null);
    try {
      const imageUrls = transformedFiles.map((file) => file.secure_url);
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrls, background, style, hires }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate portrait. Please try again.');
      }

      const data = await response.json();
      setGeneratedImage(data.text);
      if (session) {
        await savePortrait({
          imageUrl: data.text,
          sourceImageUrls: imageUrls,
          background,
          style,
          hires,
        });
      }
    } catch (error: any) {
      console.error('Error:', error);
      setError(error.message || 'An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const fileLimit = session ? 100 : 3;

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UploadCloud className="w-6 h-6" />
          Upload Your Photos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <CldUploadWidget
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
            onSuccess={onUpload}
          >
            {({ open }) => {
              return (
                <div
                  className="flex flex-col space-y-1.5 border-2 border-dashed border-muted-foreground/50 rounded-lg p-8 text-center cursor-pointer"
                  onClick={() => open()}
                >
                  <div className="text-muted-foreground">
                    Drag & drop files here, or click to select files
                  </div>
                </div>
              );
            }}
          </CldUploadWidget>

          {transformedFiles.length > 0 && (
            <div>
              <h3 className="text-lg font-medium">Selected Files:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                {transformedFiles.map((file, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={file.secure_url}
                      alt={`Preview ${index}`}
                      width={150}
                      height={150}
                      className="rounded-md object-cover"
                    />
                    <button
                      onClick={() => removeFile(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {error}
              </AlertDescription>
            </Alert>
          )}

          <Button
            onClick={handleUpload}
            disabled={files.length === 0 || files.length > fileLimit || loading}
            className="mt-4"
          >
            {loading ? 'Generating...' : (files.length > fileLimit ? `Please select up to ${fileLimit} files` : 'Generate Portrait')}
          </Button>

          {loading && (
            <div>
              <h3 className="text-lg font-medium">Generated Portrait:</h3>
              <div className="mt-4">
                <Skeleton className="w-[512px] h-[512px] rounded-md" />
              </div>
            </div>
          )}

          {generatedImage && !loading && (
            <>
              <div>
                <h3 className="text-lg font-medium">Generated Portrait:</h3>
                <div className="mt-4">
                  <Image
                    src={generatedImage}
                    alt="Generated Portrait"
                    width={512}
                    height={512}
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
              {!session && (
                <>
                  <Separator className="my-4" />
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-lg font-medium">Ready for the full experience?</h3>
                    <Button>Sign Up Now</Button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}