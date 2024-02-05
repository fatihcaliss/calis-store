import { Paper, Text, Title, Button } from '@mantine/core';

import classes from './CategoryCard.module.css';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cart';

interface CardProps {
  image: string;
  name: string;
  id: number;
}

export function CategoryCard({ image, name, id }: CardProps) {
  const { setSelectedCategoryId } = useCartStore();
  const handleCategoryChange = (newCategoryId: number) => {
    setSelectedCategoryId(newCategoryId);
  };
  const router = useRouter();
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          Category:
        </Text>
        <Title order={3} className={classes.title}>
          {name}
        </Title>
      </div>
      <Button
        variant="white"
        color="dark"
        onClick={() => {
          router.push('/products');
          handleCategoryChange(id);
        }}
      >
        Go to store
      </Button>
    </Paper>
  );
}
