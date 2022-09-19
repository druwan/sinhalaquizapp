import {
  Button,
  ButtonGroup,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const QuizAlternativesCard = ({ correct, alternatives }) => {
  const checkAnswer = (e) => {
    e.preventDefault();
    if (e.target.innerText === correct[0].sinhala.alphabetical) {
      console.log('Correct! Save score somehow...');
    } else {
      console.log('Incorrect, move on to next question');
    }
  };
  return (
    <Flex justifyContent={'space-around'} gap={3}>
      <ButtonGroup>
        {alternatives.map((alt) => (
          <Button
            key={alt.id}
            size={'lg'}
            bg={useColorModeValue('Mint.300', 'Flax.200')}
            color={'Raisin.900'}
            onClick={(e) => checkAnswer(e)}
          >
            <Text fontSize={'xl'}>{alt.sinhala.alphabetical}</Text>
          </Button>
        ))}
      </ButtonGroup>
    </Flex>
  );
};

export default QuizAlternativesCard;
