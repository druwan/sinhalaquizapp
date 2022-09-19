import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const QuizAlternativesCard = ({ correct, alternatives }) => {
  return (
    <Flex justifyContent={'space-around'} gap={3}>
      <ButtonGroup>
        {alternatives.map((alt) => (
          <Button
            key={alt.id}
            size={'lg'}
            bg={useColorModeValue('Mint.300', 'Flax.200')}
            color={'Raisin.900'}
          >
            <Text fontSize={'xl'}>
              {alt.sinhala.script}{' '}
              <Text fontSize={'sm'}>{alt.sinhala.alphabetical}</Text>
            </Text>
          </Button>
        ))}
      </ButtonGroup>
    </Flex>
  );
};

export default QuizAlternativesCard;
