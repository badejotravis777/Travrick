import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import MoviePreview from "./MoviePreview";

export default function MovieRow({ title, movies }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map((movie, index) => (
          <MoviePreview
            key={index}
            movie={movie}
            onPress={() => console.log(`${movie} clicked`)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
});
