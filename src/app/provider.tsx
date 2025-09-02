'use client';

import { SessionProvider } from "next-auth/react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import ConvexAuthProvider from "@/components/convex-auth-provider";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ConvexProvider client={convex}>
        <ConvexAuthProvider />
        {children}
      </ConvexProvider>
    </SessionProvider>
  );
}
