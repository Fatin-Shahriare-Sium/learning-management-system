"use client";
import InputBox from "@/components/inputBox";
import { useAppProvider } from "@/context/appProvider";
import UseSignUp from "@/hooks/useSignup";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  let [newUser, setNewUser] = useState({ username: "", nickname: "", email: "", password: "", conPassword: "" });
  const { isLogin } = useAppProvider();
  let tk = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTczMzI0OTIxNSwiZXhwIjoxNzM1ODQxMjE1fQ.DBW-wDLJVnXwQgqKG9rwev-qoPqqa2FwHJpMhFJY8wgZy23E";
  let mainTokenLength = 139;

  console.log("token tk", tk.slice(0, 139));

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
  let handleSignup = async () => {
    if (newUser.username == "" || newUser.nickname == "" || newUser.email == "") {
      notifyError();
    } else if (newUser.password !== newUser.conPassword) {
      toast("password does not match", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      let res = await UseSignUp({ username: newUser.username, nickename: newUser.nickname, email: newUser.email, password: newUser.password });
      toast(res.message);
    }
  };
  useEffect(() => {
    console.log(newUser);
    console.log("islogin", isLogin);
  }, [newUser]);
  return (
    <div style={{ width: "100%" }} className="signup-wrapper">
      <div style={{ width: "70%", margin: "auto" }} className="signup_wrapper-box">
        <ToastContainer style={{ fontSize: "2rem" }} />
        <InputBox handleInputBox={(value) => setNewUser({ ...newUser, username: value })} title="Name" placeholder="Your Name" type="text" />
        <InputBox handleInputBox={(value) => setNewUser({ ...newUser, nickname: value })} title="Nick Name" placeholder="nickname" type="text" />
        <InputBox handleInputBox={(value) => setNewUser({ ...newUser, email: value })} title="Email" placeholder="valid email" type="text" />
        <InputBox handleInputBox={(value) => setNewUser({ ...newUser, password: value })} title="Password" placeholder="password" type="password" />
        <InputBox handleInputBox={(value) => setNewUser({ ...newUser, conPassword: value })} title="Confrim Password" placeholder="confrim password" type="password" />
        <div className="signup_wrapper-btn">
          <button onClick={handleSignup}>SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
