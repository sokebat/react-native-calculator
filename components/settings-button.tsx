import { useTheme } from "@/context/theme-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type SettingsProps = {
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  onPress: () => void;
  isActive: boolean;
};
const SettingButtons = ({ title, icon, onPress, isActive }: SettingsProps) => {
  const { colors } = useTheme();
  
  return (
    <TouchableOpacity 
      style={[
        styles.settingsButton, 
        { 
          backgroundColor: colors.surfaceSecondary,
          borderColor: colors.border,
        }
      ]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.titleWrapper}>
        <MaterialCommunityIcons 
          name={icon} 
          size={24} 
          color={isActive ? colors.primary : colors.textSecondary} 
        />
        <Text style={[styles.buttonText, { color: colors.text }]}>
          {title}
        </Text>
      </View>
      <MaterialCommunityIcons
        name={isActive ? "check-circle" : "circle-outline"}
        size={24}
        color={isActive ? colors.primary : colors.textSecondary}
      />
    </TouchableOpacity>
  );
};

export default SettingButtons;

const styles = StyleSheet.create({
  settingsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: "center",
    borderWidth: 1,
  },

  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
