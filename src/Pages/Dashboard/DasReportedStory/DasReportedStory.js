import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";

import Spinner from "../../../components/Spinner/Spinner";
import { APIContext } from "../../../contexts/APIProvider";
import ReportStoryModal from "./ReportStoryModal";

const DasReportedStory = () => {
  const [deleteItem, setDeleteItem] = useState(null);
  const closeReportedModal = () => {
    setDeleteItem(null);
  };
  const { reportedItems, reportLoading, reportRefetch, isDarkMode } =
    useContext(APIContext);
  // delete reported item
  const reporItemDeleteHandl = (item) => {
    fetch(`${process.env.REACT_APP_API_URL}/Story/reportedStory/${item._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("successfully delete");
          reportRefetch();
        }
      });
  };

  if (reportLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <h2 className="text-4xl text-center font-bold m-5">Reported Stories</h2>
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
              <th className="text-xl">IMAGE</th>
              <th className="text-xl">STORY TITLE</th>
              <th className="text-xl">Writer</th>
              <th className="text-xl">Actions</th>
            </tr>
          </thead>
          <tbody className="hover:bg-slate-800">
            {/* <!-- row 1 --> */}
            {reportedItems?.map((item, i) => (
              <tr key={item._id} item={item}>
                <th>
                  <label>{i + 1}</label>
                </th>

                <td>
                  <img
                    src={item.articleImg}
                    className="w-16 h-14 rounded"
                    alt=""
                  />
                </td>
                <td>
                  {item.articleTitle.replace(/<[^>]+>/g, "").slice(0, 35)}
                </td>
                <td>{item.writerName}</td>

                <td>
                  <label
                    onClick={() => setDeleteItem(item)}
                    htmlFor="delete-modal"
                    className={
                      isDarkMode
                        ? "btn btn-sm m-1 shadow-red-400 bg-black-350 text-white rounded-box w-auto"
                        : "btn btn-sm m-1 bg-base-100  text-red-500 hover:text-white hover:bg-red-500 rounded-box w-auto"
                    }
                    // className="btn btn-ghost btn-xs bg-red-500 hover:bg-red-600 text-white"
                  >
                    Delete
                  </label>
                </td>

                {/* <th>
          <button className="btn btn-ghost btn-xs">verify</button>
        </th> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteItem && (
        <ReportStoryModal
          title={`are you sure to delete ${deleteItem.writerName}`}
          message={`if you delete ${deleteItem.writerName},it can not undone`}
          closeReportedModal={closeReportedModal}
          btnName={"Delete"}
          deleteHandler={reporItemDeleteHandl}
          itemData={deleteItem}
        ></ReportStoryModal>
      )}
    </div>
  );
};

export default DasReportedStory;
