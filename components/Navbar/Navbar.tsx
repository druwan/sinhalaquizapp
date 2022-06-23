import { Box, Container, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const Navbar = () => {
  return (
    <Container maxW={'full'} bg={'blue'} centerContent>
      <HStack spacing={'20'}>
        <Heading>Sinhala Quiz</Heading>
        <Box w={'24'} textAlign={'center'}>
          <ToggleTheme />
        </Box>
      </HStack>
    </Container>
  );
};

export default Navbar;
