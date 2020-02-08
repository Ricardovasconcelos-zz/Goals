import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ffff",
    borderColor: "#f0f0f0",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10
  }
});

export default GoalItem;
