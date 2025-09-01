'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PremiumPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

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
        <p className="text-lg text-muted-foreground max-w-2xl">
          You can see this page because you are signed in.
        </p>
      </div>
    );
  }

  return null;
}
