import { FileUploader } from "@/components/file-uploader";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <main className="flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Create Your Family Portrait with AI
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Upload a few photos of your family members, and our AI will generate a beautiful
          composite portrait for you. Try it now for free!
        </p>
        <FileUploader />
      </main>
    </div>
  );
}