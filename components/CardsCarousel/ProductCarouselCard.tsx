import { Image, Card, Text, Group, Button } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import classes from './ProductsCarouselCard.module.css';
import { IProduct } from '@/models/product.model';
import { useRouter } from 'next/navigation';

export function ProductCarouselCard({ id, title, price, description, images, category }: IProduct) {
  const router = useRouter();
  const slides = images?.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder padding="xl" style={{ minHeight: '100%' }}>
      <Card.Section>
        <Carousel
          withIndicators
          loop
          nextControlProps={{
            style: { opacity: 1, backgroundColor: 'white' },
          }}
          previousControlProps={{
            style: { opacity: 1, backgroundColor: 'white' },
          }}
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group justify="space-between" mt="lg">
        <Text fw={500} fz="lg" truncate="end">
          {title}
        </Text>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm" lineClamp={4} mb={'sm'}>
        {description}
      </Text>

      <Group justify="space-between" mt="auto">
        <div>
          <Text fz="xl" span fw={500} className={classes.price}>
            {price + '$'}
          </Text>
        </div>

        <Button radius="md" onClick={() => router.push(`product/${id}`)}>
          Learn More Now!
        </Button>
      </Group>
    </Card>
  );
}
