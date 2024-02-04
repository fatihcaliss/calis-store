import { Image, Card, Text, Group, Button } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import classes from './ProductsCarouselCard.module.css';
import { IProduct } from '@/models/product.model';

export function ProductCarouselCard({ id, title, price, description, images, category }: IProduct) {
  const slides = images?.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder padding="xl">
      <Card.Section>
        <Carousel
          withIndicators
          loop
          nextControlProps={{
            style: { opacity: 0.5, backgroundColor: 'white' },
          }}
          previousControlProps={{
            style: { opacity: 0.5, backgroundColor: 'white' },
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

      <Text fz="sm" c="dimmed" mt="sm" lineClamp={4}>
        {description}
      </Text>

      <Group justify="space-between" mt="md">
        <div>
          <Text fz="xl" span fw={500} className={classes.price}>
            {price + '$'}
          </Text>
        </div>

        <Button radius="md">Add to cart</Button>
      </Group>
    </Card>
  );
}
