import SingleCoursePreviewCard from "@/components/single-course-preview-card";
import { NextRequest, NextResponse } from "next/server";

const CoursePage = async () => {
  console.log("NextRequest", NextRequest);

  console.log("process.env.NEXT_PUBLIC_starpi_url_media", process.env.NEXT_PUBLIC_starpi_url_media);

  let res = await fetch(`${process.env.NEXT_PUBLIC_starpi_url}/all-courses?populate[single_courses][populate]=*`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_strapi_api_token}`,
    },
  });
  let allCoursesRes = await res.json();
  console.log("res", allCoursesRes.data[0]);

  return (
    <div className="course-page_wrapper">
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", width: "90%", margin: "auto" }}>
        {allCoursesRes.data[0].single_courses.map((sig, i) => {
          return <SingleCoursePreviewCard key={i} documentID={sig.documentId} coursePrice={sig.course_price} courseRating={sig.course_rating} courseName={sig.course_name} courseThumbnail={sig.course_thumbnail.url} />;
        })}
        {/* <SingleCoursePreviewCard />
        <SingleCoursePreviewCard />
        <SingleCoursePreviewCard />
        <SingleCoursePreviewCard />
        <SingleCoursePreviewCard />
        <SingleCoursePreviewCard />
        <SingleCoursePreviewCard />
        <SingleCoursePreviewCard />
        <SingleCoursePreviewCard /> */}
      </div>
    </div>
  );
};

export default CoursePage;
