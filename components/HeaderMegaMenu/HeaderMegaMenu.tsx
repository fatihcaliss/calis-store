'use client';
import {
  Group,
  Button,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
  Badge,
} from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from '@mantine/hooks';
import { IconShoppingCart } from '@tabler/icons-react';
import classes from './HeaderMegaMenu.module.css';
import { LogInButton } from '../LogInButton/LogInButton';
import { useSession } from 'next-auth/react';
import { ThemeChangerIconButton } from '../ThemeChangerIconButton/ThemeChangerIconButton';
import { useCartStore } from '@/store/cart';

export function HeaderMegaMenu() {
  const { data: session } = useSession();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const theme = useMantineTheme();
  const { cart } = useCartStore();
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Box pb={120} suppressHydrationWarning={true}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <MantineLogo size={30} />

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Home
            </a>
            <a href="/products" className={classes.link}>
              Store
            </a>
            <a href="/cart" className={classes.link}>
              <Center inline>
                <Box component="span" mr={5}>
                  Cart
                </Box>
                <IconShoppingCart
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
                {totalQuantity > 0 && (
                  <Badge
                    size="xs"
                    circle
                    style={{ transform: 'translate(-2px,-8px)', minWidth: 'fit-content' }}
                  >
                    {totalQuantity}
                  </Badge>
                )}
              </Center>
            </a>
          </Group>

          <Group visibleFrom="sm">
            <LogInButton />
            {!session?.user?.email && <Button>Sign up</Button>}
            <ThemeChangerIconButton />
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="/" className={classes.link}>
            Home
          </a>
          <a href="/products" className={classes.link}>
            Store
          </a>
          <a href="/cart" className={classes.link}>
            <Center inline>
              <Box component="span" mr={5}>
                Cart
              </Box>
              <IconShoppingCart
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
              {totalQuantity > 0 && (
                <Badge
                  size="xs"
                  circle
                  style={{ transform: 'translate(-2px,-8px)', minWidth: 'fit-content' }}
                >
                  {totalQuantity}
                </Badge>
              )}
            </Center>
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <LogInButton />
            {!session?.user?.email && <Button>Sign up</Button>}
          </Group>
          <Divider my="sm" />

          <Center>
            <ThemeChangerIconButton />
          </Center>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
