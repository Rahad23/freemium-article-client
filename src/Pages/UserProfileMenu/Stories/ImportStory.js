import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import { APIContext } from "../../../contexts/APIProvider";
import { AuthContext } from "../../../contexts/AuthProvider";

const ImportStory = () => {
  const [storyUrl, setStoryUrl] = useState("");
  const [category, setCategory] = useState("");
  const [importStatus, setImportStatus] = useState("");
  const { user } = useContext(AuthContext);
  const { articlesRefetch, isDarkMode, categoryButton, isLoading } =
    useContext(APIContext);
  const [users, setUsers] = useState({});

  const navigate = useNavigate();
  const date = format(new Date(), "PP");
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [user?.email]);
  const importStory = async (e) => {
    const body = {
      userId: users?._id,
      userEmail: user?.email,
      writerName: user?.displayName,
      writerImg: user?.photoURL,
      timestamp: date,
      articleRead: 2,
      category: category.target.value,
    };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/import-story`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: storyUrl, extra: body }),
        }
      );
      const result = await response.json();
      // setImportStatus(result.message);
      toast.success(result.message);
      articlesRefetch();
      navigate("/");
    } catch (error) {
      setImportStatus("Failed to import story");
    }
  };

  return (
    <div className="w-7/12 mx-auto">
      <div className="text-center my-5">
        <h1 className="text-4xl font-bold my-5">See your story on FreeMium</h1>
        <p>
          Import a story from anywhere on the internet to publish on your
          FreeMium account.
        </p>
      </div>
      <div className="w-8/12 mx-auto">
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
          onChange={setCategory}
          name="category"
          className={
            isDarkMode
              ? "bg-black-350 border border-gray-400 p-3 rounded-lg label-text text-white"
              : "bg-white border border-gray-400 p-3 rounded-lg label-text text-black-350"
          }
        >
          {categoryButton.map((category, idx) => (
            <option key={idx} value={category?.CategoryName}>
              {categoryButton.length && category?.CategoryName}
            </option>
          ))}
        </select>
      </div>
      <div className="flex w-8/12 mx-auto flex-col gap-5 my-5">
        <input
          className="input input-bordered input-ghost"
          value={storyUrl}
          onChange={(e) => setStoryUrl(e.target.value)}
          placeholder="Story URL"
        />
        <button
          className="btn w-3/12 mx-auto btn-outline btn-success rounded-full "
          onClick={importStory}
        >
          Import
        </button>
        {importStatus && <div>{importStatus}</div>}
      </div>
    </div>
  );
};

export default ImportStory;
