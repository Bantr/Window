import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  user-select: none;
`;

export const DropdownPlaceholder: React.FC<{ text: string }> = ({ text }) => (
  <Container>{text}</Container>
);
