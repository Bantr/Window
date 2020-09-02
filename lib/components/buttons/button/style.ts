import styled, { css } from 'styled-components';

interface IButtonProps {
  active: boolean;
  hasIcon: boolean;
  isLoading: boolean;
  isPrimaryColor: boolean;
}

const sharedStyle = css<IButtonProps>`
  position: relative;
  display: flex;
  font-weight: 800;
  flex-direction: row;
  align-items: center;

  .icon {
    margin-right: 15px;
    svg {
      cursor: pointer;
      fill: white;
    }
  }
`;

export const Outline = styled.button<IButtonProps>`
  ${sharedStyle}
  background-color: transparent;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme, isPrimaryColor }): string => (isPrimaryColor ? theme.p : theme.s)};
  color: ${ ({ theme, isPrimaryColor }): string => (isPrimaryColor ? theme.p : theme.s)};
  transition: 0.2s width ease-in-out;
  padding: 9px 20px;

  &:hover {
    background-color: ${({ theme, isPrimaryColor }): string => (isPrimaryColor ? theme.p : theme.s)}0F;
  }
`;

export const Default = styled.button<IButtonProps>`
  ${sharedStyle}
  background-color: ${({ theme, isPrimaryColor, active }): string => (active ? isPrimaryColor ? theme.p : theme.s : '#838383')};
  transition: 0.2s width ease-in-out;
  color: white;
  padding: 9px 20px;

  &:hover {
    color: white;
    background-color: ${({ theme, active, isPrimaryColor }): string => (active ? isPrimaryColor ? theme.p : theme.s : '#939393')}A3;
  }
`;

export const Text = styled.button<IButtonProps>`
  ${sharedStyle}
  background-color: transparent;
  color: ${({ theme, isPrimaryColor, active }): string => (active ? isPrimaryColor ? theme.p : theme.s : '#838383')};
  transition: width .2s ease-in-out;
  padding: ${({ hasIcon, isLoading }): string => hasIcon || isLoading ? '9px 12px 9px 20px' : '9px 12px'};

  &:hover {
    opacity: 0.8;
  }
`;
