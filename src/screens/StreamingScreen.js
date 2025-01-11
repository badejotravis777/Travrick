import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";
import MovieRow from "../components/MovieRow";

export default function StreamingScreen({ navigation }) {
  const categories = [
    { id: 1, title: "Top Picks for You", movies: ["movie1", "movie2", "movie3"] },
    { id: 2, title: "Romantic Comedies", movies: ["movie4", "movie5", "movie6"] },
    { id: 3, title: "Action & Adventure", movies: ["movie7", "movie8", "movie9"] },
    { id: 4, title: "Documentaries", movies: ["movie10", "movie11", "movie12"] },
  ];

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image source={require("../../assets/profileIcon.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Search functionality coming soon!")}>
          <Image source={require("../../assets/searchIcon.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Movie Categories */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {categories.map((category) => (
          <MovieRow key={category.id} title={category.title} movies={category.movies} />
        ))}
      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Watchlist")}>
          <Text style={styles.footerText}>Watchlist</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Trav functionality coming soon!")}>
          <Text style={styles.footerText}>Trav</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#1a1a1a",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: "#fff",
  },
  scrollView: {
    paddingVertical: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#1a1a1a",
  },
  footerText: {
    color: "#FF4500",
    fontSize: 16,
  },
});
