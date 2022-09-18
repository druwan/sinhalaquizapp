import {
  Container,
  Flex,
  Heading,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const Navbar = () => {
  const { colorMode } = useColorMode();
  const textColor = colorMode === 'light' ? 'Raisin.900' : 'Flax.100';

  const Links = ['Family', 'Numbers', 'Pronouns', 'Time'];

  const NavLink = ({ children, href }) => (
    <NextLink href={'/' + href} passHref>
      <Link>{children}</Link>
    </NextLink>
  );

  return (
    <Flex as={'nav'} p={3}>
      <Container maxW={'full'}>
        <Heading as={'h2'} color={textColor}>
          Sinhala Quiz
        </Heading>
      </Container>
      <Flex maxW={'full'} py={3}>
        <Text fontSize={'md'}>
          {Links.map((link) => (
            <NavLink key={link} href={link}>
              {link}
            </NavLink>
          ))}
        </Text>
      </Flex>
      <Container maxW={'full'} centerContent alignItems={'end'}>
        <ToggleTheme />
      </Container>
    </Flex>
  );
};

export default Navbar;
