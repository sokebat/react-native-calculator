import { Colors } from "@/utils/colors";
import { createContext, useContext, useState } from "react";

export type Theme = "light" | "dark";

export type ThemeContextType = {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
  colors: typeof Colors.light;
};

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: "light",
  setTheme: () => {},
  colors: Colors.light,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const getCurrentColors = () => {
    return theme === "dark" ? Colors.dark : Colors.light;
  };

  return (
    <ThemeContext.Provider
      value={{ 
        currentTheme: theme, 
        setTheme: handleSetTheme,
        colors: getCurrentColors()
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
