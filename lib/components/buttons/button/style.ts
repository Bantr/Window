import styled from 'styled-components';

interface IButtonProps {
  active: boolean;
  hasIcon: boolean;
  isLoading: boolean;
}

export const Default = styled.button<IButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme, color, active }): string => (active ? color === 'primary' ? theme.p : theme.s : '#838383')};
  transition: 0.2s width ease-in-out;
  color: white;
  padding: ${({ hasIcon, isLoading }): string => hasIcon || isLoading ? '5px 20px 5px 44px' : '5px 20px'};

  svg.icon {
    cursor: pointer;
    fill: white;
    position: absolute;
    left: 12px;
  }

  &:hover {
    color: white;
    background-color: ${({ theme, active, color }): string => (active ? color === 'primary' ? theme.p : theme.s : '#939393')}A3;
  }
`;

export const Outline = styled.button<IButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, color }): string => (color === 'primary' ? theme.p : theme.s)};
  color: ${({ theme, color }): string => (color === 'primary' ? theme.p : theme.s)};
  transition: 0.2s width ease-in-out;
  padding: ${({ hasIcon, isLoading }): string => hasIcon || isLoading ? '5px 20px 5px 44px' : '5px 20px'};

  svg {
    cursor: pointer;
    fill: white;
  }

  &:hover {
    background-color: ${({ theme, color }): string => (color === 'primary' ? theme.p : theme.s)}0F;
  }
`;

export const Text = styled.button<IButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: transparent;
  color: ${({ theme, color, active }): string => (active ? color === 'primary' ? theme.p : theme.s : '#838383')};
  transition: width .2s ease-in-out;
  padding: ${({ hasIcon, isLoading }): string => hasIcon || isLoading ? '8px 12px 8px 44px' : '8px 12px'};

  svg.icon {
    cursor: pointer;
    fill: ${({ theme, active, color }): string => (active ? color === 'primary' ? theme.p : theme.s : '#939393')}A3;
  }

  &:hover {
    color: white;
    background-color: ${({ theme, active, color }): string => (active ? color === 'primary' ? theme.p : theme.s : '#939393')}A3;

    svg.icon {
      fill: white;
    }
  }
`;
