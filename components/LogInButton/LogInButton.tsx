'use client';
import { Button } from '@mantine/core';
import { signIn, signOut, useSession } from 'next-auth/react';

export function LogInButton() {
  const { data: session } = useSession();

  //   console.log('session', session);

  if (session?.user) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }
  return (
    <>
      {/* Not signed in <br /> */}
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  );
}
