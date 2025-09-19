import { ThemeProvider, useTheme } from "@/context/theme-context";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

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

function AppContent() {
  const { isLoaded, colors } = useTheme();

  if (!isLoaded) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: colors.background }]}>
        <ThemedStatusBar />
      </View>
    );
  }

  return (
    <>
      <ThemedStatusBar />
      <Slot />
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
  },
});
