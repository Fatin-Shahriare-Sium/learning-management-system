"use client";
import { useAppProvider } from "@/context/appProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import MenuIcon from "../../assets/menuIcon.png";
import Link from "next/link";
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let { isLogin } = useAppProvider();
  const router = useRouter();
  if (!isLogin) {
    router.push("/login");
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    console.log(isLogin);
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        className="dashboard-sidebar"
        style={{
          width: isSidebarOpen ? "250px" : "0",
          transition: "width 0.3s",
          padding: isSidebarOpen ? "20px" : "0",
          boxSizing: "border-box",
        }}
      >
        {isSidebarOpen && (
          <div className="dashboard-sidebar__tabs">
            <Link href={"/dashboard/"}>
              <p>Dashboard</p>
            </Link>
            <Link href={"/dashboard/profile"}>
              <p>Profile</p>
            </Link>
            <Link href={`/dashboard/your-course/`}>
              <p>Courses</p>
            </Link>
            <Link href={"/dashboard/purchase-history"}>
              <p>Purchase History</p>
            </Link>
            <Link href={"/dashboard/change-password"}>
              <p>Change Password</p>
            </Link>
            <p>Logout</p>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, background: "var(--back-color)", padding: "20px" }}>
        <div>
          <Image onClick={toggleSidebar} width={20} height={20} alt="menu-icon" src={MenuIcon} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
