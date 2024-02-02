'use client';
import { Button } from '@mantine/core';
import { signIn, signOut, useSession } from 'next-auth/react';
// import { IconUserCircle } from '@tabler/icons-react';

export function LogInButton() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <>
        {session?.user?.email} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }
  return <Button onClick={() => signIn()}>Sign in</Button>;
}
