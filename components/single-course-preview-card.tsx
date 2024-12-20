import Image from "next/image";
import CustomBtn from "./customBtn";

const SingleCoursePreviewCard = ({ courseName, courseThumbnail, coursePrice, courseRating, documentID }: { courseName: string; courseThumbnail: string; coursePrice: number; courseRating: number; documentID: string }) => {
  console.log(`${process.env.NEXT_PUBLIC_starpi_url_media}${courseThumbnail}`);
  console.log("single_coursesname", courseName);
  return (
    <div style={{ height: "max-content", width: "25vw", backgroundColor: "#222323", margin: "1% 2%" }} className="SingleCoursePreviewCard_wrapper">
      <div className="SingleCoursePreviewCard_wrapper-img">
        <Image style={{ width: "100%", height: "100%", objectFit: "contain" }} height={500} width={500} alt="good" src={`${process.env.NEXT_PUBLIC_starpi_url_media}/${courseThumbnail}`} />
      </div>
      <div style={{ padding: "1rem" }} className="SingleCoursePreviewCard_wrapper-details">
        <div>
          <p style={{ fontWeight: "bold" }}>{courseName}</p>
          <p>{courseRating} ⭐⭐⭐⭐⭐ (1234)</p>
          <p>{coursePrice}BDT</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1%" }}>
          <CustomBtn routerLink={`/course-view/${documentID}`} btnName="View" btnTextColor="green" btnColor="white" />
          <CustomBtn routerLink="" btnName="Enroll" btnTextColor="white" btnColor="#3bb2de" />
        </div>
      </div>
    </div>
  );
};

export default SingleCoursePreviewCard;
