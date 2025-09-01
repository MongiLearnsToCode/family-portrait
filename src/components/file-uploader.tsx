'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UploadCloud, X } from 'lucide-react';
import Image from 'next/image';
import { CldUploadWidget } from 'next-cloudinary';

export function FileUploader() {
  const [files, setFiles] = useState<any[]>([]);

  const onUpload = (result: any) => {
    setFiles((prevFiles) => [...prevFiles, result.info]);
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    // TODO: Implement Gemini API call
    console.log('Uploading files:', files);
  };

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
            uploadPreset="YOUR_UPLOAD_PRESET"
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

          {files.length > 0 && (
            <div>
              <h3 className="text-lg font-medium">Selected Files:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                {files.map((file, index) => (
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
          <Button
            onClick={handleUpload}
            disabled={files.length === 0 || files.length > 3}
            className="mt-4"
          >
            {files.length > 3
              ? 'Please select up to 3 files'
              : 'Generate Portrait'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}