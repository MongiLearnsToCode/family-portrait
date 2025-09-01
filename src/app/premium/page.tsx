'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FileUploader } from '@/components/file-uploader';
import { BackgroundSelector } from '@/components/background-selector';

export default function PremiumPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [background, setBackground] = useState('neutral');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Welcome to the Premium Area!
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          You can see this page because you are signed in.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          <div>
            <h2 className="text-2xl font-bold mb-4">1. Select a Background</h2>
            <BackgroundSelector onSelect={setBackground} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">2. Upload Your Photos</h2>
            <FileUploader background={background} />
          </div>
        </div>
      </div>
    );
  }

  return null;
}