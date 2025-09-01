"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UploadCloud, X } from "lucide-react";
import Image from "next/image";

export function FileUploader() {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      generatePreviews(newFiles);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const newFiles = Array.from(event.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    generatePreviews(newFiles);
  };

  const generatePreviews = (files: File[]) => {
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setPreviews((prevPreviews) => {
      const newPreviews = prevPreviews.filter((_, i) => i !== index);
      URL.revokeObjectURL(previews[index]);
      return newPreviews;
    });
  };

  const handleUpload = () => {
    // TODO: Implement Cloudinary upload
    console.log("Uploading files:", files);
  };

  return (
    <Card
      className="w-full max-w-lg"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UploadCloud className="w-6 h-6" />
          Upload Your Photos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5 border-2 border-dashed border-muted-foreground/50 rounded-lg p-8 text-center">
            <label
              htmlFor="picture"
              className="cursor-pointer text-muted-foreground"
            >
              Drag & drop files here, or click to select files
            </label>
            <Input
              id="picture"
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
          {previews.length > 0 && (
            <div>
              <h3 className="text-lg font-medium">Selected Files:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                {previews.map((preview, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={preview}
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
              ? "Please select up to 3 files"
              : "Generate Portrait"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
