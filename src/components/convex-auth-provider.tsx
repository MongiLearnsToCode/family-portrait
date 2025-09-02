"use client";

import { useSession } from "next-auth/react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect } from "react";

export default function ConvexAuthProvider() {
  const { data: session } = useSession();
  const storeUser = useMutation(api.users.store);

  useEffect(() => {
    if (session?.user) {
      storeUser();
    }
  }, [session?.user, storeUser]);

  return null;
}