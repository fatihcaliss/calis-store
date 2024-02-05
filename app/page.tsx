import { CardsCarousel } from '@/components/CardsCarousel/CardsCarousel';
import { CategoriesCarousel } from '@/components/CategoriesCarousel/CategoriesCarousel';
import { fetchAllCategories, fetchProductsByCategoryId } from '@/services';
import { Container } from '@mantine/core';

export default async function HomePage() {
  const initialData = await fetchProductsByCategoryId(5);
  const initialCategoriesData = await fetchAllCategories();
  return (
    <>
      <Container size="lg">
        <CardsCarousel initialData={initialData} />
      </Container>
      <Container size="lg" mt={'6rem'} mb={'6rem'}>
        <CategoriesCarousel initialCategoriesData={initialCategoriesData} />
      </Container>
    </>
  );
}
