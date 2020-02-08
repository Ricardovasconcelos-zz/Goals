import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  const cancelAddGoalHandler = () => {
    props.cancelModal();
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.content}>
        <TextInput
          placeholder="Type Your Goal"
          style={styles.textGoal}
          onChangeText={setEnteredGoal}
          value={enteredGoal}
        />
        <View style={styles.buttonContent}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={cancelAddGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Save" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textGoal: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    width: "80%",
    marginVertical: 20
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});

export default GoalInput;
