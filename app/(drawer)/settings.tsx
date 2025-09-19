import SettingButtons from "@/components/settings-button";
import { useTheme } from "@/context/theme-context";
import React from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

const Settings = () => {
  const { currentTheme, setTheme, colors, useSystemTheme, isLoaded } = useTheme();

  if (!isLoaded) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.loadingContainer}>
          <Text style={[styles.loadingText, { color: colors.text }]}>
            Loading...
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.surface }]}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          Appearance
        </Text>
      </View>

      <View style={styles.content}>
        <View style={[styles.section, { backgroundColor: colors.surface }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Theme
          </Text>

          <TouchableOpacity
            style={[
              styles.themeToggle,
              { backgroundColor: colors.surfaceSecondary },
            ]}
            onPress={() => {}}
          >
            <Text style={[styles.themeToggleText, { color: colors.text }]}>
              Dark Mode
            </Text>
            <Switch
              value={currentTheme === "dark"}
              onValueChange={() => {
                setTheme(currentTheme === "dark" ? "light" : "dark");
              }}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor={colors.text}
            />
          </TouchableOpacity>
        </View>

        <View style={[styles.section, { backgroundColor: colors.surface }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Theme Options
          </Text>

          <SettingButtons
            title="Light Mode"
            icon="lightbulb-on"
            onPress={() => setTheme("light")}
            isActive={currentTheme === "light"}
          />
          <SettingButtons
            title="Dark Mode"
            icon="weather-night"
            onPress={() => setTheme("dark")}
            isActive={currentTheme === "dark"}
          />
          <SettingButtons
            title="System Mode"
            icon="theme-light-dark"
            onPress={() => useSystemTheme()}
            isActive={false}
          />
        </View>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
  },
  content: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  section: {
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  themeToggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
  },
  themeToggleText: {
    fontSize: 16,
    fontWeight: "500",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
