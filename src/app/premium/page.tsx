'use client';

import { useState } from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FileUploader } from '@/components/file-uploader';
import { BackgroundSelector } from '@/components/background-selector';
import withAuth from '@/components/with-auth';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';

function PremiumPage() {
  const { data: session } = useSession();
  const currentUser = useQuery(api.users.getCurrentUser);
  const [background, setBackground] = useState('neutral');
  const [style, setStyle] = useState('realistic');
  const [hires, setHires] = useState(false);

  const handleUpgrade = () => {
    if (!currentUser) return;

    const metadata = { userId: currentUser._id };
    const encodedMetadata = encodeURIComponent(JSON.stringify(metadata));
    const productId = 'YOUR_PRODUCT_ID'; // TODO: Replace with actual product ID from Polar.sh

    window.location.href = `/checkout?product_id=${productId}&metadata=${encodedMetadata}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
        Welcome to the Premium Area!
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mb-8">
        You can see this page because you are signed in.
      </p>

      {!currentUser?.premium && (
        <div className="mb-8">
          <p className="text-lg text-center mb-4">You are not a premium user. Upgrade now to unlock all features!</p>
          <Button onClick={handleUpgrade}>Upgrade to Premium</Button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <div>
          <h2 className="text-2xl font-bold mb-4">1. Select a Background</h2>
          <BackgroundSelector onSelect={setBackground} />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">2. Upload Your Photos</h2>
          <FileUploader background={background} style={style} hires={hires} />
        </div>
      </div>
    </div>
  );
}

export default withAuth(PremiumPage);