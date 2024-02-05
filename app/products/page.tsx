'use client';
import { ProductsContainer } from '@/components/ProductsContainer/ProductsContainer';
import { ProductsFilterContainer } from '@/components/ProductsFilterContainer/ProductsFilterContainer';
import { Container, Grid } from '@mantine/core';
import { useState } from 'react';

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [filterParams, setFilterParams] = useState({});

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
