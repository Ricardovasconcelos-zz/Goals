import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setcourseGoals] = useState([]);
  const [statusModal, setStatusModal] = useState(false);

  const addGoalHandler = goalTitle => {
    setcourseGoals([
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setStatusModal(false);
  };

  const removeGoalHandler = goalId => {
    setcourseGoals(currentGoal => {
      return currentGoal.filter(goal => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setStatusModal(true)} />
      <GoalInput
        visible={statusModal}
        onAddGoal={addGoalHandler}
        cancelModal={() => setStatusModal(false)}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
        data={courseGoals.slice(0).reverse()}
        renderItem={goal => (
          <GoalItem
            onDelete={() => removeGoalHandler(goal.item.id)}
            title={goal.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  }
});
