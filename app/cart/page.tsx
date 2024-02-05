'use client';

import { useCartStore } from '@/store/cart';
import { Button, Paper, Container, Text, Image, Grid } from '@mantine/core';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateCartItemQuantity = useCartStore((state) => state.updateCartItemQuantity);

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    updateCartItemQuantity(productId, newQuantity);
  };

  const totalCartCost = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <Container>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Paper shadow="xs" p="xl">
          {cart.map((item) => (
            <div key={item.product.id} style={{ marginBottom: '16px' }}>
              <Grid gutter="md">
                <div style={{ marginRight: '16px' }}>
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.title}
                    width={100}
                    height={100}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <Text size="xl">{item.product.title}</Text>
                  <Text size="lg">${item.product.price}</Text>
                </div>
                <div>
                  <Button
                    size="xs"
                    onClick={() => handleRemoveFromCart(item.product.id)}
                    style={{ marginRight: '8px' }}
                  >
                    Remove
                  </Button>
                  <Button
                    size="xs"
                    onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </Button>
                  <span style={{ margin: '0 8px' }}>{item.quantity}</span>
                  <Button
                    size="xs"
                    onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </Grid>
            </div>
          ))}
          <div style={{ marginTop: '16px' }}>
            <Text size="xl">Total: ${totalCartCost}</Text>
            <Button
              size="lg"
              variant="filled"
              color="teal"
              style={{ marginTop: '16px' }}
              onClick={() => router.push('/payment')}
            >
              Checkout
            </Button>
          </div>
        </Paper>
      )}
    </Container>
  );
};

export default CartPage;
