import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="My Goals "
        onChangeText={props.input}
      />
      <Button title="Add Goal" onPress={props.add} />
    </View>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    width: "70%",
    marginRight: 8,
    padding: 8,
    borderRadius: 2,
  },
});
