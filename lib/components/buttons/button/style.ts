import styled from 'styled-components';

interface IButtonProps {
  active: boolean;
}

export const Default = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme, color, active }): string => (active ? color === 'primary' ? theme.p : theme.s : '#838383')};
  text-transform: uppercase;
  transition: 0.2s background-color ease-in-out;
  transition: 0.2s width ease-in-out;
  color: white;

  &:hover {
    color: white;
    background-color: ${({ theme, active, color }): string => (active ? color === 'primary' ? theme.p : theme.s : '#939393')}A3;
  }
`;

export const Outline = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  text-transform: uppercase;
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, color }): string => (color === 'primary' ? theme.p : theme.s)};
  color: ${({ theme, color }): string => (color === 'primary' ? theme.p : theme.s)};
  transition: 0.2s background-color ease-in-out;
  transition: 0.2s width ease-in-out;

  &:hover {
    background-color: ${({ theme, color }): string => (color === 'primary' ? theme.p : theme.s)}0F;
  }
`;

export const Text = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: transparent;
  color: ${({ theme, color }): string => (color === 'primary' ? theme.p : theme.s)};
  transition: 0.2s background-color ease-in-out;
  transition: 0.2s width ease-in-out;
  text-transform: uppercase;
  padding: 8px 12px;

  &:hover {
    background-color: ${({ theme, color }): string => (color === 'primary' ? theme.p : theme.s)}0F;
  }
`;
