import React from "react";
import { useState, useEffect, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./../../../components/Spinner/Spinner";
import { APIContext } from "./../../../contexts/APIProvider";
import PendingArticlesCard from "./PendingArticlesCard/PendingArticlesCard";
import ArticlesCard from "./../../ArticlesSection/ArticlesCard/ArticlesCard";
import { classNames } from "classnames";

const PendingArticles = () => {
  const { fetchAPI } = useContext(APIContext);
  // const [articles, setArticels] = useState([]);
  // useEffect(()=>{
  //     fetch(`${process.env.REACT_APP_API_URL}/allArticles`)
  //     .then(res=>res.json())
  //     .then(data=>setArticels(data))
  // },[])

  const { isLoading, data: articles } = useQuery(["allArticles"], () =>
    fetchAPI(`${process.env.REACT_APP_API_URL}/allArticles`)
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold px-5 text-center my-8 ">
          Waiting for Approval
        </h1>
      </div>
      {articles.map((articleData) => (
        <PendingArticlesCard data={articleData} />
      ))}
    </div>
  );
};

export default PendingArticles;
