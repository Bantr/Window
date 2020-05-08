import * as React from 'react';
import styled from 'styled-components';

const Container = styled.option`
  background-color: orange;
`;

export interface IDropdownOptionProps {
  value: string | number;
  index?: number;
  image?: string;
  text?: string | number;
  selected?: boolean;
}

export const DropdownOption: React.FC<IDropdownOptionProps> = ({ text, value, selected }) => {
  if (!text) {
    text = value;
  }

  return (
    <Container selected={selected} value={value} >
      {text}
    </Container>
  );
};
