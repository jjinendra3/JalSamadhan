import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert } from 'react-native';

function AddAnnouncement({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddAnnouncement = () => {
    // Perform the action to add the announcement here (e.g., send to server)
    // You can replace this with your own logic
    const newAnnouncement = {
      title,
      description,
      // Add other announcement properties as needed
    };
    
    // Alert or navigate back to the admin panel after successfully adding the announcement
    Alert.alert(`Announcement added: ${JSON.stringify(newAnnouncement)}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Announcement Title:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={styles.label}>Announcement Description:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddAnnouncement}>
        <Text style={styles.buttonText}>Add Announcement</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    paddingVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AddAnnouncement;
