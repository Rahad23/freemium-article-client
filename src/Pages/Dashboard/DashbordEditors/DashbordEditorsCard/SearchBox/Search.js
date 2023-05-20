import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { APIContext } from "../../../../../contexts/APIProvider";

function Search({ searchPlaceholder, propsStyle }) {
  const [query, setQuery] = useState("");
  const {
    writerSuggestions,
    setWriterSuggestions,
    searchWriter,
    setSearchWriter,
  } = useContext(APIContext);
  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/writer-search/${query}`
      );
      setSearchWriter(response.data.articles);
      setWriterSuggestions(response.data.suggestions);
    };
    if (query.length > 0) {
      fetchSearchResults();
    } else {
      setSearchWriter([]);
      setWriterSuggestions([]);
    }
  }, [query]);
  // const navigate = useNavigate();
  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  //   navigate("/search");
  // };

  return (
    <>
      <div className="hidden md:block">
        <div
          className={`relative ${propsStyle} text-gray-600 focus-within:text-gray-400`}
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            name="q"
            className="py-2 text-sm text-gray-900 border rounded-3xl pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
            placeholder={searchPlaceholder}
            autoComplete="off"
          />
        </div>
      </div>
    </>
  );
}

export default Search;
