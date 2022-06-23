import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Sinhala Quiz</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Christopher Vestman' />
        <meta name='contact' content='contact@christophervestman.dev' />
      </Head>

      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default HomePage;
