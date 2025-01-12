"use client";
import { useAppProvider } from "@/context/appProvider";
import React from "react";

const BuyBtn = ({ courseId, enrolledUsersArray }: { courseId: string; enrolledUsersArray: { documentId: string }[] }) => {
  const { token } = useAppProvider();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let alreadyEnrolled = enrolledUsersArray.filter((sig) => (sig.documentId == userInfo.documentId ? true : false));
  console.log("alreadyEnrolled", alreadyEnrolled);

  let handleBuy = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_starpi_url}/single-courses/enroll-course?courseId=${courseId}&&userDocId=${userInfo.documentId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    let x = await data.json();
    console.log(x);
  };
  return <div>{alreadyEnrolled.length > 0 ? <button>Go to course</button> : <button onClick={async () => handleBuy()}>Buy this</button>}</div>;
};

export default BuyBtn;
