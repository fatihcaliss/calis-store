'use client';
import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function Form() {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 2 ? "You must type 'changeme' " : null),
    },
  });

  return (
    <Box maw={340} mx="auto" mt={'7rem'}>
      <form
        onSubmit={form.onSubmit(async (values, e) => {
          e?.preventDefault();
          const result = await signIn('credentials', {
            email: values.email,
            password: values.password,
            redirect: false,
          });
          if (result?.status === 401) {
            return toast.error('This user not authorized.Check your email and password please.');
          }
        })}
      >
        <TextInput
          withAsterisk
          label="Email"
          placeholder="john@mail.com"
          {...form.getInputProps('email')}
        />

        <TextInput
          withAsterisk
          label="Password"
          placeholder="changeme"
          {...form.getInputProps('password')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="button" onClick={() => router.push('/')}>
            Back to Home Page
          </Button>
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
