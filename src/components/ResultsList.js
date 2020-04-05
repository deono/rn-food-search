import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  console.log(title, results);
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => {
          return result.id;
        }}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      >
        Results: {results.length}
      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  // styles
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15
  },
  container: {
    marginBottom: 10
  }
});

export default ResultsList;
