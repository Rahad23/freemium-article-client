import React, { useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";
import { APIContext } from "../../../contexts/APIProvider";
import { AuthContext } from "../../../contexts/AuthProvider";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useQuery } from "@tanstack/react-query";

const EditArticle = () => {
  const [detailsStory, setDesc] = useState("");
  const [titles, setTitles] = useState("");
  const navigate = useNavigate();
  const { isDarkMode, articlesRefetch, fetchAPI } = useContext(APIContext);
  const { user } = useContext(AuthContext);
  const data = useLoaderData();

  const {
    isLoading,
    refetch,
    data: singleUsers,
  } = useQuery(["user", user?.email], () =>
    fetchAPI(`${process.env.REACT_APP_API_URL}/user/${user?.email}`)
  );

  if (!data) {
    return;
  }
  const { articleTitle, articleDetails, _id } = data;
  const title = articleTitle?.replace(/<[^>]+>/g, "");
  const handleArticleUpdate = (e) => {
    e.preventDefault();

    const data = {
      titles,
      detailsStory,
    };
    fetch(`${process.env.REACT_APP_API_URL}/editArticle/${_id}`, {
      method: "PUT",

      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          articlesRefetch();
          toast.success(`${user?.displayName} story Updated`);
          navigate(`/view-story/${_id}`);
        }
      });
  };

  const handleImageUpload = (image, callback) => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      const file = input.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        callback(e.target.result, file);
      };
      reader.readAsDataURL(file);
    };
  };

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "color",
    "font",
    "align",
  ];

  return (
    <form onSubmit={handleArticleUpdate} className="p-16">
      <div className=" flex justify-between mb-5">
        <h3 className="text-xl md:text-3xl lg:text-5xl font-bold">
          {singleUsers?.name}
        </h3>
        <input
          type="submit"
          className={
            isDarkMode
              ? "btn bg-green-500 hover:bg-green-700 text-white rounded-full"
              : "btn bg-green-600 rounded-full text-white"
          }
          value="Save and Publish"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Title of the Story</label>
        <input
          type="text"
          defaultValue={title}
          onChange={(e) => setTitles(e.target.value)}
          placeholder="Title"
          className={
            isDarkMode
              ? "bg-black-350 border border-gray-400 p-3 rounded-lg w-full label-text text-white"
              : "border border-gray-400 p-3 rounded-lg w-full label-text text-black-350"
          }
        />
      </div>
      <br />
      <div className={isDarkMode ? "py-2 text-white" : "py-2 text-black-350"}>
        <label className="label">
          <span
            className={
              isDarkMode
                ? "label-text  text-white"
                : "label-text text-black-350"
            }
          >
            Write your story
          </span>
        </label>
        <ReactQuill
          // value={details}
          defaultValue={articleDetails}
          onChange={setDesc}
          modules={modules}
          formats={formats}
          placeholder="Write your story here..."
          theme="snow"
          style={
            isDarkMode
              ? { height: "500px", color: "white" }
              : { height: "500px", color: "black" }
          }
          className={isDarkMode ? "text-white" : "text-black-350"}
          bounds=".app"
          callback={handleImageUpload}
        />
      </div>
    </form>
  );
};

export default EditArticle;
