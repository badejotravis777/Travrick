import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
    
      {/* Language Selector */}
      <Text style={styles.languageSelector}>English(UK)</Text>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logoImage} />
      </View>

      {/* Login Form */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mobile number or email"
          placeholderTextColor="#FFFFFF"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#FFFFFF"
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Create New Account */}
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => navigation.navigate("IntroCarousel")} // Navigate to CreateAccount screen
      >
        <Text style={styles.createAccountText}>Create new account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a", // Dark background
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
  languageSelector: {
    color: "#FF4500",
    fontSize: 16,
    position: "absolute",
    top: 20,
    right: 20,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    marginBottom: 40,
  },
  logoImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  inputContainer: {
    marginBottom: 20,
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
  loginButton: {
    backgroundColor: "#FF4500",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 10,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPasswordText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
  },
  createAccountButton: {
    backgroundColor: "#FF4500",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 30,
  },
  createAccountText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
