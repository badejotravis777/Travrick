import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login"); // Navigate to Login after 3 seconds
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {/* Replace Text with an Image */}
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200, // Adjust size as needed
    height: 200,
    resizeMode: "contain", // Ensures the image scales properly
  },
});
