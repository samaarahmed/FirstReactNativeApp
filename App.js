import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [goals, setGoals] = useState([]);

  function modalHandler() {
    setModalVisible(true);
  }

  function goalInputhandler(enteredText) {
    setInputText(enteredText);
  }

  function addGoalhandler() {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: inputText, id: Math.random().toString() },
    ]);
    setModalVisible(false);
  }
  function deleteGoalhandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }
  function closeModal() {
    setModalVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add new goal" color={"blue"} onPress={modalHandler} />
      <GoalInput
        visible={modalVisible}
        input={goalInputhandler}
        add={addGoalhandler}
        cancel={closeModal}
      />

      <View style={styles.goalContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalhandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 6,
  },
});
