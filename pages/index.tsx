import { Input, Stack } from '@chakra-ui/react';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Stack spacing="6" align="center" justify="center" height="100vh" maxW="500px" margin="0 auto">
      <Input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </Stack>
  );
}
