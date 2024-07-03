"use client";
import { Appbar } from "@wallet-app/ui/appbar";
import TestUI from "../components/UI/Test";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <>
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
      <div className="bg-blue-500">Hello Users</div>
      <TestUI />
    </>
  );
}
