import React from "react";
import "./BackBtn.style.scss";
import { BsArrowLeft } from "react-icons/bs";

const BackBtn = () => {
  return (
    <button className="back-button">
      <BsArrowLeft className="bs-arrow-left" />
      Back
    </button>
  );
};

export default BackBtn;
