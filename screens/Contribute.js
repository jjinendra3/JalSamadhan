import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import ImagePicker from "../component/ImagePicker";
function Contribute({ navigation }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [aadharCardPhoto, setAadharCardPhoto] = useState(null);
  const [panCardPhoto, setPanCardPhoto] = useState(null);
  const [licensePhoto, setLicensePhoto] = useState(null);

  const handleRegistration = () => {
    // Handle registration logic here
    // You can send this data to your backend for processing and verification

    // For simplicity, we'll just display a success message here
    Alert.alert("Registration successful!");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Register Yourself</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 10 }}>
          Aadhar Card:
        </Text>
        <ImagePicker setimg={setAadharCardPhoto} />
        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 10 }}>
          Pan Card:
        </Text>
        <ImagePicker setimg={setPanCardPhoto} />
        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 10 }}>
          Supporting Document (GST,FSSAI,LICENSE):
        </Text>
        <ImagePicker setimg={setLicensePhoto} />
        <View style={{ marginTop: 10 }}>
          <Button title="Register" onPress={handleRegistration} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  // Add styles for image upload components if needed
});

export default Contribute;
