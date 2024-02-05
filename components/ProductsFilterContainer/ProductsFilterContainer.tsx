'use client';
import cx from 'clsx';
import { Dispatch, SetStateAction, useState } from 'react';
import { Text, Group, rem, Button, Container, Skeleton } from '@mantine/core';
import { IconListSearch } from '@tabler/icons-react';
import classes from './ProductsFilterContainer.module.css';
import useGetAllCategories from '@/hooks/useGetAllCategories';

interface IProductsFilterContainerProps {
  setSelectedCategory: Dispatch<SetStateAction<number>>;
  selectedCategory: number;
}

export function ProductsFilterContainer({
  setSelectedCategory,
  selectedCategory,
}: IProductsFilterContainerProps) {
  const { categories, isFetching } = useGetAllCategories([]);
  const [active, setActive] = useState(selectedCategory);

  if (isFetching) {
    return (
      <Container size={'lg'}>
        <Skeleton height={'300px'} width="100%" radius="xl" p={0} />
      </Container>
    );
  }
  const allCategories = [{ id: 0, name: 'All' }, ...categories];
  const items = allCategories.map((item, index) => (
    <Button
      variant="transparent"
      fullWidth
      justify="start"
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
        setSelectedCategory(item.id);
      }}
      key={item.name}
      className={cx(classes.link, { [classes.linkActive]: active === index })}
      //   style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))` }}
    >
      {item.name}
    </Button>
  ));

  return (
    <div className={classes.root}>
      <Group mb="md">
        <IconListSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        <Text>Categories</Text>
      </Group>
      <div className={classes.links}>
        <div
          className={classes.indicator}
          style={{
            transform: `translateY(calc(${active} * var(--link-height) + var(--indicator-offset)))`,
          }}
        />
        {items}
      </div>
    </div>
  );
}
