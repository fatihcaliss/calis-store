'use client';

import { Button, Container, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';

export default function ProductNotFound() {
  const router = useRouter();
  return (
    <Container size={'lg'} style={{ textAlign: 'center' }}>
      <Text size="48px" fw={900} variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 0 }}>
        PRRODUCT NOT FOUND
      </Text>
      <Button type="button" onClick={() => router.push('/')} mt={'lg'}>
        Back to Home Page
      </Button>
    </Container>
  );
}
