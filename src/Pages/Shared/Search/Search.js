import React, { useContext, useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import Spinner from "../../../components/Spinner/Spinner";
import { APIContext } from "../../../contexts/APIProvider";

import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import SearchResults from "./SearchResults";
function Search({ searchPlaceholder, propsStyle }) {
  const {
    searchArticles,
    query,
    setQuery,
    setSearchArticles,
    suggestions,
    setSuggestions,
  } = useContext(APIContext);

  const [searchParams] = useSearchParams();
  // const query = searchParams.get("q");

  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/search/${query}`
      );
      setSearchArticles(response.data.articles);
      setSuggestions(response.data.suggestions);
    };
    if (query?.length > 0) {
      fetchSearchResults();
    } else {
      setSearchArticles([]);
      setSuggestions([]);
    }
  }, [query, setSearchArticles, setSuggestions]);

  const navigate = useNavigate();
  const handleInputChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    navigate(`/search?q=${query}`);
  };
  const clearSearch = () => {
    setQuery("");
  };

  return (
    <>
      {/* <Link to={`/search/query=${query}`}> */}
      <form onSubmit={handleInputChange} className="hidden md:block">
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
      </form>
      {/* </Link> */}
      {suggestions.length > 0 && (
        <ul
          className="absolute left-56 top-16 bg-white rounded-md shadow-lg overflow-hidden p-2 z-50"
          style={{ width: "20rem" }}
        >
          {suggestions.map((article) => (
            <Link key={article?._id} to={`/view-story/${article?._id}`}>
              <button onClick={clearSearch}>
                <li className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                  <img
                    className="h-10 w-10 object-cover mx-1"
                    src={article?.articleImg}
                    alt={article?.articleTitle}
                  />
                  <p
                    className="text-gray-600 font-bold text-sm mx-2"
                    dangerouslySetInnerHTML={{ __html: article?.articleTitle }}
                  />
                </li>
              </button>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}

export default Search;
