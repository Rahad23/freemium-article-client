import { useQuery } from "@tanstack/react-query";
import React, { createContext, useEffect, useState } from "react";

export const APIContext = createContext();

const APIProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [threeUsers, setThreeUsers] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchArticles, setSearchArticles] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");
  const [writerSuggestions, setWriterSuggestions] = useState([]);
  const [searchWriter, setSearchWriter] = useState([]);
  const fetchAPI = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(
        `Failed to fetch API Data from Backend: ${error?.message}`
      );
    }
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("isDarkMode");
    if (storedValue) {
      setIsDarkMode(JSON.parse(storedValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const {
    data: categoryButton,
    isLoading: isCategoryLoading,
    refetch: reFetchCategory,
  } = useQuery({
    queryKey: ["categoryButton"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/categoryButton`
      );
      const data = await res.json();
      return data;
    },
  });

  const {
    data: articles,
    isLoading: articlesLoading,
    refetch: articlesRefetch,
  } = useQuery({
    queryKey: ["allArticles"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/allArticles`);
      const data = await res.json();
      return data;
    },
  });
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/user`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/all-users`)
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/three-users`)
      .then((res) => res.json())
      .then((data) => setThreeUsers(data));
  }, []);

  //get reported item
  const {
    data: reportedItems = [],
    isLoading: reportLoading,
    refetch: reportRefetch,
  } = useQuery({
    queryKey: ["reportedItem"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/reportedItem`);
      const data = await res.json();
      return data;
    },
  });

  const apiInfo = {
    categoryButton,
    isCategoryLoading,
    reFetchCategory,
    articles,
    articlesLoading,
    articlesRefetch,
    searchResults,
    setSearchResults,
    isDarkMode,
    setIsDarkMode,
    toggleDarkMode,
    users,
    allUsers,
    threeUsers,
    reportedItems,
    reportLoading,
    reportRefetch,
    fetchAPI,
    searchArticles,
    setSearchArticles,
    suggestions,
    setSuggestions,
    query,
    setQuery,
    setWriterSuggestions,
    writerSuggestions,
    searchWriter,
    setSearchWriter,
    searchWriter, 
    setSearchWriter
    // friends,
    // friendsLoading,
    // friendsRefetch,
  };
  return <APIContext.Provider value={apiInfo}>{children}</APIContext.Provider>;
};

export default APIProvider;
