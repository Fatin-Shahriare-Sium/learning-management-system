"use client";

import { useState } from "react";

const CustomCollapse = ({ children }) => {
  let [open, setOpen] = useState(false);
  return (
    <div>
      <div style={{ height: open ? "auto" : "30vh", overflow: "hidden" }}>{children}</div>
      <p onClick={() => setOpen(!open)}>{open ? "Show less" : "Show More"}</p>
    </div>
  );
};

export default CustomCollapse;
