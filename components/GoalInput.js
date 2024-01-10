import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
  Text,
} from "react-native";

function GoalInput(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/salar.jpg")} />
        <Text style={styles.welcomeMsg}>Hi, Add your goals for 2024</Text>
        <TextInput
          style={styles.textInput}
          placeholder="My Goals "
          onChangeText={props.input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.cancel} color={"red"} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={props.add} />
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
    padding: 15,
    backgroundColor: "purple",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    width: "100%",
    marginBottom: 8,
    padding: 8,
    borderRadius: 2,
    backgroundColor: "lightgray",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  welcomeMsg: {
    color: "white",
    marginBottom: 5,
    fontStyle: "italic",
    fontSize: 25,
  },
});
