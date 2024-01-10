import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

function GoalInput(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="My Goals "
          onChangeText={props.input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={props.add} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.cancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    marginBottom: 16,
    padding: 15,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    width: "100%",
    marginBottom: 8,
    padding: 8,
    borderRadius: 2,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    margin: 5,
  },
});
