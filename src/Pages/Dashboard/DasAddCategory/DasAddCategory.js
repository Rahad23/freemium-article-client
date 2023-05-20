import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { APIContext } from "../../../contexts/APIProvider";

const DasAddCategory = () => {
  const { isDarkMode } = useContext(APIContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addCategoryHandler = (data) => {
    console.log(data.categoryname);
    const newCategory = { CategoryName: data.categoryname };
    fetch(`${process.env.REACT_APP_API_URL}/addNewCategory`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCategory),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success(`${data?.categoryname} added successfully`);
        navigate("/dashboard/category");
      });
  };
  return (
    <div>
      <Link to="/dashboard/category">
        {" "}
        <button
          className={
            isDarkMode
              ? "btn bg-green-500 rounded-full hover:bg-green-700 text-white"
              : "btn bg-black-250 rounded-full text-white"
          }
        >
          back to category
        </button>
      </Link>
      <div
        className={
          isDarkMode
            ? "card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto p-10 my-20 bg-black-250 text-white"
            : "card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto p-10 my-20 text-gray-900"
        }
      >
        <h1 className="text-2xl font-bold text-center">Add A Category</h1>
        {/* added form */}
        <form onSubmit={handleSubmit(addCategoryHandler)}>
          <div className="form-control">
            <label className="label">
              <span
                className={
                  isDarkMode
                    ? "label-text text-white"
                    : "label-text text-black-250"
                }
              >
                Category name
              </span>
            </label>
            <input
              type="text"
              {...register("categoryname", {
                required: "category name is required",
              })}
              placeholder="category name"
              className="input input-bordered w-full "
            />
            {errors.categoryname && (
              <p role="alert">{errors.categoryname?.message}</p>
            )}
          </div>
          <div className="form-control mt-6">
            <input
              className={
                isDarkMode
                  ? "btn bg-green-500 hover:bg-green-700 text-white rounded-full"
                  : "btn bg-green-600 rounded-full text-white"
              }
              value="Add category"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DasAddCategory;
