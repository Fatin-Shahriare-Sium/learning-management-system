import React from "react";

const SingleCourse = async ({ params }) => {
  let { courseId } = params;

  let res = await fetch(`${process.env.NEXT_PUBLIC_starpi_url}/single-courses?filters[id][$in]=${courseId}&populate[course_thumbnail][populate]=*&populate[course_lessons][populate]=lesson_assets`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_strapi_api_token}`,
    },
  });

  let singleCouseRes = await res.json();
  console.log("singleCouseRes data", singleCouseRes);

  return <div>SingleCourseShower</div>;
};

export default SingleCourse;
