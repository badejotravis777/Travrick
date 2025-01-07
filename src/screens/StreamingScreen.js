import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const categories = [
  {
    id: 1,
    title: "Romance",
    movies: Array.from({ length: 15 }, (_, i) => ({
      id: i,
      image: require("../../assets/movie1.png"), // Replace with actual movie images
    })),
  },
  {
    id: 2,
    title: "Action",
    movies: Array.from({ length: 12 }, (_, i) => ({
      id: i,
      image: require("../../assets/movie2.png"), // Replace with actual movie images
    })),
  },

  {
    id: 3,
    title: "Comedy",
    movies: Array.from({ length: 10 }, (_, i) => ({
        id: i,
        image: require("../../assets/movie3.png"),
    })),
  },
  
  {
    id: 4,
    title: "Thriller",
    movies: Array.from({ length: 8}, (_, i) => ({
        id: i,
        image: require("../../assets/movie4.png"),
    })),
  },

  {
    id: 5,
    title: "Drama",
    movies: Array.from({ length: 6}, (_, i) => ({
        id: i,
        image: require("../../assets/movie5.png"),
    })),
  },

  {
    id: 6,
    title: "Adventure",
    movies: Array.from({ length: 16}, (_, i) => ({
        id: i,
        image: require("../../assets/movie6.png"),
    })),
  },

  {
    id: 7,
    title: "Horror",
    movies: Array.from({ length: 17}, (_, i) => ({
        id: i,
        image: require("../../assets/movie7.png"),
    })),
  },

  {
    id: 8,
    title: "Documentary",
    movies: Array.from({ length: 18}, (_, i) => ({
        id: i,
        image: require("../../assets/movie8.png"),
    })),
  }
  
  // Add more categories like Comedy, Thriller, etc.
];

export default function StreamingScreen({ navigation }) {
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const renderMovie = ({ item, index }) => (
    <TouchableOpacity
      style={styles.movieContainer}
      onPressIn={() => setHoveredMovie(index)}
      onPressOut={() => setHoveredMovie(null)}
    >
      <Image source={item.image} style={styles.movieImage} />
      {hoveredMovie === index && (
        <View style={styles.hoverBox}>
          <Text style={styles.hoverText}>Friends who watched:</Text>
          <View style={styles.friendsContainer}>
            {[1, 2, 3].map((_, i) => (
              <Image
                key={i}
                source={require("../../assets/useriamge.png")} // Replace with actual profile images
                style={styles.friendImage}
              />
            ))}
          </View>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="person-circle" size={28} color="#FFFFFF" />
        </TouchableOpacity>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <TouchableOpacity>
          <Ionicons name="search" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView style={styles.scrollView}>
        {categories.map((category) => (
          <View key={category.id} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category.title}</Text>
            <FlatList
              data={category.movies}
              renderItem={renderMovie}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIcon}>
          <FontAwesome5 name="home" size={24} color="#FFFFFF" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Ionicons name="bookmark" size={24} color="#FFFFFF" />
          <Text style={styles.footerText}>Watchlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Ionicons name="chatbubble" size={24} color="#FFFFFF" />
          <Text style={styles.footerText}>Trav</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Ionicons name="person-circle" size={24} color="#FFFFFF" />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#121212",
  },
  logo: {
    width: 80,
    height: 40,
    resizeMode: "contain",
  },
  scrollView: {
    flex: 1,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
  },
  movieContainer: {
    marginRight: 10,
  },
  movieImage: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").height * 0.25,
    borderRadius: 8,
  },
  hoverBox: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 8,
    padding: 10,
  },
  hoverText: {
    color: "#FFFFFF",
    fontSize: 12,
    marginBottom: 5,
  },
  friendsContainer: {
    flexDirection: "row",
  },
  friendImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#121212",
    paddingVertical: 10,
  },
  footerIcon: {
    alignItems: "center",
  },
  footerText: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 5,
  },
});
