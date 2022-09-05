import {
  Box,
  Center,
  Container,
  Flex,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const QuizCard = () => {
  return (
    <>
      <Center py={6}>
        <Box
          minW={'326px'}
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('Mint.300', 'Flax.200')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
          maxH={'400px'}
          color='Raisin.900'
        >
          <Text fontSize={'2xl'} textAlign={'center'}>
            Get a Translation here in English
          </Text>
          Google translate btn for tips?
        </Box>
      </Center>
      <Container maxW={'md'} gap={3}>
        <Flex justifyContent={'space-around'} gap={3}>
          <Box
            minW={'326px'}
            maxW={'445px'}
            bg={useColorModeValue('Mint.300', 'Flax.200')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
            maxH={'400px'}
            color='Raisin.900'
          >
            <Text>Alt 1</Text>
          </Box>
          <Box
            minW={'326px'}
            maxW={'445px'}
            bg={useColorModeValue('Mint.300', 'Flax.200')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
            maxH={'400px'}
            color='Raisin.900'
          >
            <Text>Alt 2</Text>
          </Box>
        </Flex>
        <Flex justifyContent={'space-around'} gap={3}>
          <Box
            minW={'326px'}
            maxW={'445px'}
            bg={useColorModeValue('Mint.300', 'Flax.200')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
            maxH={'400px'}
            color='Raisin.900'
          >
            <Text>Alt 3</Text>
          </Box>
          <Box
            minW={'326px'}
            maxW={'445px'}
            bg={useColorModeValue('Mint.300', 'Flax.200')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
            maxH={'400px'}
            color='Raisin.900'
          >
            <Text>Alt 4</Text>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default QuizCard;
