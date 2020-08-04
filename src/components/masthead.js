/** @jsx jsx */
import React from 'react';
import { Container, jsx } from 'theme-ui';

export default ({ children, color }) => (
  <div sx={{ backgroundColor: '#7f1139', color: 'background' }}>
    <Container sx={{ px: 3 }}>{children}</Container>
  </div>
);
