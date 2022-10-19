import { Box, Button, ButtonGroup, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../utils/loadQuestions';
import { getRandom } from '../../utils/shuffleArray';
import TrackProgress from '../Progress/TrackProgress';

const QuizCard = ({ props }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const { data, error } = useSWR(`/api/${props}`, fetcher);

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;

  // Get 5 random questions, since the array will be scrambled, we can just use the first obj and then increase
  const fiveQuestions = getRandom(data[`${props}`], 5);

  const checkAnswer = (e) => {
    e.preventDefault();
    if (
      e.target.innerText === fiveQuestions[currentQuestion].sinhala.alphabetical
    ) {
      setCurrentScore(currentScore + 1);
    } else {
      setCurrentScore(currentScore);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <>
      <Flex alignContent={'center'} justifyContent={'center'}>
        <Box
          minW={'350px'}
          maxW={'550px'}
          w={'full'}
          bg={'Flax.200'}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
          maxH={'400px'}
          color="Raisin.900">
          {currentQuestion < 5 ? (
            <>
              <Text fontSize={'2xl'} textAlign={'center'}>
                What is Sinhala for: {fiveQuestions[currentQuestion].english}{' '}
                {fiveQuestions[currentQuestion].sinhala.script}
              </Text>
              <Text>
                Question {currentQuestion + 1} of {fiveQuestions.length}
              </Text>
            </>
          ) : (
            <>
              <Text fontSize={'2xl'} textAlign={'center'}>
                Game has ended. Score: {currentScore} / {fiveQuestions.length}
              </Text>
              <Text>Start a new game by selecting a category.</Text>
            </>
          )}
        </Box>
      </Flex>
      <Flex alignContent={'center'} justifyContent={'center'} gap={3} py={3}>
        <Flex justifyContent={'space-around'} gap={3}>
          <ButtonGroup>
            {fiveQuestions.map((alternative) => (
              <Button
                key={alternative.id}
                size={'lg'}
                bg={'Flax.200'}
                color={'Raisin.900'}
                onClick={(e) => checkAnswer(e)}>
                <Text fontSize={'xl'}>{alternative.sinhala.alphabetical}</Text>
              </Button>
            ))}
          </ButtonGroup>
        </Flex>
      </Flex>
      <TrackProgress value={(currentScore * 100) / fiveQuestions.length} />
    </>
  );
};

export default QuizCard;
