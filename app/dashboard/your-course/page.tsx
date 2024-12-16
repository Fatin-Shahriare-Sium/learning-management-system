import EnrolledCoursePreviewCard from "@/components/enrolled-course-preview-card";
import React from "react";

const YourCourse = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
        <EnrolledCoursePreviewCard />
        <EnrolledCoursePreviewCard />
        <EnrolledCoursePreviewCard />
        <EnrolledCoursePreviewCard />
        <EnrolledCoursePreviewCard />
      </div>
    </div>
  );
};

export default YourCourse;
