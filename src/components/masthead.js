/** @jsx jsx */
import { Container, jsx } from 'theme-ui';

export default ({ children, backgroundColor, color }) => (
  <div
    sx={{
      backgroundColor: `${backgroundColor}`,
      color: `${color}`,
      h1: {
        my: 4,
      },
      h2: {
        my: 3,
      },
      py: 3,
    }}
  >
    <Container
      sx={{
        px: 3,
      }}
    >
      {children}
    </Container>
  </div>
);
