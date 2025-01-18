"use client";
import { useAppProvider } from "@/context/appProvider";
import React, { useState } from "react";

const ChangePassword = () => {
  let { token } = useAppProvider();
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState({ isOld: false, isNew: false });

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const toggleShowPassword = (isOldPass: boolean) => {
    if (isOldPass == true) {
      setShowPassword({ ...showPassword, isOld: !showPassword.isOld });
    } else {
      setShowPassword({ ...showPassword, isNew: !showPassword.isNew });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      const xyz = JSON.stringify({
        currentPassword: oldPassword,
        password: password,
        passwordConfirmation: confirmPassword,
      });
      const res = await fetch(`${process.env.NEXT_PUBLIC_starpi_url}/auth/change-password`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: xyz,
      });
      let changePassData = await res.json();
      if (changePassData.data) {
        alert("Password successfully changed!");
      } else {
        alert("Unable to update your password");
      }
      console.log("after password change", changePassData);

      // Add logic to send the new password to the backend.
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "700" }}>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px", fontSize: "1.3rem" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
            Old Password
          </label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input type={showPassword.isOld ? "text" : "password"} id="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} style={{ flex: "1", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
            <button
              type="button"
              onClick={() => toggleShowPassword(true)}
              style={{
                marginLeft: "5px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
                cursor: "pointer",
              }}
            >
              {showPassword.isOld ? "Hide" : "Show"}
            </button>
          </div>
          <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
            New Password
          </label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input type={showPassword.isNew ? "text" : "password"} id="password" value={password} onChange={handlePasswordChange} style={{ flex: "1", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
            <button
              type="button"
              onClick={() => toggleShowPassword(false)}
              style={{
                marginLeft: "5px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
                cursor: "pointer",
              }}
            >
              {showPassword.isNew ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="confirm-password" style={{ display: "block", marginBottom: "5px", fontSize: "1.3rem" }}>
            Confirm Password
          </label>
          <input type="password" id="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange} style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
