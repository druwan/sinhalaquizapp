import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/yaldevi';

const theme = extendTheme({
  semanticTokens: {
    colors: {
      'chakra-body-bg': {
        _light: 'Flax.50',
        _dark: 'Raisin.900',
      },
    },
  },
  fonts: {
    heading: 'Yaldevi, sans-serif',
    body: 'Yaldevi, sans-serif',
  },
  colors: {
    Mint: {
      50: '#f1f7ed',
      100: '#d8e6ce',
      200: '#bdd7ad',
      300: '#a3c78a',
      400: '#88b769',
      500: '#6f9e50',
      600: '#577b3e',
      700: '#3f572d',
      800: '#25341b',
      900: '#0c1208',
    },
    Raisin: {
      50: '#f1f1f8',
      100: '#d5d5dc',
      200: '#b9b9c3',
      300: '#9e9eaa',
      400: '#838292',
      500: '#696879',
      600: '#51515e',
      700: '#3a3a44',
      800: '#23232a',
      900: '#0c0c13',
    },
    Turquoise: {
      50: '#e4f9f1',
      100: '#c8e6da',
      200: '#aad4c3',
      300: '#89c3ab',
      400: '#69b293',
      500: '#4f987a',
      600: '#3c765f',
      700: '#295444',
      800: '#163428',
      900: '#00130c',
    },
    Maroon: {
      50: '#ffe8ed',
      100: '#f2c3cd',
      200: '#e29dab',
      300: '#d5778a',
      400: '#c85168',
      500: '#ae374f',
      600: '#882a3d',
      700: '#631d2c',
      800: '#3d0f19',
      900: '#1b0108',
    },
    Flax: {
      50: '#fcf7e0',
      100: '#f2e8bc',
      200: '#e8d896',
      300: '#dfc96d',
      400: '#d5b945',
      500: '#bc9f2c',
      600: '#927c20',
      700: '#685915',
      800: '#3f3509',
      900: '#171200',
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
