import { CardsCarousel } from '@/components/CardsCarousel/CardsCarousel';
import { CategoriesCarousel } from '@/components/CategoriesCarousel/CategoriesCarousel';
import { fetchAllCategories, fetchProductsByCategoryId } from '@/services';
import { Container } from '@mantine/core';

export default async function HomePage() {
  let initialData;
  let initialCategoriesData;
  try {
    initialData = await fetchProductsByCategoryId(1);
    initialCategoriesData = await fetchAllCategories();
  } catch (error) {
    console.log(error);
  }
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
