"use client";
import { useAppProvider } from "@/context/appProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import MenuIcon from "../../assets/menuIcon.png";
const DashboardLayout = ({ children }: { children: ReactNode }) => {
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
          overflow: "hidden",
          padding: isSidebarOpen ? "20px" : "0",
          boxSizing: "border-box",
        }}
      >
        {isSidebarOpen && (
          <div className="dashboard-sidebar__tabs">
            <p>Dashboard</p>
            <p>Profile</p>
            <p>Settings</p>
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
