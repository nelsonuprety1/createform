import { createForm } from '@createform/react';
import { Button, Input, Stack, Text } from '@chakra-ui/react';
import { z } from 'zod';

const validationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const useLoginForm = createForm({
  initialValues: {
    email: '',
    password: '',
  },
  mode: 'onSubmit',
  validationSchema,
});

export function FormZodValidation() {
  const { register, handleReset, handleSubmit, state } = useLoginForm();
  const { errors, touched } = state;

  function onSubmit(e: any) {
    console.log(e);
  }

  function onReset(e: any) {
    console.log(e);
  }

  return (
    <Stack p={30}>
      <h1>Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onReset={handleReset(onReset)}
        noValidate
      >
        <Input mt={15} type="email" {...register('email')} />
        {touched.email && <Text color="red.500">{errors.email}</Text>}
        <Input mt={15} type="password" {...register('password')} />
        {touched.password && <Text color="red.500">{errors.password}</Text>}
        <Stack direction="row" spacing={4} justify="center" mt={5}>
          <Button type="reset">Reset</Button>
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Stack>
  );
}
