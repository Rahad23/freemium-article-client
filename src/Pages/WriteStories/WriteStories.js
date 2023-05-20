import React, { useContext, useEffect, useState } from "react";
import "./WriteStories.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";
import { format } from "date-fns";
import { APIContext } from "../../contexts/APIProvider";
import Spinner from "../../components/Spinner/Spinner";
import Creator from "../AnotherCreatorPage/Creator";
import { useDispatch } from "react-redux";
import { sendData } from "../../store/apiSlice";

const WriteStories = () => {
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  const { articlesRefetch, isDarkMode } = useContext(APIContext);
  const { categoryButton, isLoading } = useContext(APIContext);
  const [users, setUsers] = useState({});
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const imageHostKey = process.env.REACT_APP_IMG_BB_KEY;
  const [content, setContent] = useState("");

  const [typeArticle, setTypeArticle] = useState("");
  const navigate = useNavigate();
  // const date = format(new Date(), "PP");
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [user?.email]);

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

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setImage(image);
    setPreview(URL.createObjectURL(image));
  };

  const handleSubmitStories = async (e) => {
    e.preventDefault();
    const form = e.target;
    const category = form.category.value;
    const articleType = form.articleType.value;
    // console.log(articleType);
    if (articleType === "Paid Article") {
      setTypeArticle(false);
    } else {
      setTypeArticle(true);
    }
    const number = form.number.value;
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const body = {
            articleDetails: content,
            userId: users?._id,
            userEmail: user?.email,
            writerName: user?.displayName,
            writerImg: user?.photoURL,
            articleTitle: title,
            // timestamp: new Date(),
            articleRead: number,
            articleImg: imgData?.data?.url,
            category,
            articleType: typeArticle,
          };
          try {
            const data = dispatch(
              sendData({
                method: "post",
                url: "/add-story",
                data: body,
              })
            );
            articlesRefetch();
            navigate("/");
          } catch (error) {
            console.error(error);
          }
        }
      });
  };

  // const handleSubmitStoriess = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const category = form.category.value;
  //   const number = form.number.value;

  //   const formData = new FormData();
  //   formData.append("image", image);
  //   const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
  //   fetch(url, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((imgData) => {
  //       if (imgData.success) {
  //         toast.success("Image upload success");
  //         const body = {
  //           articleDetails: content,
  //           userId: users?._id,
  //           userEmail: user?.email,
  //           writerName: user?.displayName,
  //           writerImg: user?.photoURL,
  //           articleTitle: title,
  //           articleSubmitDate: date,
  //           articleRead: number,
  //           articleImg: imgData?.data?.url,
  //           category,
  //         };

  //         // Update in database
  //         fetch(`${process.env.REACT_APP_API_URL}/add-story`, {
  //           method: "POST",
  //           headers: {
  //             "content-type": "application/json",
  //             authorization: `bearer ${localStorage.getItem("freeMiumToken")}`,
  //           },
  //           body: JSON.stringify(body),
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             toast.success(`${user?.displayName} added new story`);
  //             articlesRefetch();
  //             navigate("/");
  //           });
  //       }
  //     });
  // };

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

  if (isLoading) {
    return <Spinner />;
  }
  return user?.uid ? (
    <div className="mt-4 pb-36">
      <form
        onSubmit={handleSubmitStories}
        className={
          isDarkMode
            ? "w-10/12 mx-auto rounded-md p-0 m-0 sm:py-8 md:py-10 text-white"
            : "w-10/12 mx-auto p-6 mt-6 rounded-md sm:p-10 py-10 text-gray-900"
        }
      >
        <div className="flex justify-between mb-4 items-center">
          <h3 className="text-2xl font-medium">Publish a Story</h3>
          <button
            className="bg-green-600 text-white py-2 px-3 rounded-3xl ml-auto"
            // onClick={}
          >
            Publish
          </button>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Title of the Story</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className={
              isDarkMode
                ? "bg-black-350 border border-gray-400 p-3 rounded-lg w-full label-text text-white"
                : "border border-gray-400 p-3 rounded-lg w-full label-text text-black-350"
            }
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span
              className={
                isDarkMode
                  ? "label-text  text-white"
                  : "label-text text-black-350"
              }
            >
              Read Time
            </span>
          </label>
          <input
            type="number"
            name="number"
            placeholder="Read Time"
            className={
              isDarkMode
                ? "bg-black-350 border border-gray-400 p-3 rounded-lg w-full label-text text-white"
                : "border border-gray-400 p-3 rounded-lg w-full label-text text-black-350"
            }
          />
        </div>
        <label className="label">
          <span
            className={
              isDarkMode
                ? "label-text  text-white"
                : "label-text text-black-350"
            }
          >
            Select Category
          </span>
        </label>
        <select
          name="category"
          className={
            isDarkMode
              ? "bg-black-350 border border-gray-400 p-3 rounded-lg w-full label-text text-white"
              : "bg-white border border-gray-400 p-3 rounded-lg w-full label-text text-black-350"
          }
        >
          {categoryButton.map((category, idx) => (
            <option key={idx} value={category?.CategoryName}>
              {categoryButton.length && category?.CategoryName}
            </option>
          ))}
        </select>
        <label className="label">
          <span
            className={
              isDarkMode
                ? "label-text  text-white"
                : "label-text text-black-350"
            }
          >
            Select article type
          </span>
        </label>
        <select
          name="articleType"
          className={
            isDarkMode
              ? "bg-black-350 border border-gray-400 p-3 rounded-lg w-full label-text text-white"
              : "bg-white border border-gray-400 p-3 rounded-lg w-full label-text text-black-350"
          }
        >
          <option>Paid Article</option>
          <option>Free Article</option>
        </select>
        <div className="flex flex-col my-4 justify-center">
          <label className="label">
            <span
              className={
                isDarkMode
                  ? "label-text  text-white"
                  : "label-text text-black-350"
              }
            >
              Select Image
            </span>
          </label>
          <label
            htmlFor="image-input"
            className={
              isDarkMode
                ? "flex flex-col items-center justify-center border  py-2 hover:bg-bray-800 bg-black-350 border-gray-400 hover:border-gray-500 hover:bg-black-250 rounded-lg"
                : "flex flex-col items-center justify-center border-black-250 border py-2 rounded-lg cursor-pointer bg-gray-50"
            }
          >
            <div className="flex flex-col items-center justify-center">
              {preview ? (
                <div>
                  <img
                    src={preview || "https://via.placeholder.com/300x300"}
                    alt=""
                    className="w-full h-72"
                  />
                </div>
              ) : (
                <>
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="image-input"
            />
          </label>
        </div>
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
            value={content}
            onChange={setContent}
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
    </div>
  ) : (
    <Creator />
  );
};

export default WriteStories;
