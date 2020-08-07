import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 80px;
  background-color: pink;
`;

export const MatchRow: React.FC = () => (
  <Container>
    this is a match
  </Container>
);

export const MatchRowChild: React.FC = () => (
  <div>this is a matchchild</div>
);
