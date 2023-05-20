import React, { useState } from "react";
import DashbordEditorsTable from "../DashbordEditorsTable/DashbordEditorsTable";
import { useForm } from "react-hook-form";
import Search from "./SearchBox/Search";
// import '../DashbordEditorsTable/DashordEditorsTable.css';
const DashbordEditorsCard = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [selectedNumber, setSelectedNunber] = useState("All");
  const onSubmit = (data) => {
    const selectedUserData = data?.selectData;
    setSelectedNunber(selectedUserData);
  };

  return (
    <div className="card w-full border-[1px] border-[#ddd] bg-base-100 shadow-lg px-4">
      <div className="card-body p-4">
        <div className="flex justify-between border-[2px] border-b-[#ddd] border-x-0 border-t-0 py-2">
          <form onClick={handleSubmit(onSubmit)}>
            <div className="flex items-center">
              <span className="text-base mr-2 font-semibold text-gray-900">
                Show
              </span>
              <select
                {...register("selectData")}
                className="select select-bordered w-52 max-w-xs"
              >
                <option selected>All</option>
                <option>5</option>
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span className="text-base mr-2 font-normal ml-1 text-gray-900">
                Entries
              </span>
            </div>
          </form>
          <div className="flex items-center">
            <span className="text-base text-gray-900 mr-2 font-semibold">
              Search
            </span>
            <Search />
          </div>
        </div>
      </div>
      <DashbordEditorsTable selectedNumber={selectedNumber} />
    </div>
  );
};

export default DashbordEditorsCard;
