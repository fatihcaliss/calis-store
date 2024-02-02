'use client';
import { Button, Text } from '@mantine/core';
import { signIn, signOut, useSession } from 'next-auth/react';
// import { IconUserCircle } from '@tabler/icons-react';

export function LogInButton() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <>
        <Text fw={500}>{session?.user?.email}</Text>
        <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }
  return <Button onClick={() => signIn()}>Sign in</Button>;
}
