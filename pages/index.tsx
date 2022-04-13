import { Button, Input, Stack } from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { withSSRGuest } from '../utils/withSSRGuest';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = { email, password };
    signIn(data);
  };

  return (
    <Stack
      onSubmit={handleSubmit}
      as="form"
      spacing="6"
      align="center"
      justify="center"
      height="100vh"
      maxW="500px"
      margin="0 auto">
      <Input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Entrar</Button>
    </Stack>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {}
  };
});
