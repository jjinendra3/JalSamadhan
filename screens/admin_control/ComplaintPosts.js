import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Button } from 'react-native';

function PostListScreen({ navigation, route }) {
  // Fetch the data from the backend based on route.params.name
  const [postData, setPostData] = useState([
    {
      id: '1',
      title: 'Post 1',
      description: 'Description for Post 1',
      upvotes: 10,
      comments: 5,
      posterName: 'John Doe',
      phoneNumber: '+1234567890',
      resolved: true,
    },
    {
      id: '2',
      title: 'Post 2',
      description: 'Description for Post 2',
      upvotes: 15,
      comments: 8,
      posterName: 'Jane Smith',
      phoneNumber: '+9876543210',
      resolved: false,
    },
    // Add more posts as needed
  ]);

  const handlePostClick = (post) => {
    // Handle the click action for the post here
    // For now, we'll just display an alert with post details
    Alert.alert(
      `Title: ${post.title}\nDescription: ${post.description}\nUpvotes: ${post.upvotes}\nComments: ${post.comments}\nPoster: ${post.posterName}\nPhone Number: ${post.phoneNumber}`
    );
  };

  const handleResolveClick = (id) => {
    // Implement the logic to mark a post as resolved or unresolved
    const updatedPosts = postData.map((post) =>
      post.id === id ? { ...post, resolved: !post.resolved } : post
    );
    setPostData(updatedPosts);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={postData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.postItem}
            onPress={() => handlePostClick(item)}
          >
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postDescription}>{item.description}</Text>
            <View style={styles.postInfo}>
              <Text style={styles.postInfoText}>Upvotes: {item.upvotes}</Text>
              <Text style={styles.postInfoText}>Comments: {item.comments}</Text>
              <Text style={styles.postInfoText}>Poster: {item.posterName}</Text>
              <Text style={styles.postInfoText}>Phone: {item.phoneNumber}</Text>
              <Text style={styles.postInfoText}>
                Resolved: {item.resolved ? 'Yes' : 'No'}
              </Text>
              <Button
                title={item.resolved ? 'Mark Unresolved' : 'Mark Resolved'}
                onPress={() => handleResolveClick(item.id)}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  postItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postDescription: {
    fontSize: 16,
    marginVertical: 5,
  },
  postInfo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  postInfoText: {
    fontSize: 14,
  },
});

export default PostListScreen;
