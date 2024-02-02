'use client';
import { redirect } from 'next/navigation';
import Form from './form';
import { useSession } from 'next-auth/react';

export default function Page() {
  const { data: session } = useSession();

  if (session) {
    redirect('/');
  }
  return <Form />;
}
