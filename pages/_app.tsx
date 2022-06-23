import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/yaldevi';

const theme = extendTheme({
  fonts: {
    heading: 'Yaldevi, sans-serif',
    body: 'Yaldevi, sans-serif',
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
};

export default MyApp;
