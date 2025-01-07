import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function CreateAccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Back Button */}
     
      {/* Company Introduction */}
      <View style={styles.introContainer}>
        <Text style={styles.headerText}>Unlimited Connections, Streaming, and More</Text>
        <Text style={styles.subText}>
          Join Travrick today and experience a world of entertainment and social interaction.
          Create your account now, and we’ll send you all the details to get started on this
          revolutionary platform.
        </Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mobile number or email"
          placeholderTextColor="#FFFFFF"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          secureTextEntry
        />
        <TouchableOpacity
  style={styles.createAccountButton}
  onPress={() => navigation.navigate("VerificationScreen")} // Add navigation to VerificationScreen
>
  <Text style={styles.createAccountButtonText}>Create Account</Text>
</TouchableOpacity>

      </View>

      {/* Already Have an Account */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.existingAccountText}>I already have an account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a", // Black background
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backArrow: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  backArrowText: {
    fontSize: 24,
    color: "#FF4500",
  },
  introContainer: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  headerText: {
    color: "#FF4500",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
  },
  subText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "left",
  },
  inputContainer: {
    marginTop: 40,
  },
  input: {
    backgroundColor: "#666666",
    borderColor: "#FF4500",
    borderWidth: 1,
    color: "#FFFFFF",
    fontSize: 16,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  createAccountButton: {
    backgroundColor: "#FF4500",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 10,
  },
  createAccountButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  existingAccountText: {
    color: "#FF4500",
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
  },
});
