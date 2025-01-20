import { redirect } from "next/navigation";
import Cookies from "js-cookie";
export default function useLogout() {
  const logout = async () => {
    await localStorage.removeItem("userInfo");
    Cookies.remove("token");
    redirect("/");
  };

  return { logout };
}
