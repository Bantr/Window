import * as React from 'react';
import styled from 'styled-components';
import { Logo } from 'lib/components';
import { RouteComponentProps } from '@reach/router';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AppLoad: React.FC<RouteComponentProps> = () => (
  <Container>
    <Logo />
  </Container>
);
