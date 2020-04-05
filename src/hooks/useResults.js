import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
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

  return [searchApi, results, errorMessage];
};
