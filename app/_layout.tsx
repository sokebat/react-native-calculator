import { ThemeProvider, useTheme } from "@/context/theme-context";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

function ThemedStatusBar() {
  const { currentTheme } = useTheme();
  
  return (
    <StatusBar 
      style={currentTheme === "dark" ? "light" : "dark"} 
      backgroundColor="transparent"
      translucent
    />
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedStatusBar />
      <Slot />
    </ThemeProvider>
  );
}
