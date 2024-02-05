'use client';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme, rem, Skeleton } from '@mantine/core';
import { ProductCarouselCard } from './ProductCarouselCard';
import useGetCategoryProducts from '@/hooks/useGetCategoryProducts';
import classes from './CardsCarousel.module.css';
import { IProduct } from '@/models/product.model';

interface ICardsCarouselProps {
  initialData: IProduct[];
}

export function CardsCarousel({ initialData }: ICardsCarouselProps) {
  const { products, isLoading } = useGetCategoryProducts(5, initialData);

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = products?.map((item) => (
    <Carousel.Slide key={item.title}>
      {isLoading ? (
        <Skeleton width={'350px'} height={'440px'} radius={'md'} />
      ) : (
        <ProductCarouselCard {...item} />
      )}
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '500px' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align="center"
      nextControlProps={{
        style: { opacity: 1, backgroundColor: 'white', width: '36px', height: '36px' },
      }}
      previousControlProps={{
        style: { opacity: 1, backgroundColor: 'white', width: '36px', height: '36px' },
      }}
      slidesToScroll={mobile ? 1 : 1}
      loop
      dragFree
      classNames={{
        root: classes.carousel,
        controls: classes.carouselControls,
      }}
    >
      {slides}
    </Carousel>
  );
}
