"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <h1>Welcome, {session.user?.name}!</h1>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <>
          <h1>Sign in with GitHub</h1>
          <button onClick={() => signIn("github")}>Login with GitHub</button>
        </>
      )}
    </div>
  );
}
