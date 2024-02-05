'use client';
import {
  Image,
  Card,
  Text,
  Group,
  Button,
  rem,
  Container,
  SimpleGrid,
  useMantineTheme,
  ActionIcon,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconShoppingCart } from '@tabler/icons-react';
import classes from './ProductDetailPageBanner.module.css';
import { IProduct } from '@/models/product.model';
import { useCartStore } from '@/store/cart';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface ProductDetailPageBannerProps {
  productDetailData: IProduct;
}

export function ProductDetailPageBanner({ productDetailData }: ProductDetailPageBannerProps) {
  const theme = useMantineTheme();
  const slides = productDetailData?.images?.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  const { addToCart, cart, updateCartItemQuantity } = useCartStore();
  const productInCart = cart.find((item) => item.product.id === productDetailData?.id);
  const [quantity, setQuantity] = useState(productInCart ? productInCart.quantity : 0);

  const handleIncrement = () => {
    toast.success('You successfully added product to your cart.');
    const updatedQuantity = quantity + 1;
    setQuantity(updatedQuantity);

    if (productInCart) {
      updateCartItemQuantity(productDetailData?.id, updatedQuantity);
    } else {
      addToCart({
        id: productDetailData?.id,
        title: productDetailData?.title,
        price: productDetailData?.price,
        description: productDetailData?.description,
        images: productDetailData?.images,
        category: productDetailData?.category,
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
        updateCartItemQuantity(productDetailData?.id, updatedQuantity);
      }
    }
  };

  return (
    <Container my="md" fluid>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" style={{ minHeight: 'fit-content' }}>
        <Card radius="md" withBorder className={classes.imageContainer} p={'xl'}>
          <Carousel
            nextControlProps={{
              style: { opacity: 1, backgroundColor: 'white' },
            }}
            previousControlProps={{
              style: { opacity: 1, backgroundColor: 'white' },
            }}
            withIndicators
            loop
            classNames={{
              root: classes.carousel,
              controls: classes.carouselControls,
              indicator: classes.carouselIndicator,
            }}
          >
            {slides}
          </Carousel>
        </Card>
        <Card radius="md" withBorder padding="xl">
          <Group justify="space-between" mt="lg">
            <Text fw={500} fz="lg">
              {productDetailData?.title}
            </Text>
          </Group>

          <Text fz="sm" c="dimmed" mt="sm">
            Category: {productDetailData?.category?.name}
          </Text>
          <Text fz="sm" c="dimmed" mt="sm" mb={'xl'}>
            {productDetailData?.description}
          </Text>

          <Group justify="space-between" mt="auto">
            <div>
              <Text fz="xl" span fw={500} className={classes.price}>
                {productDetailData?.price + '$'}
              </Text>
            </div>

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
          </Group>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
