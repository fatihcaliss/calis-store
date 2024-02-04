import { CardsCarousel } from '@/components/CardsCarousel/CardsCarousel';
import { CategoriesCarousel } from '@/components/CategoriesCarousel/CategoriesCarousel';
import { Container } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <Container size="lg">
        <CardsCarousel />
      </Container>

      <Container size="lg" mt={'6rem'} mb={'6rem'}>
        <CategoriesCarousel />
      </Container>

      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
    </>
  );
}
