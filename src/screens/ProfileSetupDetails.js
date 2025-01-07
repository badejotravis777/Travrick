import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";

export default function ProfileDetailsScreen({ navigation }) {
  const [gender, setGender] = useState("");

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image
          source={require("../../assets/profileImage.png")}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.addPictureButton}>
          <Text style={styles.addPictureText}>Add profile picture</Text>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#FFFFFF" />
      <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#FFFFFF" />
      <TextInput style={styles.input} placeholder="Bio" placeholderTextColor="#FFFFFF" />

      {/* Gender Selection */}
      <View style={styles.genderContainer}>
        <Text style={styles.genderLabel}>Gender:</Text>
        <View style={styles.genderButtons}>
          <TouchableOpacity
            style={[styles.genderButton, gender === "male" && styles.genderSelected]}
            onPress={() => setGender("male")}
          >
            <Text style={styles.genderButtonText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderButton, gender === "female" && styles.genderSelected]}
            onPress={() => setGender("female")}
          >
            <Text style={styles.genderButtonText}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderButton, gender === "other" && styles.genderSelected]}
            onPress={() => setGender("other")}
          >
            <Text style={styles.genderButtonText}>Other</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Start Streaming Button */}
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate("StreamingScreen")}
      >
        <Text style={styles.startButtonText}>Start streaming</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  backArrow: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  profileImageContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  addPictureButton: {
    backgroundColor: "#FF4500",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  addPictureText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Quicksand",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#666666",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#FFFFFF",
    fontFamily: "Quicksand",
    marginBottom: 15,
    marginBottom: 40,
  },
  genderContainer: {
    width: "100%",
    marginBottom: 20,
  },
  genderLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Quicksand",
    marginBottom: 10,
  },
  genderButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  genderButton: {
    width: "30%",
    height: 40,
    backgroundColor: "#4D4D4D",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  genderSelected: {
    backgroundColor: "#FF4500",
  },
  genderButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Quicksand",
  },
  startButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#FF4500",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  startButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Quicksand",
  },
});
