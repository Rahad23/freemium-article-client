import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import Spinner from "../../components/Spinner/Spinner";
import { APIContext } from "../../contexts/APIProvider";
import ArticlesCard from "./ArticlesCard/ArticlesCard";
import { useDispatch } from "react-redux";
import { deleteArticle, saveArticle } from "../../store/savedArticlesSlice";

const Articles = () => {
  const [savedArticles, setSavedArticles] = useState([]);
  const { fetchAPI, searchResults } = useContext(APIContext);
  const dispatch = useDispatch();

  const {
    isLoading,
    refetch,
    data: articles,
  } = useQuery(["allArticles"], () =>
    fetchAPI(`${process.env.REACT_APP_API_URL}/allArticles`)
  );
  if (isLoading) {
    return <Spinner />;
  }

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

  // const handleSave = (data) => {
  //   setSavedArticles([...savedArticles, data]);
  //   fetch(`${process.env.REACT_APP_API_URL}/save-article`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       toast.success(`Saved article`);
  //     });
  // };

  // const handleDelete = (id) => {
  //   fetch(
  //     `${process.env.REACT_APP_API_URL}/save-article/delete-article/${id}`,
  //     {
  //       method: "DELETE",
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.deletedCount > 0) {
  //         toast.success("successfully Unsave");
  //       }
  //     });
  // };

  return (
    <>
      {articles.map((data) => (
        <ArticlesCard
          data={data}
          key={data?._id}
          handleSave={handleSave}
          handleDelete={handleDelete}
        ></ArticlesCard>
      ))}
    </>
  );
};

export default Articles;
