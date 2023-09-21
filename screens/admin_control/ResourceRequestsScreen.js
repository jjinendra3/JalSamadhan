import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

function ResourceRequestsScreen({ navigation,route }) {
  //fetch data using route.params.cat based on the categorisation
  // Placeholder data for demonstration purposes
  const [resourceRequests, setResourceRequests] = useState([
    {
      id: '1',
      name: 'John Doe',
      location: '123 Main St, City',
      contactNumber: '555-555-5555',
      details: 'Urgently need clean drinking water.',
      isResolved: false,
    },
    {
      id: '2',
      name: 'Jane Smith',
      location: '456 Elm St, Town',
      contactNumber: '555-123-4567',
      details: 'Seeking shelter for a family of four.',
      isResolved: true,
    },
    // Add more resource request objects as needed
  ]);

  const handleMarkResolved = (id) => {
    // Implement the logic to mark a resource request as resolved
    const updatedRequests = resourceRequests.map((request) =>
      request.id === id ? { ...request, isResolved: true } : request
    );
    setResourceRequests(updatedRequests);
  };

  const handleMarkUnresolved = (id) => {
    // Implement the logic to mark a resource request as unresolved
    const updatedRequests = resourceRequests.map((request) =>
      request.id === id ? { ...request, isResolved: false } : request
    );
    setResourceRequests(updatedRequests);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resource Requests</Text>
      <FlatList
        data={resourceRequests}
        keyExtractor={(item) => item.id}
        renderItem={( {item} ) => (
          <View style={styles.requestItem}>
            <Text>Name: {item.name}</Text>
            <Text>Location: {item.location}</Text>
            <Text>Contact Number: {item.contactNumber}</Text>
            <Text>Details: {item.details}</Text>
            <Text>Status: {item.isResolved ? 'Resolved' : 'Unresolved'}</Text>
            {!item.isResolved ? (
              <TouchableOpacity
                style={styles.resolveButton}
                onPress={() => handleMarkResolved(item.id)}
              >
                <Text style={styles.buttonText}>Mark Resolved</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.unresolveButton}
                onPress={() => handleMarkUnresolved(item.id)}
              >
                <Text style={styles.buttonText}>Mark Unresolved</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  requestItem: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  resolveButton: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 10,
  },
  unresolveButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ResourceRequestsScreen;
