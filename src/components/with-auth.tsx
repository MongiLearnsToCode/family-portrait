import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import React from "react";

export default function withAuth<P extends object>(
  Component: React.ComponentType<P>
) {
  return async function WithAuth(props: P) {
    const session = await getServerSession(authOptions);

    if (!session) {
      redirect("/");
    }

    return <Component {...props} />;
  };
}
