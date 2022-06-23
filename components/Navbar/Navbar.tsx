import { Center, Container, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const Navbar = () => {
  return (
    <Container maxW={'full'} centerContent p={3}>
      <HStack spacing={'20'}>
        <Heading>Sinhala Quiz</Heading>
        <Center w={'24'}>
          <ToggleTheme />
        </Center>
      </HStack>
    </Container>
  );
};

export default Navbar;
