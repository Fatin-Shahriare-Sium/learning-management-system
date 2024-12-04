import React from "react";

const CustomBtn = ({ btnName, btnTextColor, btnColor }: { btnName: string; btnTextColor: string; btnColor: string }) => {
  return (
    <div style={{ padding: "1rem 1rem", backgroundColor: btnColor, borderRadius: "3%", margin: "1% 0%", cursor: "pointer" }}>
      <p style={{ color: btnTextColor, textAlign: "center" }}>{btnName}</p>
    </div>
  );
};

export default CustomBtn;
