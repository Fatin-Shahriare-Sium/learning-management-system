"use client";
import CoursePlayerLessonCollapse from "@/components/coursePlayer-lession-collapse";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
const lessons = [
  { id: 1, title: "Introduction", url: "https://example.com/video1.mp4" },
  { id: 2, title: "Getting Started", url: "https://example.com/video2.mp4" },
  { id: 3, title: "Advanced Techniques", url: "https://example.com/video3.mp4" },
];
const CourseVideoPlayer = () => {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId");
  const [allLessons, setAllLessons] = useState([]);
  const [currentLesson, setCurrentLesson] = useState({ id: "", content_title: "", src: "" });

  const handleLessonClick = (lessionId, lessionTilte, lessionSrc) => {
    console.log("lesson title", lessionTilte);

    setCurrentLesson({ id: lessionId, content_title: lessionTilte, src: lessionSrc });
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_starpi_url}/single-courses/${courseId}?populate[course_lessons][populate]=*`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_strapi_api_token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((datax) => {
        setAllLessons(datax.data.course_lessons);
        console.log(datax);
      });
  }, []);

  return (
    <div className="dashboard-course-container" style={styles.container}>
      {/* Video Player Section */}
      <div style={styles.videoContainer}>
        <ReactPlayer width={"auto"} height={"auto"} style={{ aspectRatio: "3/2", flex: 1 }} url={currentLesson.src} />
      </div>

      {/* Sidebar Section */}
      <div style={styles.sidebar}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>Course Content</h2>
        <div style={{ marginTop: "3%" }}>
          {allLessons.map((sig, i) => {
            return <CoursePlayerLessonCollapse key={i} activeLessId={currentLesson.id} lessonTitle={sig.lesson_name} handleClick={handleLessonClick} lesson_assets={sig.lesson_assets} />;
          })}
        </div>
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100vh",
    overflow: "hidden",
  },
  videoContainer: {
    display: "flex",
    flex: 3,
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
  },
  videoPlayer: {
    borderRadius: "8px",
    border: "1px solid #ddd",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  sidebar: {
    flex: 1,
    borderLeft: "1px solid #ddd",
    padding: "10px",
    backgroundColor: "var(--section-color)",
  },
  lessonList: {
    listStyleType: "none",
    padding: 0,
  },
  lessonItem: {
    padding: "10px",

    margin: "5px 0",
    cursor: "pointer",
    borderRadius: "4px",
    transition: "background-color 0.3s",
  },
};

export default CourseVideoPlayer;
