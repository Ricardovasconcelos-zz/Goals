import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const GoalItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.4}>
      <View style={styles.listItem}>
        <Text style={{ flex: 1 }}>{props.title}</Text>
        <Icon
          name="trash"
          size={20}
          color="red"
          style={{ paddingHorizontal: 10 }}
          onPress={props.onDelete}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ffff",
    borderColor: "#f0f0f0",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10
  }
});

export default GoalItem;
