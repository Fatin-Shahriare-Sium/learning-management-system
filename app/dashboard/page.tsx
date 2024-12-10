"use client";
import { useAppProvider } from "@/context/appProvider";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { NextRequest, NextResponse } from "next/server";
const DashboardHomePage = () => {
  let { isLogin } = useAppProvider();
  const router = useRouter();
  if (!isLogin) {
    router.push("/login");
  }
  console.log("NextRequest", NextRequest);
  useEffect(() => {
    console.log(isLogin);
  }, []);
  return <div>DashboardHomePage</div>;
};

export default DashboardHomePage;
