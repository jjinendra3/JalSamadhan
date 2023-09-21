import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import ImagePicker from "../component/ImagePicker";
const Complaint = ({ navigation }) => {
  const [desc, setdesc] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = () => {
    // Implement your submission logic here
    // You can send the complaint details to your backend server or perform any necessary actions.
    // After submitting, you can navigate to another screen or show a confirmation message.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setdesc(text)}
        value={desc}
        placeholder="Describe the issue"
      />
      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setAddress(text)}
        value={address}
        placeholder="Enter your address"
      />
      <ImagePicker setimg={setPhoto} />
      <View style={{ marginTop: 20 }}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  uploadButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  uploadButtonText: {
    color: "white",
    textAlign: "center",
  },
  photoPreview: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});

export default Complaint;
