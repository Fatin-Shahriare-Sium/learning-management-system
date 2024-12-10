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
import Modal from "react-modal";
import VideoPlayer from "./videoPlayer";
const SingleCourseLessonCollapse = ({ lessonTitle, lesson_assets }: { lessonTitle: string; lesson_assets: lessonAssetsInterface[] }) => {
  let [open, setOpen] = useState(false);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [vidUrl, setVidUrl] = useState("");
  const customStyles = {
    overlay: {
      backgroundColor: "#2525274f",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      padding: "1rem",
    },
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Image onClick={() => setOpen(!open)} width={20} height={20} alt="up-arrow" src={open ? upArrow : downArrow} />
        <p>{lessonTitle}</p>
      </div>
      <div>
        {lesson_assets.map((sig, i) => {
          {
            console.log(sig.type);
          }
          return (
            <div key={sig.id} style={{ display: open ? "flex" : "none", justifyContent: "space-between", alignItems: "center", gap: "2rem", margin: ".5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Image width={15} height={15} alt="tools-icon" src={vidIcon} />
                <p onClick={() => setmodalIsOpen(true)} style={{ fontSize: "1.5rem", cursor: "pointer" }}>
                  {sig.content_title}
                </p>

                <Modal isOpen={modalIsOpen} onAfterOpen={() => setVidUrl(sig.src)} onRequestClose={() => setmodalIsOpen(!modalIsOpen)} style={customStyles} contentLabel="Example Modal">
                  <VideoPlayer url={vidUrl} />
                </Modal>
              </div>
              <Image height={20} width={20} alt="view/lock icon" src={sig.content_free ? viewIcon : padLock} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleCourseLessonCollapse;
