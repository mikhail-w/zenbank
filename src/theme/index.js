import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    primary: '#5ec576',
    primaryDarker: '#4bbb7d',
    primaryOpacity: '#5ec5763a',
    secondary: '#ffcb03',
    secondaryDarker: '#ffbb00',
    secondaryOpacity: '#ffcd0331',
    tertiary: '#ff585f',
    tertiaryDarker: '#fd424b',
    tertiaryOpacity: '#ff58602d',
  },
  bg: {
    main: '#f3f3f3',
    dark: '#37383d',
  },
  text: {
    primary: '#444',
    secondary: '#666',
    light: '#aaa',
    white: '#fff',
  },
};

const gradients = {
  primary: 'linear-gradient(to top left, #39b385, #9be15d)',
  secondary: 'linear-gradient(to top left, #ffb003, #ffcb03)',
};

const fonts = {
  body: `'Poppins', sans-serif`,
  heading: `'Poppins', sans-serif`,
};

const components = {
  Button: {
    variants: {
      primary: {
        bg: 'brand.primary',
        color: 'white',
        borderRadius: '10rem',
        px: '4.5rem',
        py: '1.25rem',
        fontSize: '1.6rem',
        fontWeight: 500,
        _hover: {
          bg: 'brand.primaryDarker',
        },
      },
      secondary: {
        bg: 'brand.secondary',
        color: 'text.primary',
        borderRadius: '10rem',
        px: '4.5rem',
        py: '1.25rem',
        fontSize: '1.6rem',
        fontWeight: 500,
        _hover: {
          bg: 'brand.secondaryDarker',
        },
      },
      tertiary: {
        bg: 'brand.tertiary',
        color: 'white',
        borderRadius: '10rem',
        px: '4.5rem',
        py: '1.25rem',
        fontSize: '1.6rem',
        fontWeight: 500,
        _hover: {
          bg: 'brand.tertiaryDarker',
        },
      },
      text: {
        bg: 'transparent',
        color: 'brand.primary',
        fontSize: '1.7rem',
        fontWeight: 500,
        p: 0,
        borderBottom: '1px solid',
        borderRadius: 0,
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: 'none',
      },
    },
  },
};

const theme = extendTheme({
  colors,
  fonts,
  components,
  styles: {
    global: {
      'html': {
        fontSize: '62.5%',
        boxSizing: 'border-box',
        scrollBehavior: 'smooth',
      },
      'body': {
        fontFamily: 'body',
        fontWeight: 300,
        color: 'text.primary',
        lineHeight: 1.9,
        backgroundColor: 'bg.main',
      },
    },
  },
  semanticTokens: {
    gradients,
  },
});

export default theme;