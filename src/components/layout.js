/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import Meta from './meta';

export default (props) => {
  return (
    <div
      sx={{
        variant: 'styles.root',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Meta />
      <div
        sx={{
          width: '100%',
          flex: '1 1 auto',
          px: 0,
          mx: 0,
        }}
      >
        {props.children}
      </div>
      <Box as='footer' sx={{ textAlign: 'center', px: 3, py: [3, 4] }}>
        <Container
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            color: 'text',
            a: { color: 'text' },
          }}
        >
          &copy;{' '}
          <a href='https://adway.io' target='_blank'>
            Adway S. Wadekar
          </a>
        </Container>
      </Box>
    </div>
  );
};
