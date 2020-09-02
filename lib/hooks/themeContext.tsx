import React, { createContext, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components';
import { useLocalStorage } from 'lib/hooks';
import { THEME } from 'lib/enums';

interface IThemeContext {
  theme: THEME;
  changeTheme(themeName: THEME): void;
}
const ThemeContext = createContext<IThemeContext>({ theme: THEME.DEFAULT, changeTheme: (themeName: THEME) => { localStorage.setItem('theme', themeName); } });
const useTheme = (): IThemeContext => useContext(ThemeContext);

/* theme provider */
interface IProps {
  getTheme: (themeName: THEME) => DefaultTheme;
  children: React.ReactNode;
}

const ThemeProvider: React.FC<IProps> = ({ getTheme, children }) => {
  const [themeState, setThemeState] = useLocalStorage<{ theme: THEME }>('theme', { theme: THEME.DEFAULT });

  const changeTheme = (themeName: THEME): void => {
    setThemeState({ theme: themeName });
  };

  return (
    <StyledThemeProvider theme={getTheme(themeState.theme)}>
      <ThemeContext.Provider
        value={{
          theme: themeState.theme,
          changeTheme: changeTheme
        }}>
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};

export { ThemeProvider, useTheme };
