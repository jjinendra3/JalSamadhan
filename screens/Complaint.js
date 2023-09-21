import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Complaint = ({ navigation }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [photo, setPhoto] = useState(null);

  const handlePhotoUpload = () => {
    // Implement photo upload logic here, you can use libraries like react-native-image-picker
  };

  const handleSubmit = () => {
    // Implement your submission logic here
    // You can send the complaint details to your backend server or perform any necessary actions.
    // After submitting, you can navigate to another screen or show a confirmation message.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setAddress(text)}
        value={address}
        placeholder="Enter your address"
      />

      <TouchableOpacity onPress={handlePhotoUpload} style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload Photo</Text>
      </TouchableOpacity>

      {photo && (
        <Image source={{ uri: photo }} style={styles.photoPreview} />
      )}

      <Button title="Submit" onPress={handleSubmit} />
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
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  uploadButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom:10
  },
  uploadButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  photoPreview: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});

export default Complaint;
