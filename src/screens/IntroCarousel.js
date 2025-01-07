import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";

export default function IntroCarousel({ navigation }) {
  const slides = [
    {
      id: 1,
      title: "Endless Content, Social Connections, and More.",
      subtitle: "Stream, share, and explore anytime, anywhere.",
      image: require("../../assets/slide1.png"), // Replace with your image
    },
    {
      id: 2,
      title: "Connect with Celebrities.",
      subtitle: "Follow your favorite stars and interact directly.",
      image: require("../../assets/slide2.png"), // Replace with your image
    },
    {
      id: 3,
      title: "Stream Premium Movies & Shows.",
      subtitle: "Unlock exclusive content and experiences.",
      image: require("../../assets/slide3.png"), // Replace with your image
    },
    {
      id: 4,
      title: "Build Your Social Network.",
      subtitle: "Discover new friends and share your moments.",
      image: require("../../assets/slide4.png"), // Replace with your image
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Logo */}
        <Image
          source={require("../../assets/logo.png")} // Replace with your logo image
          style={styles.logo}
        />
        {/* Links */}
        <View style={styles.headerLinks}>
          <TouchableOpacity onPress={() => console.log("Contact clicked")}>
            <Text style={styles.headerText}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.headerText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Swiper Section */}
      <Swiper
        loop={false}
        activeDotColor="#FF4500"
        paginationStyle={{ bottom: 30 }}
        showsButtons={false}
      >
        {slides.map((slide) => (
          <ImageBackground
            key={slide.id}
            source={slide.image}
            style={styles.slide}
          >
            <View style={styles.overlay}>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.subtitle}>{slide.subtitle}</Text>
            </View>
          </ImageBackground>
        ))}
      </Swiper>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => navigation.navigate("CreateAccount")}
      >
        <Text style={styles.getStartedButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  header: {
    position: "absolute",
    top: 20,
    zIndex: 2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  logo: {
    width: 100, // Adjust size based on your logo
    height: 40,
    resizeMode: "contain",
  },
  headerLinks: {
    flexDirection: "row",
    gap: 20,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for better text visibility
    paddingHorizontal: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    color: "#B0B0B0",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  getStartedButton: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    width: "80%", // Button width as a percentage of screen width
    backgroundColor: "#FF4500",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
    elevation: 5, // Adds shadow to the button
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  getStartedButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
