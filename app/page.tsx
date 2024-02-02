// import { Welcome } from '../components/Welcome/Welcome';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderMegaMenu } from '@/components/HeaderMegaMenu/HeaderMegaMenu';
import { CardsCarousel } from '@/components/CardsCarousel/CardsCarousel';
import { Container } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <HeaderMegaMenu />
      <Container size="md">
        <CardsCarousel />
      </Container>
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
    </>
  );
}
