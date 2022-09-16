import { Box, Container, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import PrevNextCardBtn from '../components/Buttons/PrevNextCardBtn';
import Navbar from '../components/Navbar/Navbar';
import QuizCard from '../components/QuizCard/QuizCard';
import { loadNumbers } from '../lib/loadQuestions';

export async function getStaticProps() {
  const numbers = await loadNumbers();
  return { props: { numbers } };
}

const HomePage = ({ numbers }) => {
  console.log(numbers);
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
        as={'main'}
        flexDir={'column'}
        alignItems={'center'}
        minH={'75vh'}
        justifyContent={'center'}
      ></Flex>
    </Box>
  );
};

export default HomePage;
