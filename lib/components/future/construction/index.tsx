import * as React from 'react';
import styled from 'styled-components';
import { Archive } from 'lib/icons';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 120px;
`;

export const Construction: React.FC = () => (
  <Container>
    <Title>Under construction!</Title>
    <Archive fill="#fff" scale={10} />
  </Container>
);
