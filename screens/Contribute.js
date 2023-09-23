import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import ImagePicker from "../component/ImagePicker";
import axios from "axios";
import Context from "../ContextAPI";
function Contribute({ navigation }) {
  const context = useContext(Context);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [category, setcat] = useState("");
  const [aadharCardPhoto, setAadharCardPhoto] = useState(null);
  const [panCardPhoto, setPanCardPhoto] = useState(null);
  const [licensePhoto, setLicensePhoto] = useState(null);

  const handleRegistration = async () => {
    const config = {
      method: "post",
      url: "http://localhost:5000/contribute",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZGIwZTllZTI2ZTI0OGEwNjg1NzNjIn0sImlhdCI6MTY5NTM5OTA3M30.tZiskL9URV9Bn5SX4MdKmeH5YMPh68AGAbZvZKpuyZk",
      },
      data: {
        name: name,
        phone: phoneNumber,
        address: address,
        category: category,
        aadhar: aadharCardPhoto,
        pan: panCardPhoto,
        doc: licensePhoto,
      },
    };

    // Send the POST request
    axios(config)
      .then(function (response) {
        // Handle the response data here
        console.log(response.data);
      })
      .catch(function (error) {
        // Handle any errors here
        console.error("Error:", error);
      });
    setName("");
    setPhoneNumber("");
    setAddress("");
    setcat("");
    setAadharCardPhoto(null);
    setLicensePhoto(null);
    setPanCardPhoto(null);
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
          placeholder="Category"
          value={category}
          onChangeText={(text) => setcat(text)}
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
