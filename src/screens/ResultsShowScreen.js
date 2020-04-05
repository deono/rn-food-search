import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  console.log("result", result);

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingStyles}>{result.name}</Text>
      <Text style={styles.subStyles}>
        Rating: {result.rating}, Reviews: {result.review_count}
      </Text>
      <Text style={styles.addressStyles}>{result.location.address1}</Text>

      <Text style={styles.addressStyles}>{result.location.city}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyles} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // styles
  container: {
    margin: 15
  },
  imageStyles: {
    height: 200,
    width: 300,
    marginTop: 15
  },
  headingStyles: {
    fontSize: 18,
    fontWeight: "bold"
  },
  subStyles: {
    fontSize: 16
  },
  addressStyles: {
    fontSize: 14,
    color: "gray",
    marginLeft: 10
  }
});

export default ResultsShowScreen;
