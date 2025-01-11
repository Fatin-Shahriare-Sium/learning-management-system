"use client";

import React, { useEffect, useState } from "react";
import EnrolledCoursePreviewCard from "@/components/enrolled-course-preview-card";
import { useAppProvider } from "@/context/appProvider";
import { log } from "console";

const YourCourse = () => {
  let { token } = useAppProvider();
  const [enrolledData, setEnrolledData] = useState([{ id: "", name: "", img: "" }]);
  console.log("quesry ", token);
  useEffect(() => {
    console.log("process.env.NEXT_PUBLIC_starpi_url", process.env.NEXT_PUBLIC_starpi_url);

    fetch(`${process.env.NEXT_PUBLIC_starpi_url}/users?filters[documentId][$eqi]=pmm8vle9cthoolq36466gl74&populate[enrolledCourses][populate][course_thumbnail][populate]`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data[0].enrolledCourses);
        let tempDataArray = [];
        data[0].enrolledCourses.map((sig, i) => {
          console.log(sig.documentId);

          tempDataArray.push({ id: sig.documentId, name: sig.course_name, img: `${process.env.NEXT_PUBLIC_starpi_url_media}${sig.course_thumbnail.url}` });
        });
        return setEnrolledData([...tempDataArray]);
      });
  }, []);
  useEffect(() => {
    console.log("en roll dat", enrolledData);
  }, [enrolledData]);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
        {enrolledData.length > 0 &&
          enrolledData.map((sig, i) => {
            return <EnrolledCoursePreviewCard key={i} img={sig.img} name={sig.name} id={sig.id} author="Fatin Shahriare Sium" />;
          })}
      </div>
    </div>
  );
};

export default YourCourse;
