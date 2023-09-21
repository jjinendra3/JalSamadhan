import React, { useState } from "react";
import { View, Text, Button, Alert, TextInput, StyleSheet } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";

function Login({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = () => {
    // Handle login with OTP logic here
    // You can make an API request to verify the OTP
    // For simplicity, we'll just display a success message here

    Alert.alert("Login", `${phoneNumber}`, [
      { text: "NORMAL", onPress: () => navigation.navigate("NormalUser") },
      { text: "ADMIN", onPress: () => navigation.navigate("adminmain") },
    ]);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login with OTP</Text>
      <TextInput
        style={{
          height: 50,
          fontSize: 32,
          borderWidth: 2,
          fontWeight: "bold",
          marginVertical: 4,
          textAlign: "center",
          width: "90%",
        }}
        placeholder="Phone Number"
        keyboardType="numeric"
        maxLength={10}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <Button title="Send OTP" />
      <OTPInputView
        pinCount={6}
        style={{ height: 80, width: "90%" }}
        selectionColor="black"
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={handleLogin}
      />
      <Text style={{ marginTop: 20 }}>Not a user? Sign up now</Text>
      <Button
        title="Signup"
        onPress={() => {
          navigation.navigate("Signup");
        }}
        type="clear"
      />
    </View>
  );
}

export default Login;
const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
    color: "black",
  },

  borderStyleHighLighted: {
    borderColor: "black",
    color: "black",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: "black",
  },

  underlineStyleHighLighted: {
    borderColor: "black",
    color: "black",
  },
});
