import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // run this function only when the component is
  // first rendered by passing an empty array as
  // the 2nd argument
  useEffect(() => {
    searchApi("pasta");
  }, []);

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "milton keynes"
        }
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };

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
