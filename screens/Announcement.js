import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

function Announcement({ route }) {
  const { title, description } = route.params; // Get title and description from the navigation route

  return (
    <View style={styles.container}>
      {/* Announcement Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Announcement Description */}
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descriptionContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
  },
  descriptionText: {
    fontSize: 16,
  },
});

export default Announcement;
