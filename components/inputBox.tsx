import React from "react";
interface inputBox {
  title: string;
  placeholder: string;
  type: string;
  handleInputBox: (any) => any;
}
const InputBox = ({ title, placeholder, type, handleInputBox }: inputBox) => {
  return (
    <div className="inputbox-wrapper">
      <p>{title}</p>
      <input type={type} onChange={(e) => handleInputBox(e.target.value)} placeholder={placeholder} />
    </div>
  );
};

export default InputBox;
