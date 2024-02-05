'use client';

import useGetProducts from '@/hooks/useGetProducts';
import { Container, Skeleton } from '@mantine/core';
import { ProductCard } from '../ProductCard/ProductCard';

export function ProductsContainer() {
  const { productsData, isFetching } = useGetProducts();

  if (isFetching) {
    return (
      <Container size={'lg'}>
        <Skeleton height={'100vh'} width="100%" radius="xl" p={0} />
      </Container>
    );
  }

  console.log('productsData', productsData);
  return (
    <Container
      fluid
      display={'flex'}
      style={{ gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {productsData?.map((item) => {
        return <ProductCard {...item} />;
      })}
    </Container>
  );
}
