import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useContext } from "react";

export const ThemeTypes = {
  LIGHT: "light",
  DARK: "dark",
};

const ThemeContext = React.createContext(ThemeTypes.LIGHT);

export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(ThemeTypes.LIGHT);

  const toggleTheme = useCallback(() => {
    setTheme((prevState) =>
      prevState === ThemeTypes.LIGHT ? ThemeTypes.DARK : ThemeTypes.LIGHT
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
