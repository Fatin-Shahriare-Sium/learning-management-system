"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1); // 1: Email Input, 2: OTP Verification, 3: Reset Password
  const [otp, setOtp] = useState("");
  const [otpId, setOtpId] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailSubmit = async () => {
    if (email) {
      // Trigger API to send OTP to the email
      try {
        let res = await fetch(`${process.env.NEXT_PUBLIC_starpi_url}/otps/generate?otpEmail=${email}`, {
          method: "GET",
        });
        const OTPData = await res.json();

        if (OTPData.isOTPGenerated) {
          setOtpId(OTPData.data.documentId);
          setStep(2);
          return toast("OTP has been sent to your email", {
            position: "top-center",
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          return toast("Try Again", {
            position: "top-center",
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            type: "error",
            theme: "light",
          });
        }
      } catch {
        return toast("Try Again", {
          position: "top-center",
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          type: "error",
          theme: "light",
        });
      }
    }
  };

  const handleOtpSubmit = async () => {
    if (otp) {
      // Verify OTP via API
      let res = await fetch(`${process.env.NEXT_PUBLIC_starpi_url}/otps/verify?OTPdocumentId=${otpId}&OTPcode=${otp}`);
      let afterVerify = await res.json();
      console.log(`Verifying OTP: ${otp}`, afterVerify);
      setStep(3);
    }
  };

  const handleResetPassword = () => {
    if (newPassword && newPassword === confirmPassword) {
      // Trigger API to reset the password
      console.log("Password reset successfully");
      alert("Password reset successfully!");
      setStep(1);
      setEmail("");
      setOtp("");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <ToastContainer style={{ fontSize: "2rem" }} />
      <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
        {step === 1 && (
          <div>
            <h2>Forgot Password</h2>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
            <button onClick={handleEmailSubmit} style={{ width: "100%", padding: "10px" }}>
              Send OTP
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Enter OTP</h2>
            <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
            <button onClick={handleOtpSubmit} style={{ width: "100%", padding: "10px" }}>
              Verify OTP
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2>Reset Password</h2>
            <input type="password" placeholder="Enter new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
            <input type="password" placeholder="Confirm new password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
            <button onClick={handleResetPassword} style={{ width: "100%", padding: "10px" }}>
              Reset Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
