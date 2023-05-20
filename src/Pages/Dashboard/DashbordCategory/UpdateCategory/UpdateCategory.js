import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCategory = () => {
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState();
  const { id } = useParams();
  // get specific category
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/categoryButton/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data);
      });
  }, [id, setCategoryData]);

  // category update handler
  const updateCategoryHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const categoryName = form.CategoryName.value;
    setCategoryData(categoryName);
    fetch(
      `${process.env.REACT_APP_API_URL}/updateCategory/${categoryData?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ categoryName }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast("successful update category");
          form.reset();
          navigate("/dashboard/category");
        }
      });
  };

  return (
    <div className="my-10 ml-20">
      <p className="mb-2">Category name : {categoryData?.CategoryName}</p>
      <form onSubmit={updateCategoryHandler}>
        <textarea
          name="CategoryName"
          className="textarea textarea-bordered"
          placeholder="write updated Category"
          required
        ></textarea>
        <br />
        <button
          type="submit"
          className=" border-2 rounded-full px-5 py-1 bg-green-500 text-white"
        >
          update
        </button>
      </form>
    </div>
  );
};

export default UpdateCategory;
