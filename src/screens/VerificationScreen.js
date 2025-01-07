import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function VerificationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} /> {/* Replace with your actual logo */}
      </View>

      {/* Instruction Text */}
      <Text style={styles.instructionText}>
        Please input the verification codes we sent to your e-mail and phone number...
      </Text>

      {/* Email Verification Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Input e-mail code:</Text>
        <View style={styles.codeContainer}>
          {[...Array(4)].map((_, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              keyboardType="numeric"
              maxLength={1}
            />
          ))}
        </View>
      </View>

      {/* Phone Verification Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Input phone number code:</Text>
        <View style={styles.codeContainer}>
          {[...Array(4)].map((_, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              keyboardType="numeric"
              maxLength={1}
            />
          ))}
        </View>
      </View>

      {/* Verify Button */}
      <TouchableOpacity
        style={styles.verifyButton}
        onPress={() => navigation.navigate("PasswordCreationScreen")}
      >
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>

      {/* Resend Code */}
      <Text style={styles.resendText}>
        Didn’t receive code? <Text style={styles.linkText}>Resend code</Text>
      </Text>

      {/* Already Have Account */}
      <Text style={[styles.linkText, styles.accountLink]}>
        I already have an account
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A", // Dark greenish-black
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100, // Adjust based on your logo
    resizeMode: "contain",
  },
  instructionText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "bold",
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "#FF4500", // Orange border
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "#333333", // Dark gray background for input boxes
  },
  verifyButton: {
    backgroundColor: "#FF4500", // Orange button
    borderRadius: 100,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  verifyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  resendText: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
  linkText: {
    color: "#FF4500",
    fontSize: 14,
    textAlign: "center",
  },
  accountLink: {
    marginTop: 10,
  },
});
