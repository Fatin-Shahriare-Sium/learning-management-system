import { useRouter } from "next/navigation";

export default function useLogout() {
  let router = useRouter();
  const logout = async () => {
    await localStorage.removeItem("userInfo");
    await localStorage.removeItem("tokenx");
    router.push("/");
  };

  return { logout };
}
