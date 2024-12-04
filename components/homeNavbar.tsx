import Link from "next/link";
import React from "react";

const HomeNavbar = () => {
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
          <Link href={"/login"}>
            <p>Login</p>
          </Link>
          <Link href={"/signup"}>
            <p>Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
