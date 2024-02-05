import { SuccessfulPayment } from '@/components/SuccesfulPayment/SuccessfulPayment';
import { Container } from '@mantine/core';

export default function Page() {
  return (
    <Container size={'lg'}>
      <SuccessfulPayment />
    </Container>
  );
}
