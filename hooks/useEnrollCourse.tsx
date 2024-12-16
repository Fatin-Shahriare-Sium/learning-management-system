import { useAppProvider } from "@/context/appProvider";

const UseEnrollCourse = async ({ courseId }: { courseId: string }) => {
  const { token } = useAppProvider();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  let data = await fetch(`${process.env.NEXT_PUBLIC_starpi_url}/single-courses/enroll-course?courseId=${courseId}&&userDocId=${userInfo.documentId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("data of enroll course", data);
  return data;
};
export default UseEnrollCourse;
