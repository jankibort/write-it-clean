import { ChakraProvider } from '@chakra-ui/react';

import { Logo } from 'components';

export const App = () => {
  return (
    <ChakraProvider>
      {/* App components */}
      <Logo />
    </ChakraProvider>
  );
};
