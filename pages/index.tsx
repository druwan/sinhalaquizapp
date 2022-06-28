import { Box, Container, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import PrevNextCardBtn from '../components/Buttons/PrevNextCardBtn';
import Navbar from '../components/Navbar/Navbar';
import QuizCard from '../components/QuizCard/QuizCard';

const HomePage = () => {
  return (
    <Box>
      <Head>
        <title>Sinhala Quiz</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Christopher Vestman' />
        <meta name='contact' content='contact@christophervestman.dev' />
      </Head>

      {/* Navbar */}
      <Navbar />
      <Flex
        flexDir={'column'}
        alignItems={'center'}
        minH={'75vh'}
        justifyContent={'center'}
      >
        <QuizCard />

        <Container as={'main'} maxW={'container.sm'}>
          <PrevNextCardBtn />
        </Container>
      </Flex>
    </Box>
  );
};

export default HomePage;
