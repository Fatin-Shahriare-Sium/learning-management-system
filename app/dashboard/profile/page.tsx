"use client";
import InputBox from "@/components/inputBox";
import React, { useState } from "react";

const ProfileEditor = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    profilePicture: null,
  });

  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

  const handleChangeName = (value) => {
    setFormData({ ...formData, name: value });
  };
  const handleChangePhone = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profilePicture: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("phone", formData.phone);
    if (formData.profilePicture) {
      formDataToSend.append("profilePicture", formData.profilePicture);
    }

    try {
      const response = await fetch("/api/update-profile", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setMessage("Profile updated successfully!");
      } else {
        setMessage("Failed to update profile. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", color: "white" }}>
      <h2>Edit Profile</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <InputBox title="Name" placeholder="your name" type="text" handleInputBox={handleChangeName} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <InputBox title="Phone Number" placeholder="number" type="number" handleInputBox={handleChangePhone} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ fontSize: "2rem" }}>
            Profile Picture:
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </label>
        </div>
        {preview && (
          <div style={{ marginBottom: "1rem" }}>
            <p>Profile Picture Preview:</p>
            <img src={preview} alt="Profile Preview" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
          </div>
        )}
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfileEditor;
