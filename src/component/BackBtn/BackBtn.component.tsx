import React from "react";
import "./BackBtn.style.scss";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const BackBtn = () => {
  return (
    <Link to="/">
      <button className="back-button">
        <BsArrowLeft className="bs-arrow-left" />
        Back
      </button>
    </Link>
  );
};

export default BackBtn;
