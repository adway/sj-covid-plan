/** @jsx jsx */
import React from 'react';
import { Container, jsx } from 'theme-ui';

export default ({ children, color }) => (
  <div sx={{ backgroundColor: 'rgb(124,45,53)', color: 'background' }}>
    <Container
      sx={{
        px: 3,
        py: 4,
        div: {
          mt: 4,
        },
      }}
    >
      {children}
    </Container>
  </div>
);
