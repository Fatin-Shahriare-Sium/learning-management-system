import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Test from "../../../../assets/test.jpg";
import CustomBtn from "@/components/customBtn";
import CustomCollapse from "@/components/collapse";
import Player from "next-video/player";
import SingleCourseLessonCollapse from "@/components/single-course-lession-collapse";
import VideoPlayer from "@/components/videoPlayer";
const SingleCourse = async ({ params }) => {
  let { courseId } = await params;
  let res = await fetch(`${process.env.NEXT_PUBLIC_starpi_url}/single-courses?filters[documentId][$eqi]=${courseId}&populate[course_thumbnail][populate]=*&populate[course_lessons][populate]=lesson_assets`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_strapi_api_token}`,
    },
  });

  let singleCouseRes = await res.json();
  console.log("singleCouseRes data", singleCouseRes.data[0].course_introVideo);
  const content: BlocksContent = singleCouseRes.data[0].course_description;
  return (
    <div style={{ width: "90%", margin: "auto" }} className="course-details__wrapper">
      <div className="course-details__header">
        <div style={{ maxWidth: "400px" }}>
          <p className="course-details__title">{singleCouseRes.data[0].course_name}</p>
          <div className="course-details__header-course-metadata">
            <CustomBtn btnName="Get Started" btnColor="white" btnTextColor="black" />
            <p>4.5 ⭐⭐⭐⭐⭐ </p>
            <p>12152 Ratings</p>
            <p>12323 Students</p>
          </div>
        </div>
        <div>
          <Image alt="tesxt" src={`${process.env.NEXT_PUBLIC_starpi_url_media}/${singleCouseRes.data[0].course_thumbnail.url}`} height={500} width={500} style={{ height: "100%", width: "100%" }} />
        </div>
      </div>

      <div className="course-details__body">
        <div style={{ width: "70%" }} className="course-details__body-left-column">
          <div className="course-details__body-description">
            <CustomCollapse>
              <BlocksRenderer content={content} />
            </CustomCollapse>
          </div>
          <div className="course-details__body-lessons">
            <p style={{ fontSize: "2rem", fontWeight: "700" }}>Course Content</p>
            {singleCouseRes.data[0].course_lessons.map((sig, i) => {
              return <SingleCourseLessonCollapse key={i} lessonTitle={sig.lesson_name} lesson_assets={sig.lesson_assets} />;
            })}
          </div>
        </div>
        <div className="course-details__body-right-column">
          <VideoPlayer url={singleCouseRes.data[0].course_introVideo} />
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
