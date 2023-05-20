import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";
import SideCategoryButton from './../../../SideCategory/SideCategoryButton/SideCategoryButton';
import { APIContext } from './../../../../contexts/APIProvider';



const RelatedTopics = () => {
  const [category, setCategory] = useState([]);
  // console.log(category);
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useContext(APIContext);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/categoryButton`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, [category]);

  return (
    <div className={!user?.uid && "mb-16"}>
      <h4 className={isDarkMode ?"text-gray-100 font-semibold text-base mb-4 mt-10 border-x-0 border-t-0 ml-9 lg:ml-0":"text-gray-900 font-semibold text-base mb-4 mt-10 border-x-0 border-t-0 ml-9 lg:ml-0"}>
        Related Topics
      </h4>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 ">
        {category.map((data) => (
          <SideCategoryButton category={data} key={data?._id} />
        ))}
      </div>
    </div>
  );
};

export default RelatedTopics;
