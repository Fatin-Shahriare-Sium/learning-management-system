import Image from "next/image";
import React from "react";

const Avatar = () => {
  let userInfoX = localStorage.getItem("userInfo");
  let userInfo = JSON.parse(userInfoX);
  function getInitials(name) {
    return `${name.split(" ")[0][0]}${name.split(" ")[1] ? name.split(" ")[1][0] : name.slice(-1)}`;
  }
  function generateBackground(name) {
    let hash = 0;
    let i;

    for (i = 0; i < name.length; i += 1) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    // name.charCodeAt() return an int between 0 and 65535
    // left shift (<<)  operator moves to left by number of specified
    // bites after <<. The whole for loop will create a color hash
    // based on username length
    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }
  return (
    <div className="avatar-wrapper" style={{ backgroundColor: generateBackground(userInfo.username), borderRadius: "50%", height: "30px", width: "30px" }}>
      <div>
        <p style={{ fontSize: "2rem", color: "white" }}>{getInitials(userInfo.username)}</p>
      </div>
    </div>
  );
};

export default Avatar;
