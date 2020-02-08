import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setcourseGoals] = useState([]);

  const addGoalHandler = () => {
    setcourseGoals([
      ...courseGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textGoal}
          onChangeText={setEnteredGoal}
          value={enteredGoal}
        />
        <Button title="Save" onPress={addGoalHandler} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
        data={courseGoals.slice(0).reverse()}
        renderItem={goal => <GoalItem title={goal.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  textGoal: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    width: "80%"
  }
});
