"use client";
import React, { useState } from "react";
import upArrow from "../assets/up-arrow.png";
import downArrow from "../assets/down-arrow.png";
import Image from "next/image";
import vidIcon from "../assets/videoIcon.png";
import pdfIcon from "../assets/pdfIcon.png";
import padLock from "../assets/padLock.png";
import viewIcon from "../assets/viewIcon.png";
import { lessonAssetsInterface } from "@/types/interface";
const CoursePlayerLessonCollapse = ({ lessonTitle, lesson_assets, handleClick, activeLessId }: { lessonTitle: string; lesson_assets: lessonAssetsInterface[]; handleClick: () => any; activeLessId: string }) => {
  let [open, setOpen] = useState(false);
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Image onClick={() => setOpen(!open)} width={20} height={20} alt="up-arrow" src={open ? upArrow : downArrow} />
        <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>{lessonTitle}</p>
      </div>
      <div>
        {lesson_assets.map((sig, i) => {
          {
            console.log(sig.type);
          }
          return (
            <div key={sig.id} style={{ display: open ? "flex" : "none", justifyContent: "space-between", alignItems: "center", gap: "2rem", margin: ".5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "2px", backgroundColor: activeLessId == sig.id ? "black" : "" }}>
                <Image width={15} height={15} alt="tools-icon" src={vidIcon} />
                <p
                  onClick={() => {
                    handleClick(sig.id, sig.content_title, sig.src);
                  }}
                  style={{ fontSize: "1.2rem", fontWeight: "500", cursor: "pointer" }}
                >
                  {sig.content_title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursePlayerLessonCollapse;
