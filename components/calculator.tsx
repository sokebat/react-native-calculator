import { useTheme } from "@/context/theme-context";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./button";

const Calculator = () => {
  const { colors } = useTheme();
  const [firstValue, setFirstValue] = useState("");
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState("");

  const handleNumberInput = (num: string) => {
    if (displayValue == "0") {
      setDisplayValue(num);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (operator: string) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue("0");
  };

  const handleCalculation = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === "+") {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === "-") {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === "*") {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === "/") {
      setDisplayValue((num1 / num2).toString());
    } else if (operator === "%") {
      setDisplayValue((num1 % num2).toString());
    }

    setOperator("");
    setFirstValue("");
  };

  const handleClear = () => {
    setDisplayValue("0");
    setOperator("");
    setFirstValue("");
  };

  const handleDelete = () => {
    if (displayValue.length == 1) {
      setDisplayValue("0");
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View
        style={[
          styles.display,
          {
            backgroundColor: colors.display,
            borderBottomColor: colors.border,
          },
        ]}
      >
        <Text style={[styles.expressionText, { color: colors.textSecondary }]}>
          {firstValue + operator}
        </Text>
        <Text style={[styles.resultText, { color: colors.text }]}>
          {displayValue}
        </Text>
      </View>
      <View
        style={[
          styles.keypad,
          {
            backgroundColor: colors.keypad,
          },
        ]}
      >
        <View style={styles.buttonRow}>
          <Button title="C" type="top" onPress={handleClear} />
          <Button title="⌫" type="top" onPress={handleDelete} />
          <Button
            title="%"
            type="top"
            onPress={() => handleOperatorInput("%")}
          />
          <Button
            title="÷"
            type="right"
            onPress={() => handleOperatorInput("/")}
          />
        </View>

        <View style={styles.buttonRow}>
          <Button
            title="7"
            type="number"
            onPress={() => handleNumberInput("7")}
          />
          <Button
            title="8"
            type="number"
            onPress={() => handleNumberInput("8")}
          />
          <Button
            title="9"
            type="number"
            onPress={() => handleNumberInput("9")}
          />
          <Button
            title="×"
            type="right"
            onPress={() => handleOperatorInput("*")}
          />
        </View>

        <View style={styles.buttonRow}>
          <Button
            title="4"
            type="number"
            onPress={() => handleNumberInput("4")}
          />
          <Button
            title="5"
            type="number"
            onPress={() => handleNumberInput("5")}
          />
          <Button
            title="6"
            type="number"
            onPress={() => handleNumberInput("6")}
          />
          <Button
            title="-"
            type="right"
            onPress={() => handleOperatorInput("-")}
          />
        </View>

        <View style={styles.buttonRow}>
          <Button
            title="1"
            type="number"
            onPress={() => handleNumberInput("1")}
          />
          <Button
            title="2"
            type="number"
            onPress={() => handleNumberInput("2")}
          />
          <Button
            title="3"
            type="number"
            onPress={() => handleNumberInput("3")}
          />
          <Button
            title="+"
            type="right"
            onPress={() => handleOperatorInput("+")}
          />
        </View>

        <View style={styles.buttonRow}>
          <Button
            title="0"
            type="number"
            onPress={() => handleNumberInput("0")}
          />
          <Button
            title="00"
            type="number"
            onPress={() => handleNumberInput("00")}
          />
          <Button
            title="."
            type="number"
            onPress={() => handleNumberInput(".")}
          />
          <Button title="=" type="right" onPress={handleCalculation} />
        </View>
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  display: {
    flex: 0.5,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    borderBottomWidth: 1,
  },
  expressionText: {
    fontSize: 24,
    fontWeight: "400",
    marginBottom: 5,
    opacity: 0.7,
  },
  resultText: {
    fontSize: 48,
    fontWeight: "300",
    lineHeight: 56,
  },
  keypad: {
    flex: 2,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "space-evenly",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    gap: 15,
  },
});
