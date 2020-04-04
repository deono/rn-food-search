import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 16
  }
});

export default SearchScreen;
