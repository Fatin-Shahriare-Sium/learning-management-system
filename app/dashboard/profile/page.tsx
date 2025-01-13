"use client";
import InputBox from "@/components/inputBox";
import { useAppProvider } from "@/context/appProvider";
import React, { cache, useEffect, useState } from "react";

const ProfileEditor = () => {
  const { token } = useAppProvider();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    profilePicture: null,
  });

  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [picUnchanged, setPicUnchanged] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_starpi_url}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let { username, phoneNumber, profilePic } = data;
        if (profilePic) {
          setPreview(`${process.env.NEXT_PUBLIC_starpi_url_media}/${profilePic}`);
        }
        setFormData({ name: username, phone: phoneNumber, profilePicture: profilePic });
      });
  }, []);

  const handleChangeName = (value) => {
    setFormData({ ...formData, name: value });
  };
  const handleChangePhone = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file) {
      setFormData({ ...formData, profilePicture: file });
      setPreview(URL.createObjectURL(file));
      setPicUnchanged(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("phone", formData.phone);

    //upload pic start
    if (picUnchanged == false) {
      const formDataPicToSend = new FormData();
      formDataPicToSend.append("files", formData.profilePicture);
      const res = await fetch(`${process.env.NEXT_PUBLIC_starpi_url}/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataPicToSend,
      });
      const data = await res.json();

      console.log("data pic", data);
      const picUrl = data[0].url;
      formDataToSend.append("profilePicture", picUrl);

      //upload pic end
    } else {
      formDataToSend.append("profilePicture", formData.profilePicture);
    }

    try {
      let res = await fetch(`${process.env.NEXT_PUBLIC_starpi_url}/user/me`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });
      let data = await res.json();
      setLoading(false);
      console.log("data after update ", data);

      if (data) {
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
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>Edit Profile</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <InputBox title="Name" placeholder="your name" type="text" defaultValue={formData.name} handleInputBox={handleChangeName} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <InputBox title="Phone Number" placeholder="number" type="number" defaultValue={formData.phone} handleInputBox={handleChangePhone} />
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
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <button style={{ backgroundColor: "var(--section-color)", color: "white", padding: "1rem 2rem", border: "none" }} type="submit">
            Update Profile
          </button>
        )}
      </form>
    </div>
  );
};

export default ProfileEditor;
