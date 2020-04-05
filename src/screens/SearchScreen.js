import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsLits from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByRating = (rangeStart, rangeEnd) => {
    // price === '$' || '$$' | '$$$'
    return results.filter(result => {
      return result.rating >= rangeStart && result.rating < rangeEnd;
    });
  };

  console.log("all results: ", results);

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
      <ResultsLits results={filterResultsByRating(3, 4)} title="Meh..." />
      <ResultsLits
        results={filterResultsByRating(4, 4.5)}
        title="Its not crap"
      />
      <ResultsLits
        results={filterResultsByRating(4.5, 5)}
        title="Mmmmmm, yummy"
      />
      <ResultsLits
        results={filterResultsByRating(5, 6)}
        title="OMFG, mouthgasm!"
      />
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
