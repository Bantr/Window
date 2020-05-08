import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface IThemeContext {
  dark: boolean;
  toggleDarkMode(): void;
}

const defaultContextData: IThemeContext = {
  dark: true,
  toggleDarkMode: (): void => { }
};

const ThemeContext = createContext(defaultContextData);
const useTheme = (): any => useContext(ThemeContext);

interface IProps {
  theme: any;
  children: React.ReactNode;
}

const ThemeProvider: React.FC<IProps> = ({ theme, children }) => {
  const [themeState, setThemeState] = useState({ dark: true, hasThemeMounted: false });

  useEffect(() => {
    const lsDark = localStorage.getItem('dark') === 'true';
    setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true });
  }, []);

  if (!themeState.hasThemeMounted) {
    return <div />;
  }
  const toggleDarkMode = (): void => {
    const dark = !themeState.dark;
    setThemeState({ ...themeState, dark });
    localStorage.setItem('dark', JSON.stringify(dark));
  };
  const computedTheme = themeState.dark ? theme('dark') : theme('light');

  return (
    <StyledThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggleDarkMode
        }}>
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};

export { ThemeProvider, useTheme };
