import { Box, Center, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const QuizCard = () => {
  return (
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
          එක
        </Text>
        Google translate btn for tips?
      </Box>
    </Center>
  );
};

export default QuizCard;
