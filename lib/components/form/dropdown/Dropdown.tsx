import * as React from 'react';
import styled from 'styled-components';
import { Arrow } from 'lib/icons';

const Icon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 5px;
  width: 24px;
  height: 24px;
  margin: auto 0;
  pointer-events: none;
  transition: transform 0.2s ease-in-out;
`;

const Container = styled.div`
  position: relative;
  display: inline-block;

  &:active ${Icon}{
    transform: rotate(-180deg);
  }

  &:hover ${Icon}{
    transform: rotate(-180deg);
  }
`;

const Select = styled.select`
  background-color: ${({ theme }): string => theme.pb};
  color: ${({ theme }): string => theme.t};
  appearance: none;
  border: none;
  position: relative;
  padding: 5px 30px 5px 5px;
  text-align: center;
  outline: 0;
  cursor: pointer;
`;

export const Dropdown: React.FC<{}> = ({ children }) => (
  <Container>
    <Select>
      {children}
    </Select >
    <Icon><Arrow /></Icon>
  </Container>
);
