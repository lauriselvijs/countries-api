import React from "react";
import "./DarkModeBtn.style.scss";
import { BtnName } from "../../constant/BtnName";
import { BiMoon } from "react-icons/bi";

const { DARK_MODE } = BtnName;

const DarkModeBtn = () => {
  return (
    <div className="dark-mode-btn-container">
      <BiMoon />
      <button className="dark-mode-btn">{DARK_MODE}</button>
    </div>
  );
};

export default DarkModeBtn;
