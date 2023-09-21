import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Grid from "../component/Grid";
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Grid title="Logo" color="black" />
      <Grid title="Request a Resource" color="blue" onPress={()=>{
        navigation.navigate('Resource');
      }}/>
      <Grid title="Admin Login" color="green" onPress={()=>{
        navigation.navigate('Admin');
      }}/>
      <Grid title="Contribute through your skills/Business" color="red" onPress={()=>{
        navigation.navigate('Contribute');
      }} />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
