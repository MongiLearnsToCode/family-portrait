'use client';

import { useState } from 'react';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import withAuth from '@/components/with-auth';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

function LibraryPage() {
  const portraits = useQuery(api.portraits.getPortraits);
  const currentUser = useQuery(api.users.getCurrentUser);
  const deletePortrait = useMutation(api.portraits.deletePortrait);
  const savePortrait = useMutation(api.portraits.savePortrait);
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRegenerate = async (portrait: any) => {
    setLoading(portrait._id);
    setError(null);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageUrls: portrait.sourceImageUrls,
          background: portrait.background,
          style: portrait.style,
          hires: portrait.hires,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to re-generate portrait. Please try again.');
      }

      const data = await response.json();

      await savePortrait({
        imageUrl: data.text,
        sourceImageUrls: portrait.sourceImageUrls,
        background: portrait.background,
        style: portrait.style,
        hires: portrait.hires,
      });
    } catch (error: any) {
      console.error('Error:', error);
      setError(error.message || 'An unknown error occurred.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Library</h1>
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {portraits && portraits.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portraits.map((portrait) => (
            <Card key={portrait._id}>
              <CardHeader>
                <CardTitle>Style: {portrait.style}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={portrait.imageUrl}
                  alt="Generated Portrait"
                  width={512}
                  height={512}
                  className="rounded-md object-cover"
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="destructive"
                  onClick={() => deletePortrait({ id: portrait._id })}
                >
                  Delete
                </Button>
                <Button
                  onClick={() => handleRegenerate(portrait)}
                  disabled={loading === portrait._id}
                >
                  {loading === portrait._id ? 'Re-generating...' : 'Re-generate'}
                </Button>
                <Button
                  onClick={() => window.open(portrait.imageUrl, '_blank')}
                  disabled={!currentUser?.premium || !portrait.hires}
                >
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <p>You haven't generated any portraits yet.</p>
      )}
    </div>
  );
}

export default withAuth(LibraryPage);
