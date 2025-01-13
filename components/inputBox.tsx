import React from "react";
interface inputBox {
  title: string;
  placeholder: string;
  type: string;
  defaultValue: any;
  handleInputBox: () => any;
}
const InputBox = ({ title, placeholder, type, handleInputBox, defaultValue }: inputBox) => {
  return (
    <div className="inputbox-wrapper">
      <p>{title}</p>
      <input style={{ color: "white" }} type={type} defaultValue={defaultValue} onChange={(e) => handleInputBox(e.target.value)} placeholder={placeholder} />
    </div>
  );
};

export default InputBox;
