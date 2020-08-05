export default {
  initialColorMode: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    text: '#000',
    background: '#fff',
    sj: 'rgb(124,45,53)',
  },

  fonts: {
    body: '"Lora", serif',
    monospace: 'Roboto Mono", Menlo, monospace',
    heading: "'Lora', serif",
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 600,
  },
  fontSizes: [16, 18, 24, 28, 36, 48, 64, 72, 96, 128],
  sizes: {
    container: 768,
    wide: 1280,
  },
  text: {
    default: {
      textAlign: 'justify',
    },
    heading: {
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    small: {
      fontSize: 0,
    },
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'sj',
      fontFamily: 'body',
      mt: 3,
      px: 3,
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
  },
  radii: {
    small: 4,
    default: 8,
    extra: 12,
    ultra: 16,
    circle: 99999,
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontSize: 1,
      transitionProperty: 'background-color',
      transitionTimingFunction: 'ease-out',
      transitionDuration: '.4s',
      m: 0,
      p: 0,
    },
    a: {
      color: 'primary',
      ':hover': {
        color: 'secondary',
      },
    },
    p: {
      textAlign: 'justify',
    },
  },
  h1: {
    variant: 'text.heading',
    fontSize: 3,
  },
  h2: {
    variant: 'text.heading',
    fontSize: 2,
  },
  h3: {
    variant: 'text.heading',
    fontSize: 1,
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
  navlink: {
    textDecoration: 'none',
    ':hover,:focus': {
      color: 'primary',
    },
  },
};
