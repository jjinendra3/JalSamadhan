import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Logo } from "../logo.png";
function Home({ navigation }) {
  // Sample announcements data
  const announcements = [
    { id: 1, title: "Announcement 1" },
    { id: 2, title: "Announcement 2" },
    { id: 3, title: "Announcement 3" },
    { id: 4, title: "Announcement 3" },
    { id: 5, title: "Announcement 3" },
    { id: 6, title: "Announcement 3" },
    { id: 7, title: "Announcement 3" },
    // Add more announcements as needed
  ];

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={Logo}
          style={{
            width: 200,
            height: 100,
            resizeMode: "contain",
            marginBottom: 10,
          }}
        />
      </View>

      {/* Announcements Section */}
      <View style={styles.announcementsContainer}>
        <Text style={styles.announcementsHeader}>Announcements</Text>
        <ScrollView style={styles.announcementsList}>
          {announcements.map((announcement) => (
            <TouchableOpacity
              key={announcement.id}
              style={styles.announcementItem}
              onPress={() => {
                navigation.navigate("Announcement", {
                  title: "1",
                  description: "eehbuhewbuhwbhfbw",
                });
              }}
            >
              <Text style={styles.announcementTitle}>{announcement.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Complaints Button */}
      <TouchableOpacity
        style={styles.complaintsButton}
        onPress={() => {
          navigation.navigate("Complaint");
        }}
      >
        <Text style={styles.complaintsButtonText}>Complaints</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flex: 3, // 30% of the page
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    // Add additional styles for your logo here
  },
  announcementsContainer: {
    flex: 3, // 40% of the page
    marginTop: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    width: "90%",
    alignItems: "center",
  },
  announcementsHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  announcementsList: {
    maxHeight: "100%",
  },
  announcementItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  announcementTitle: {
    fontSize: 16,
  },
  complaintsButton: {
    backgroundColor: "#3498db",
    borderRadius: 5,
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  complaintsButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Home;
