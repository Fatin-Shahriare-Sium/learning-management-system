import Image from "next/image";
import React from "react";
import TestImg from "../assets/test.jpg";
import CustomBtn from "./customBtn";
const EnrolledCoursePreviewCard = () => {
  return (
    <div style={{ width: "300px", backgroundColor: "var(--section-color)" }}>
      <Image style={{ width: "100%", height: "100%" }} src={TestImg} alt="tes" />
      <div style={{ padding: "1rem", height: "80px" }}>
        <p>The Complete guide of Nodejs</p>
        <p>Fatin Shahriare Sium</p>
      </div>
      <div>
        <CustomBtn routerLink="/dashboard/your-course/zp1qkxn1ardt5goe0beafprf" btnName="📼 Watch" btnColor="white" btnTextColor="black" />
      </div>
    </div>
  );
};

export default EnrolledCoursePreviewCard;
