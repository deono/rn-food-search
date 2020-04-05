import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Image style={styles.imageStyles} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyles}>{result.name}</Text>
      <Text>
        Rating: {result.rating}, Reviews: {result.review_count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // styles
  imageStyles: {
    width: 250,
    height: 120,
    borderRadius: 4
  },
  nameStyles: {
    fontWeight: "bold",
    fontSize: 16
  }
});

export default ResultsDetail;
