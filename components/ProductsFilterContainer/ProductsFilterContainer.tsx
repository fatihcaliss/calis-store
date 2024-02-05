'use client';
import cx from 'clsx';
import { Dispatch, SetStateAction, useState } from 'react';
import {
  Text,
  Group,
  rem,
  Button,
  Container,
  Skeleton,
  TextInput,
  Divider,
  RangeSlider,
} from '@mantine/core';
import { IconEyeDollar, IconListSearch } from '@tabler/icons-react';
import classes from './ProductsFilterContainer.module.css';
import useGetAllCategories from '@/hooks/useGetAllCategories';
import { debounce } from '@/utils/debounce';

interface IProductsFilterContainerProps {
  setSelectedCategory: Dispatch<SetStateAction<number>>;
  selectedCategory: number;
  setFilterParams: Dispatch<SetStateAction<object>>;
}

export function ProductsFilterContainer({
  setSelectedCategory,
  selectedCategory,
  setFilterParams,
}: IProductsFilterContainerProps) {
  const { categories, isFetching } = useGetAllCategories([]);
  const [active, setActive] = useState(selectedCategory);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (e: any, name: string) => updateDebounceText(e.target.value, name);
  const updateDebounceText = debounce((text, name) => {
    setFilterParams((prev) => {
      return !!text && { ...prev, [name]: text };
    });
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onRangeChange = (e: any) => updateDebounceRange(e);
  const updateDebounceRange = debounce((rangeValues) => {
    setFilterParams((prev) => {
      return (
        Array.isArray(rangeValues) && {
          ...prev,
          price_min: rangeValues[0],
          price_max: rangeValues[1],
        }
      );
    });
  });

  if (isFetching) {
    return (
      <Container size={'lg'}>
        <Skeleton height={'500px'} width="100%" radius="xl" p={0} />
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
        setFilterParams((prev) => {
          return { ...prev, categoryId: item.id };
        });
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
      <Divider my="md" />
      <div className={classes.links}>
        <div
          className={classes.indicator}
          style={{
            transform: `translateY(calc(${active} * var(--link-height) + var(--indicator-offset)))`,
          }}
        />
        {items}
      </div>
      <Divider my="md" />
      <TextInput
        name="title"
        withAsterisk
        label="Search Product With Name"
        placeholder="Type a product."
        onChange={(e) => onChange(e, 'title')}
      />
      <Divider my="md" />
      {/* <TextInput
        withAsterisk
        label="Min. Price For a Product"
        placeholder="Type your min. price"
        onChange={(e) => onChange(e, 'price_min')}
      />
      <Divider my="md" />
      <TextInput
        withAsterisk
        label="Max. Price For a Product"
        placeholder="Type your max. price"
        onChange={(e) => onChange(e, 'price_max')}
      /> */}
      <Group mb="md">
        <IconEyeDollar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        <Text>Price Range:</Text>
      </Group>
      <RangeSlider
        minRange={20}
        min={1}
        max={500}
        step={10}
        defaultValue={[1, 500]}
        onChange={(e) => onRangeChange(e)}
      />
    </div>
  );
}
