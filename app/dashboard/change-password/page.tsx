"use client";
import { useAppProvider } from "@/context/appProvider";
import React, { useState } from "react";

const ChangePassword = () => {
  let { token } = useAppProvider();
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      const res = await fetch(`${process.env.NEXT_PUBLIC_starpi_url}/auth/change-password`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: oldPassword,
          password: password,
          passwordConfirmation: confirmPassword,
        }),
      });

      alert("Password successfully changed!");
      // Add logic to send the new password to the backend.
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
            Old Password
          </label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={(e) => setOldPassword(e.target.value)} style={{ flex: "1", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
            <button
              type="button"
              onClick={toggleShowPassword}
              style={{
                marginLeft: "5px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
                cursor: "pointer",
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
            New Password
          </label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={handlePasswordChange} style={{ flex: "1", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
            <button
              type="button"
              onClick={toggleShowPassword}
              style={{
                marginLeft: "5px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
                cursor: "pointer",
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="confirm-password" style={{ display: "block", marginBottom: "5px" }}>
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
