import {
  Container,
  Flex,
  Heading,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import React from 'react';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const Navbar = () => {
  const textColor = useColorModeValue('Flax.900', 'Flax.200');

  return (
    <Flex as={'nav'} p={3}>
      <Container maxW={'full'}>
        <Heading as={'h2'} color={textColor}>
          Sinhala Quiz
        </Heading>
      </Container>
      <Container maxW={'full'} centerContent alignItems={'end'}>
        <ToggleTheme />
      </Container>
    </Flex>
  );
};

export default Navbar;
