"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Test from "../assets/test.jpg";
import Avatar from "./avatar";
import { useAppProvider } from "@/context/appProvider";

const HomeNavbar = () => {
  let { isLogin } = useAppProvider();
  useEffect(() => {
    console.log("is login", isLogin);
  }, []);

  return (
    <div>
      <div className="homeNavbar_wrapper">
        <div>
          <p>LMS</p>
        </div>
        <div className="homeNavbar_wrapper-tabs">
          <Link href={"/"}>
            <p>Home</p>
          </Link>
          <Link href={"/course"}>
            <p>Courses</p>
          </Link>
          <Link href={""}>
            <p>About</p>
          </Link>

          {isLogin ? (
            <Link href={"/dashboard"}>
              <Avatar />
            </Link>
          ) : (
            <>
              <Link href={"/login"}>
                <p>Login</p>
              </Link>
              <Link href={"/signup"}>
                <p>Register</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
