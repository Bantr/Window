import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }): string => theme.pb};
  border-radius: 10px;
  margin: 20px 0 40px 0;
  padding-right: 5px;
`;

const Inner = styled.div`
  padding: 20px 15px 20px 20px;
`;

interface IProps {
  children: React.ReactNode;
}

export const InnerSettings: React.FC<IProps> = ({ children }) => (
  <Container>
    <Inner>
      {children}
    </Inner>
  </Container>
);
