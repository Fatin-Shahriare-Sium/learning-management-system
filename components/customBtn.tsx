"use client";
import { useRouter } from "next/navigation";
import React from "react";

const CustomBtn = ({ btnName, btnTextColor, btnColor }: { btnName: string; btnTextColor: string; btnColor: string }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/course-view/zp1qkxn1ardt5goe0beafprf")} style={{ padding: ".5rem 1.5rem", backgroundColor: btnColor, borderRadius: "3%", margin: "1% 0%", cursor: "pointer" }}>
      <p style={{ color: btnTextColor, textAlign: "center" }}>{btnName}</p>
    </div>
  );
};

export default CustomBtn;
