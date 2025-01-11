import Image from "next/image";
import React from "react";
import TestImg from "../assets/test.jpg";
import CustomBtn from "./customBtn";
const EnrolledCoursePreviewCard = ({ id, name, author, img }: { id: string; name: string; author: string; img: string }) => {
  console.log("name in compo", img);
  return (
    <div style={{ width: "300px", backgroundColor: "var(--section-color)" }}>
      <Image width={300} height={300} style={{ width: "100%", height: "100%" }} src={img} alt="tes" />
      <div style={{ padding: "1rem", height: "80px" }}>
        <p>{name}</p>
        <p>{author}</p>
      </div>
      <div>
        <CustomBtn routerLink={`/dashboard/your-course/coursePlayer?courseId=${id}`} btnName="📼 Watch" btnColor="white" btnTextColor="black" />
      </div>
    </div>
  );
};

export default EnrolledCoursePreviewCard;
