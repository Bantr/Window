import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 80px;
  background-color: green;
`;

export const BanRow: React.FC = () => (
  <Container>
    this is a ban
  </Container>
);

export const BanRowChild: React.FC = () => (
  <Container>this is a ban child</Container>
);
