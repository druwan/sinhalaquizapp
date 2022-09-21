import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';

import CategoryMenu from '../components/CategoryMenu/CategoryMenu';
import Navbar from '../components/Navbar/Navbar';

import { loadNumbers } from '../lib/loadQuestions';

export async function getStaticProps() {
  const numbers = await loadNumbers();
  return { props: { numbers } };
}

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
        as={'main'}
        flexDir={'column'}
        alignItems={'center'}
        minH={'75vh'}
        justifyContent={'center'}
      >
        <CategoryMenu />
      </Flex>
    </Box>
  );
};

export default HomePage;
