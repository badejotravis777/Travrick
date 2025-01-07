import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function ProfileSetupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header Text */}
      <Text style={styles.headerText}>Setup Your profile...</Text>

      {/* Travrick Logo */}
      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      {/* Buttons */}
      <TouchableOpacity
        style={[styles.button, styles.customProfileButton]}
        onPress={() => navigation.navigate("ProfileSetupDetails")}
      >
        <Text style={styles.buttonText}>Setup custom profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ProfileSetupDetails")}
      >
        <Text style={styles.buttonText}>Use default profile</Text>
      </TouchableOpacity>

      {/* Support Link */}
      <Text style={styles.supportText}>
        Need help? <Text style={styles.supportLink}>Support</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A", // Dark background as in the image
    alignItems: "center",
    paddingTop: 40,
  },
  headerText: {
    fontSize: 22, // Matching the size in the image
    fontFamily: "Quicksand", // Font from the design
    color: "#FFFFFF",
    marginTop: 40,
    marginBottom: 60,
    textAlign: "center",
  },
  logo: {
    width: 140, // Adjusted to match the logo size in the image
    height: 140,
    resizeMode: "contain",
    marginBottom: 60,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#FF4500", // Orange color for the buttons
    borderRadius: 20, // Rounded edges matching the image
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    elevation: 5, // Slight shadow for a raised look
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Quicksand",
    color: "#FFFFFF",
  },
  supportText: {
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#B3B3B3",
    position: "absolute",
    bottom: 20,
  },
  supportLink: {
    color: "#FF4500", // Orange for the link
    textDecorationLine: "underline",
  },
});
