import { Paper, Text, Title, Button } from '@mantine/core';

import classes from './CategoryCard.module.css';

interface CardProps {
  image: string;
  name: string;
}

export function CategoryCard({ image, name }: CardProps) {
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
      <Button variant="white" color="dark">
        Go to store
      </Button>
    </Paper>
  );
}
