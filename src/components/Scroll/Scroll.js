import React from "react";

const Scroll = ({ children }) => {
  return <div style={{ overflowY: "scroll", height: "50vh" }}>{children}</div>;
};

export default Scroll;
