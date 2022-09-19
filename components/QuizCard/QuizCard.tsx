import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { getRandom } from '../../lib/shuffleArray';
import QuizAlternativesCard from './QuizAlternativesCard';

const QuizCard = ({ props }) => {
  // SCRAMBLE AND LIMIT THE ARRAY HERE, 4 choices
  const shuffledArray = getRandom(props, 4);
  // From the new Array, we need to select 1 Object to translate, and 3 extra alternatives
  const toBeTranslated = getRandom(shuffledArray, 1);

  return (
    <>
      <Flex alignContent={'center'} justifyContent={'center'}>
        <Box
          minW={'350px'}
          maxW={'550px'}
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
            What is Sinhala for: {toBeTranslated[0].english} -{' '}
            {toBeTranslated[0].sinhala.script}
          </Text>
          Google translate btn for pronounciation?
        </Box>
      </Flex>
      <Flex alignContent={'center'} justifyContent={'center'} gap={3} py={3}>
        <QuizAlternativesCard
          correct={toBeTranslated}
          alternatives={shuffledArray}
        />
      </Flex>
    </>
  );
};

export default QuizCard;
