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
    <Modal
      visible={props.visible}
      transparent={true}
      animationType="slide"
      style={styles.modalContent}
    >
      <View style={styles.content}>
        <View style={styles.modalStyle}>
          <TextInput
            placeholder="Type Your Goal"
            style={styles.textGoal}
            onChangeText={setEnteredGoal}
            value={enteredGoal}
            autoFocus={true}
          />
          <View style={styles.buttonContent}>
            <View style={styles.button}>
              <Button
                title="Cancel"
                color="red"
                onPress={cancelAddGoalHandler}
              />
            </View>
            <View style={styles.button}>
              <Button title="Save" onPress={addGoalHandler} />
            </View>
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
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  modalStyle: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0fa",
    borderRadius: 20
  },
  textGoal: {
    borderColor: "gray",
    borderBottomWidth: 1,
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
    width: "40%",
    paddingBottom: 20
  }
});

export default GoalInput;
