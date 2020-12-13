import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import theme from "./theme";

const defaultContextData = {
  isDark: false,
  toggle: () => {},
};

const ThemeContext = createContext(defaultContextData);
const useTheme = () => useContext(ThemeContext);

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = useState({
    isDark: false,
    hasThemeMounted: false,
  });
  useEffect(() => {
    const lsDark = localStorage.getItem("dark") === "true";
    setThemeState({ ...themeState, isDark: lsDark, hasThemeMounted: true });
  }, []);
  return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode();

  const toggle = () => {
    const isDark = !themeState.isDark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setThemeState({ ...themeState, isDark });
  };

  const computedTheme = themeState.isDark ? theme("dark") : theme("light");
  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          isDark: themeState.isDark,
          toggle,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
};

export { ThemeProvider, useTheme };
