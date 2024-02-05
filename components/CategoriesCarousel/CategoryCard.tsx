import { Paper, Text, Title, Button } from '@mantine/core';

import classes from './CategoryCard.module.css';
import { useRouter } from 'next/navigation';

interface CardProps {
  image: string;
  name: string;
}

export function CategoryCard({ image, name }: CardProps) {
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
      <Button variant="white" color="dark" onClick={() => router.push('/products')}>
        Go to store
      </Button>
    </Paper>
  );
}
