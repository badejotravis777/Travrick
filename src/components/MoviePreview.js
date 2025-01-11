import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import movieAssets from "../../assets/movieAssets";

export default function MoviePreview({ movie, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={movieAssets[movie]} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: 120,
    height: 180,
    resizeMode: "cover",
  },
});
