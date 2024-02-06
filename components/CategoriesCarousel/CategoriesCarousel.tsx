'use client';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme, rem, Skeleton } from '@mantine/core';
import { CategoryCard } from './CategoryCard';
import useGetAllCategories from '@/hooks/useGetAllCategories';
import classes from './CategoriesCarousel.module.css';
import { ICategory } from '@/models/category.model';

interface ICategoriesCarouselProps {
  initialCategoriesData: ICategory[];
}

export function CategoriesCarousel({ initialCategoriesData }: ICategoriesCarouselProps) {
  const { categories, isLoading } = useGetAllCategories(initialCategoriesData);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = categories?.map((item) => (
    <Carousel.Slide key={item.id}>
      {isLoading ? (
        <Skeleton width={'350px'} height={'440px'} radius={'md'} />
      ) : (
        <CategoryCard {...item} />
      )}
    </Carousel.Slide>
  ));

  if (isLoading) return;

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '350px' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      nextControlProps={{
        style: { opacity: 1, backgroundColor: 'white', width: '36px', height: '36px' },
      }}
      previousControlProps={{
        style: { opacity: 1, backgroundColor: 'white', width: '36px', height: '36px' },
      }}
      classNames={{
        root: classes.carousel,
        controls: classes.carouselControls,
      }}
      align="start"
      slidesToScroll={mobile ? 1 : 3}
      loop
      dragFree
    >
      {slides}
    </Carousel>
  );
}
