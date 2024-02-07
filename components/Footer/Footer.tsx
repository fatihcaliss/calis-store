import { Container, Group, ActionIcon, rem, Text } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import classes from './Footer.module.css';
import Link from 'next/link';

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text c="dimmed" size="sm">
          © 2023{' '}
          <Link href="https://www.linkedin.com/in/fatihcaliss/" style={{ color: 'inherit' }}>
            fatihcalis
          </Link>
          . All rights reserved.
        </Text>
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon
            component="a"
            href="https://github.com/fatihcaliss"
            size="xl"
            color="gray"
            variant="subtle"
          >
            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
