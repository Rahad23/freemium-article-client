import React, { useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";
import { APIContext } from "../../../contexts/APIProvider";
import CategoryDeletModal from "../DashbordCategory/CategoryDeletModal/CategoryDeletModal";

const DashbordCategory = () => {
  const [deleteCategory, setDeleteCategory] = useState(null);
  const closeCategoryModal = () => {
    setDeleteCategory(null);
  };

  // category data
  const { categoryButton, isCategoryLoading, reFetchCategory, isDarkMode } =
    useContext(APIContext);
  if (isCategoryLoading) {
    return <Spinner />;
  }
  // delete seller
  const categoryDeleteHandl = (category) => {
    fetch(`${process.env.REACT_APP_API_URL}/categoryButton/${category._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`successfully delete ${category.CategoryName}`);
          reFetchCategory();
        }
      });
  };
  return (
    <div>
      <div className="flex justify-between mb-3">
        <h1 className="text-4xl text-center font-bold m-5">Category</h1>
        <Link to="/dashboard/addCategory">
          <button
            className={
              isDarkMode
                ? "btn bg-green-500 hover:bg-green-600 border-none text-white rounded-full"
                : "btn bg-green-500 hover:bg-green-600 border-none rounded-full text-white"
            }
          >
            Add category
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto w-full">
        <table
          className={
            isDarkMode
              ? "table w-full text-black-350 p-4"
              : "bg-base-100 text-black-350 table w-full"
          }
        >
          <thead>
            <tr>
              <th></th>
              <th className="text-xl">Name</th>

              <th className="text-xl">Actions</th>
              <th className="md:hidden lg:block text-xl">Edit</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {categoryButton?.map((category, i) => (
              <tr key={category._id} category={category}>
                <th>
                  <label>{i + 1}</label>
                </th>

                <td>{category.CategoryName}</td>
                <td>
                  <label
                    onClick={() => setDeleteCategory(category)}
                    htmlFor="delete-modal"
                    className={
                      isDarkMode
                        ? "btn btn-sm m-1 shadow-red-400 bg-black-350 text-white rounded-box w-auto"
                        : "btn btn-sm m-1 bg-base-100  text-red-500 hover:text-white hover:bg-red-500 rounded-box w-auto"
                    }
                    // className="btn btn-ghost bg-red-500 hover:bg-red-600 text-white btn-xs"
                  >
                    Delete
                  </label>
                </td>

                <th>
                  <Link to={`/updateCategory/${category._id}`}>
                    <button className="btn btn-ghost btn-xs">
                      <FaPencilAlt />
                    </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteCategory && (
        <CategoryDeletModal
          title={`are you sure to delete ${deleteCategory.CategoryName}`}
          message={`if you delete ${deleteCategory.CategoryName},it can not undone`}
          closeCategoryModal={closeCategoryModal}
          btnName={"Delete"}
          deleteHandler={categoryDeleteHandl}
          categoryData={deleteCategory}
        ></CategoryDeletModal>
      )}
    </div>
  );
};

export default DashbordCategory;
