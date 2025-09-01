'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <p>{session.user?.email}</p>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  }

  return <Button onClick={() => signIn('google')}>Sign in with Google</Button>;
}
