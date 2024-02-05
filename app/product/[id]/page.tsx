'use client';
import { ProductDetailPageBanner } from '@/components/ProductDetailPageBanner/ProductDetailPageBanner';
import useGetProductDetail from '@/hooks/useGetProductDetail';
import { Button, Container, Skeleton, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: { id: string } }) {
  const { productDetailData, isFetching, error } = useGetProductDetail(params.id);
  const router = useRouter();

  if (isFetching) {
    return (
      <Container size={'lg'}>
        <Skeleton height={'400px'} mt={6} width="100%" radius="xl" />
      </Container>
    );
  }

  if (productDetailData === undefined || error) {
    return (
      <Container size={'lg'} style={{ textAlign: 'center' }}>
        <Text
          size="48px"
          fw={900}
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 0 }}
        >
          PRRODUCT NOT FOUND
        </Text>
        <Button type="button" onClick={() => router.push('/')} mt={'lg'}>
          Back to Home Page
        </Button>
      </Container>
    );
  }

  return (
    <Container size={'lg'}>
      <ProductDetailPageBanner productDetailData={productDetailData} />
    </Container>
  );
}
