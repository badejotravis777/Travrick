import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function PasswordCreationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Success Icon */}
      <Image source={require('../../assets/checkmark-icon.png')} style={styles.icon} />

      {/* Success Message */}
      <Text style={styles.congratsText}>Congratulations</Text>
      <Text style={styles.detailsText}>Your details have been verified!</Text>

      {/* Input Password */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Create your account password...</Text>
        <TextInput
          style={styles.input}
          placeholder="Input Password"
          placeholderTextColor="#FFFFFF"
          secureTextEntry
        />
      </View>

      {/* Confirm Password */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Confirm your password...</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#FFFFFF"
          secureTextEntry
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("ProfileSetupScreen")}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A", // Background color from the screenshot
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 80, // Match icon size from screenshot
    height: 80,
    resizeMode: "contain",
    marginBottom: 70,
  },
  congratsText: {
    fontFamily: "Quicksand", // Use Quicksand font
    fontSize: 20,
    color: "#FF4500", // Orange color
    fontWeight: "bold",
    textAlign: "center",
  },
  detailsText: {
    fontFamily: "Quicksand",
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 30,
  },
  inputGroup: {
    width: "100%",
    marginBottom: 30,
  },
  label: {
    fontFamily: "Quicksand",
    fontSize: 14,
    color: "#FFFFFF",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 48,
    borderRadius: 6,
    backgroundColor: "#666666", // Dark gray background for inputs
    color: "#FFFFFF",
    fontSize: 16,
    paddingHorizontal: 15,
    fontFamily: "Quicksand",
    borderWidth: 1.5,
    borderColor: "#FF4500", // Orange border
  },
  continueButton: {
    backgroundColor: "#FF4500",
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
  },
  continueButtonText: {
    fontFamily: "Quicksand",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
