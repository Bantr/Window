import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'lib/hooks';

import moon from '../../app/assets/images/icon/moon.svg';
import sun from '../../app/assets/images/icon/sun.svg';

interface IThemeToggleProps {
  readonly isDark: boolean;
}

const Switch = styled.div<IThemeToggleProps>`
  position: relative;
  width: 30px;
  height: 30px;
  padding: 0 2px;
  cursor: pointer;
  background-color: ${({ theme }): string => theme.s};
  overflow: hidden;
  border: 1px solid ${({ theme }): string => theme.s};
  border-radius: 3px;
  user-select: none;
  transition: 0.3s all ease-in-out;
`;
const Moon = styled.img<IThemeToggleProps>`
  position: absolute;
  left: 6px;
  width: 20px;
  top: ${({ isDark }): string => (isDark ? '5px' : '-35px')};
  z-index: 1;
  user-select: none;
  /* Transition */
  transition: top 0.3s ease-in-out;
`;
const Sun = styled.img<IThemeToggleProps>`
  position: absolute;
  left: 6px;
  top: ${({ isDark }): string => (isDark ? '35px' : '5px')};
  width: 20px;
  z-index: 1;
  user-select: none;

  /* Transition */
  transition: top 0.3s ease-in-out;

  &:hover {
    rotate: 180deg;
    transition: rotate 0.3s ease-in-out;
  }
`;
type Props = {}
export const ThemeToggle: React.FC<Props> = () => {
  const theme = useTheme();
  function toggleMode(): void {
    theme.toggleDarkMode();
  }

  return (
    <Switch isDark={theme.dark} onClick={toggleMode}>
      <Sun alt="sun" isDark={theme.dark} src={sun} />
      <Moon alt="moon" isDark={theme.dark} src={moon} />
    </Switch>
  );
};
