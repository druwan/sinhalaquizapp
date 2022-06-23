import { Box, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import QuizCard from '../components/QuizCard/QuizCard';

const HomePage = () => {
  return (
    <Box bg={useColorModeValue('Flax.50', 'Raisin.900')} minH={'100vh'}>
      <Head>
        <title>Sinhala Quiz</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Christopher Vestman' />
        <meta name='contact' content='contact@christophervestman.dev' />
      </Head>

      {/* Navbar */}
      <Navbar />
      <QuizCard />
    </Box>
  );
};

export default HomePage;
