import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ArticlesCard from "../../ArticlesSection/ArticlesCard/ArticlesCard";
import { useDispatch } from "react-redux";
import { deleteArticle, saveArticle } from "../../../store/savedArticlesSlice";
import { toast } from "react-hot-toast";
import { APIContext } from "../../../contexts/APIProvider";
import SideCategory from "../../SideCategory/SideCategory";
import GetUnlimitedAccessButton from "../../../components/GetUnlimitedAccessButton/GetUnlimitedAccessButton";
import { Link } from "react-router-dom";

function SearchResults() {
  const { query } = useContext(APIContext);
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const handleSave = (data) => {
    dispatch(saveArticle(data))
      .then(() => {
        toast.success("Saved article");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleDelete = (id) => {
    dispatch(deleteArticle(id))
      .then(() => {
        toast.success("Successfully Unsave");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        return;
      }
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/search/query=${query}`
      );
      setSearchResults(response?.data?.articles);
    };

    fetchSearchResults();
  }, [query]);
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="col-span-2">
        {searchResults.map((data) => (
          <ArticlesCard
            data={data}
            key={data?._id}
            handleSave={handleSave}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <aside className="lg:mx-auto my-10 lg:px-10 text-center lg:text-start">
        <div className="flex justify-center ">
          <Link className="w-full text-center" to="/payment">
            <GetUnlimitedAccessButton text={"Get unlimited access"} />
          </Link>
        </div>
        <SideCategory />
      </aside>
    </div>
  );
}

export default SearchResults;
