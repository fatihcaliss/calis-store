import { Image, Card, Text, Group, Button, useMantineTheme, rem, ActionIcon } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import classes from './ProductCard.module.css';
import { IProduct } from '@/models/product.model';
import { useRouter } from 'next/navigation';
import { IconExternalLink, IconShoppingCart } from '@tabler/icons-react';
import { useCartStore } from '@/store/cart';
import { toast } from 'react-toastify';
import { useState } from 'react';

export function ProductCard({ id, title, price, description, images, category }: IProduct) {
  const router = useRouter();
  const theme = useMantineTheme();
  const { addToCart, cart, updateCartItemQuantity } = useCartStore();
  const productInCart = cart.find((item) => item.product.id === id);
  const [quantity, setQuantity] = useState(productInCart ? productInCart.quantity : 0);

  const handleIncrement = () => {
    toast.success('You successfully added product to your cart.');
    const updatedQuantity = quantity + 1;
    setQuantity(updatedQuantity);

    if (productInCart) {
      updateCartItemQuantity(id, updatedQuantity);
    } else {
      addToCart({
        id: id,
        title: title,
        price: price,
        description: description,
        images: images,
        category: category,
        creationAt: '',
        updatedAt: '',
      });
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const updatedQuantity = quantity - 1;
      setQuantity(updatedQuantity);

      if (productInCart) {
        updateCartItemQuantity(id, updatedQuantity);
      }
    }
  };

  const slides = images?.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder padding="xl" style={{ minHeight: '200px', width: '280px' }}>
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

      <Text fz="sm" c="dimmed">
        Category: {category?.name}
      </Text>

      <Text fz="sm" c="dimmed" mt="sm" lineClamp={4} mb={'lg'}>
        {description}
      </Text>

      <Group mt="auto" justify="space-between">
        <div>
          <Text fz="xl" span fw={500} className={classes.price}>
            {price + '$'}
          </Text>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <ActionIcon
            variant="filled"
            aria-label="Settings"
            color="cyan"
            onClick={() => router.push(`/product/${id}`)}
          >
            <IconExternalLink style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
          {quantity > 0 ? (
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <ActionIcon
                variant="filled"
                aria-label="Decrement"
                color="blue"
                onClick={handleDecrement}
                size={'lg'}
              >
                -
              </ActionIcon>
              {quantity}
              <ActionIcon
                variant="filled"
                aria-label="Increment"
                color="blue"
                onClick={handleIncrement}
                size={'lg'}
              >
                +
              </ActionIcon>
            </div>
          ) : (
            <Button
              leftSection={
                <IconShoppingCart
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[0]}
                />
              }
              radius="md"
              onClick={handleIncrement}
            >
              Add to cart
            </Button>
          )}
        </div>
      </Group>
    </Card>
  );
}
