import React from "react";
import SelectCategory from "../SelectCategory";
import RelatedTopicsTopWriters from "./../RelatedTopicsAndTopWriters/RelatedTopicsTopWriters";
import "./SelectCategorySection.css";
const SelectCategorySection = () => {
  return (
    <div className="lg:grid flex flex-col lg:flex-row columns-grid lg:px-7 px-2">
      <SelectCategory />
      <RelatedTopicsTopWriters />
    </div>
  );
};

export default SelectCategorySection;
