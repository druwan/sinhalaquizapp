import {
  Box,
  Center,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import PrevNextCardBtn from '../Buttons/PrevNextCardBtn';
import CategoryMenu from '../CategoryMenu/CategoryMenu';

const QuizCard = () => {
  return (
    <>
      <Container>
        {/* Move this into a 'start' page */}
        <CategoryMenu />
      </Container>

      <Center py={6}>
        <Box
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('Mint.300', 'Flax.200')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
        >
          <Stack>
            <Text color='Raisin.900'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsa
              maxime quod in aliquam aperiam rerum, tempora neque iste id odio,
              vitae hic! Accusantium nam quo deleniti excepturi doloremque
              earum.
            </Text>
          </Stack>
        </Box>
      </Center>

      <Container as={'main'} maxW={'container.sm'}>
        <PrevNextCardBtn />
      </Container>
    </>
  );
};

export default QuizCard;
