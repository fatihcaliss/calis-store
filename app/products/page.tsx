'use client';
import { ProductsContainer } from '@/components/ProductsContainer/ProductsContainer';
import { ProductsFilterContainer } from '@/components/ProductsFilterContainer/ProductsFilterContainer';
import { useCartStore } from '@/store/cart';
import { Container, Grid } from '@mantine/core';
import { useEffect, useState } from 'react';

export default function Page() {
  const { selectedCategoryId } = useCartStore();
  const [selectedCategory, setSelectedCategory] = useState<number>(selectedCategoryId);
  const [filterParams, setFilterParams] = useState({});
  useEffect(() => {
    setFilterParams({ ['categoryId']: selectedCategoryId });
  }, []);

  return (
    <Container size={'xl'} m={'auto'}>
      <Grid>
        <Grid.Col span={{ base: 12, sm: 3 }}>
          <ProductsFilterContainer
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            setFilterParams={setFilterParams}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 9 }}>
          <ProductsContainer filterParams={filterParams} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
