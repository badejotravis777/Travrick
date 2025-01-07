// src/screens/RegisterScreen.js
import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TRAVRICK</Text>
      <TextInput style={styles.input} placeholder="Full name" placeholderTextColor="#ccc" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#ccc" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#ccc" />
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    fontSize: 32,
    color: "#FF4500",
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#1E1E1E",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    color: "#fff",
    borderColor: "#FF4500",
    borderWidth: 1,
  },
  registerButton: {
    backgroundColor: "#FF4500",
    borderRadius: 8,
    paddingVertical: 15,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  registerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
