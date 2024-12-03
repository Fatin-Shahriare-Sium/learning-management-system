"use client";
import InputBox from "@/components/inputBox";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const notifyError = () =>
    toast("Please,fill the fields", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const handleLogin = async () => {
    if (loginData.email == "" || loginData.password == "") {
      notifyError();
    } else {
      let data = {
        identifier: loginData.email,
        password: loginData.password,
      };

      let res = await fetch(`${process.env.NEXT_PUBLIC_starpi_url}/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let result = await res.json();
      if (result?.jwt) {
        Cookies.set("token", result.jwt, { secure: true, expires: 365 });

        toast("Successfully,login");
      } else {
        toast(result.error.message);
      }
    }
  };
  return (
    <div>
      <ToastContainer style={{ fontSize: "2rem" }} />
      <InputBox handleInputBox={(value) => setLoginData({ ...loginData, email: value })} title="Email" placeholder="Email" type="email" />
      <InputBox handleInputBox={(value) => setLoginData({ ...loginData, password: value })} title="Password" placeholder="Password" type="password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;