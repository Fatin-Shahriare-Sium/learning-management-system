const SingleEnrolledCourseViewer = async ({ params }: { params: { courseId: string } }) => {
  const { courseId } = await params;
  let data = await fetch(`${process.env.NEXT_PUBLIC_starpi_url}/single-courses/${courseId}?populate[course_lessons][populate]=*`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_strapi_api_token}`,
      "Content-Type": "application/json",
    },
  });

  return <div>SingleEnrolledCourseViewer:{params.courseId}</div>;
};

export default SingleEnrolledCourseViewer;
