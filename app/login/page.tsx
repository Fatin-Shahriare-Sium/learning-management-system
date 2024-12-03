"use client";
import InputBox from "@/components/inputBox";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const handleLogin = () => {
    if (loginData.email == "" || loginData.password == "") {
      notifyError();
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
