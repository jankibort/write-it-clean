import { Text, useBreakpointValue } from '@chakra-ui/react';

export const Logo = () => {
  const logoSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });

  return (
    <Text
      bgGradient="linear(to-l, #D3CDAE, #DAB692)"
      bgClip="text"
      fontSize={logoSize}
      fontWeight="extrabold"
    >
      asdf
    </Text>
  );
};
