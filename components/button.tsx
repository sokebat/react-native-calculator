import { useTheme } from "@/context/theme-context";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({
  title,
  type,
  onPress,
}: {
  title: string;
  type: "top" | "right" | "number";
  onPress: () => void;
}) => {
  const { colors } = useTheme();
  
  const getButtonStyle = () => {
    switch (type) {
      case "top":
        return {
          backgroundColor: colors.functionButton,
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        };
      case "right":
        return {
          backgroundColor: colors.operatorButton,
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 3,
        };
      case "number":
        return {
          backgroundColor: colors.numberButton,
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 2,
        };
    }
  };

  const getTextColor = () => {
    switch (type) {
      case "number":
        return colors.text;
      default:
        return colors.text;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle()]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.buttonText, { color: getTextColor() }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 75,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "500",
  },
});
