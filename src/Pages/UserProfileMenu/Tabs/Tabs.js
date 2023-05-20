import React, { useState } from "react";
import { Link } from "react-router-dom";

const Tabs = ({ tabsData }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabChange = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="my-4">
      <div className="flex border-b flex-col md:flex-row">
        {tabsData.map((tab, index) => (
          <Link
            key={tab.id}
            className={`p-3 text-gray-600 font-medium ${
              selectedIndex === index ? "bg-gray-200" : ""
            }`}
            onClick={() => handleTabChange(index)}
          >
            {tab.label}
          </Link>
        ))}
      </div>
      <div className="p-3">{tabsData[selectedIndex].content}</div>
    </div>
  );
};

export default Tabs;
