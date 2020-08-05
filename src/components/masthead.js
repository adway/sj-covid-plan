/** @jsx jsx */
import React from 'react';
import { Container, jsx } from 'theme-ui';

export default ({ children, color }) => (
  <div
    sx={{
      backgroundColor: 'sj',
      color: 'background',
    }}
  >
    <Container
      sx={{
        px: 3,
        py: 4,
      }}
    >
      {children}
    </Container>
  </div>
);
