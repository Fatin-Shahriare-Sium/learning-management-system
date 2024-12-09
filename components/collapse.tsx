"use client";

import { useState } from "react";

const CustomCollapse = ({ children }) => {
  let [open, setOpen] = useState(false);
  return (
    <div style={{ backgroundColor: "var(--section-color)", padding: "2rem" }}>
      <div style={{ height: open ? "auto" : "30vh", overflow: "hidden" }}>{children}</div>
      <p style={{ fontWeight: "700", cursor: "pointer", fontSize: "2rem" }} onClick={() => setOpen(!open)}>
        {open ? "Show less" : "Show More"}
      </p>
    </div>
  );
};

export default CustomCollapse;
