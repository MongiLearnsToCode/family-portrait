'use client';

import AuthButton from "@/components/auth-button";
import { BackgroundSelector } from "@/components/background-selector";
import { FileUploader } from "@/components/file-uploader";
import { HiresSelector } from "@/components/hires-selector";
import { StyleSelector } from "@/components/style-selector";
import { useState } from "react";

export default function Home() {
  const [background, setBackground] = useState("neutral");
  const [style, setStyle] = useState("realistic");
  const [hires, setHires] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="absolute top-4 right-4">
        <AuthButton />
      </div>
      <main className="flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Create Your Family Portrait with AI
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Upload a few photos of your family members, and our AI will generate a beautiful
          composite portrait for you. Try it now for free!
        </p>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">Choose a Background</h2>
            <BackgroundSelector onSelect={setBackground} />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">Choose a Style</h2>
            <StyleSelector onSelect={setStyle} />
          </div>
        </div>
        <HiresSelector onCheckedChange={setHires} />
        <FileUploader background={background} style={style} hires={hires} />
      </main>
    </div>
  );
}
