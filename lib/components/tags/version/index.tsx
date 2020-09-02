import * as React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }): string => theme.p};
  border-radius: 5px;
  margin-left: 10px;
  padding: 5px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .text {
    color: white;
    font-size: 0.8rem;
    text-align: center;
    font-weight: 600;
  }
`;

export const VersionTag: React.FC = () => (
  <Container>
    <span className="text">BETA</span>
  </Container>
);
