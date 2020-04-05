import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermSubmit={() => searchApi(term)}
        onTermChange={newTerm => setTerm(newTerm)}
      />
      {errorMessage ? (
        <Text style={styles.errorTextStyle}>{errorMessage}</Text>
      ) : null}
      <Text style={styles.textStyles}>
        We have found {results.length} results
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 16,
    marginHorizontal: 15
  },
  errorTextStyle: {
    fontSize: 16,
    margin: 15,
    color: "red"
  }
});

export default SearchScreen;
