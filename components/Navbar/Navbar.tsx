import { Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const Navbar = () => {
  return (
    <Flex as={'nav'} p={3}>
      <Container maxW={'full'}>
        <Heading as={'h2'}>Sinhala Quiz</Heading>
      </Container>

      <Container maxW={'full'} centerContent alignItems={'end'}>
        <ToggleTheme />
      </Container>
    </Flex>
  );
};

export default Navbar;
