import React from "react";
import "./DarkModeBtn.style.scss";
import { BtnName } from "../../constant/BtnName";
import { BsMoon, BsMoonFill } from "react-icons/bs";

const { DARK_MODE } = BtnName;

const DarkModeBtn = () => {
  return (
    <div className="dark-mode-btn-container">
      <BsMoonFill className="moon-icon" />
      <button className="dark-mode-btn-d-m">{DARK_MODE}</button>
    </div>
  );
};

export default DarkModeBtn;
