import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsLits from "../components/ResultsList";

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
      <ResultsLits title="Cost Effective" />
      <ResultsLits title="Bit Pricier" />
      <ResultsLits title="Big Spender" />
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
