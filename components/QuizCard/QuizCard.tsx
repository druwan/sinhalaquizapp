import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Container,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  useColorMode,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import TrackProgress from '../Progress/TrackProgress';

const QuizCard = () => {
  const [value, setValue] = useState('');
  const { colorMode } = useColorMode();
  const colorScheme = colorMode === 'light' ? 'Raisin' : 'Turquoise';
  const invertedColorScheme = colorMode === 'light' ? 'Mint' : 'Flax';
  return (
    <>
      <Container maxW={'container.sm'}>
        <TrackProgress />
        <Heading
          as={'h3'}
          size={'lg'}
          display={'flex'}
          alignContent={'center'}
          justifyContent={'center'}
        >
          Question bla bla bla
        </Heading>

        <ButtonGroup
          colorScheme={invertedColorScheme}
          size={'lg'}
          display={'flex'}
          alignContent={'center'}
          justifyContent={'center'}
        >
          <SimpleGrid spacing={5} columns={2}>
            {/* Get alternatives for each question. */}
            <Button>Alternative 1</Button>
            <Button>Alternative 2</Button>
            <Button>Alternative 3</Button>
            <Button>Alternative 4</Button>
          </SimpleGrid>
        </ButtonGroup>
      </Container>
      <ButtonGroup
        pt={5}
        spacing={5}
        display={'flex'}
        alignContent={'center'}
        justifyContent={'center'}
        variant={'ghost'}
        colorScheme={colorScheme}
      >
        <Button leftIcon={<ArrowLeftIcon />}>Previous Question</Button>
        <Button rightIcon={<ArrowRightIcon />}>Next Question</Button>
      </ButtonGroup>
    </>
  );
};

export default QuizCard;
