import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

function Resource({ navigation }) {
  const [location, setLocation] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");

  const handleRequestSubmit = () => {
    // Perform the action to submit the resource request here (e.g., send to server)
    // You can replace this with your own logic
    const resourceRequestData = {
      location,
      additionalDetails,
      // Add other fields as needed
    };

    // Check if the user's request is legitimate based on your verification process
    const isEmergency = 0; // Replace with your verification logic

    if (!isEmergency) {
      Alert.alert(
        "Warning",
        "This feature should only be used during disaster emergencies. Misuse may result in blacklisting from the app."
      );
      return;
    }

    // If the request is legitimate, proceed with submission
    Alert.alert(
      `Resource request submitted: ${JSON.stringify(resourceRequestData)}`
    );
    // Optionally, navigate to a confirmation screen or go back to the user's dashboard
    // navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.warningText}>
        This feature should only be used during disaster emergencies. Misuse may
        result in blacklisting from the app.
      </Text>

      <Text style={styles.label}>Location:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter location"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />

      <Text style={styles.label}>Additional Details:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter additional details (optional)"
        value={additionalDetails}
        onChangeText={(text) => setAdditionalDetails(text)}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleRequestSubmit}
      >
        <Text style={styles.buttonText}>Submit Request</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  warningText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#3498db",
    borderRadius: 5,
    paddingVertical: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Resource;
