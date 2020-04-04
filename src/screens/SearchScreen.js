import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View>
      <SearchBar
        term={term}
        onTermSubmit={() => console.log("term was submitted: ", term)}
        onTermChange={newTerm => setTerm(newTerm)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 16
  }
});

export default SearchScreen;
