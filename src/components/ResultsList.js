import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  console.log(title, results);
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
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
    fontWeight: "bold"
  }
});

export default ResultsList;
