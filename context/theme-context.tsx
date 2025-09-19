import { Colors } from "@/utils/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useLayoutEffect, useState } from "react";
import { useColorScheme } from "react-native";
export type Theme = "light" | "dark";

export type ThemeContextType = {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
  colors: typeof Colors.light;
  useSystemTheme: () => void;
  isLoaded: boolean;
};

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: "light",
  setTheme: () => {},
  colors: Colors.light,
  useSystemTheme: () => {},
  isLoaded: false,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(() => {
    return colorScheme === "dark" ? "dark" : "light";
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSetTheme = async (newTheme: Theme) => {
    setTheme(newTheme);
    try {
      await AsyncStorage.setItem("theme", newTheme);
    } catch (error) {
      console.error("Error saving theme:", error);
    }
  };

  useLayoutEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("theme");
        if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
          setTheme(savedTheme as Theme);
        }
        // If no saved theme or invalid theme, keep the current system-based theme
      } catch (error) {
        console.error("Error loading theme:", error);
        // Keep the current system-based theme on error
      } finally {
        setIsLoaded(true);
      }
    };

    loadTheme();
  }, [colorScheme]);

  const handleUseSystemTheme = async () => {
    const systemTheme = colorScheme === "dark" ? "dark" : "light";
    setTheme(systemTheme);
    try {
      await AsyncStorage.setItem("theme", systemTheme);
    } catch (error) {
      console.error("Error saving system theme:", error);
    }
  };

  const getCurrentColors = () => {
    return theme === "dark" ? Colors.dark : Colors.light;
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        setTheme: handleSetTheme,
        colors: getCurrentColors(),
        useSystemTheme: handleUseSystemTheme,
        isLoaded,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
