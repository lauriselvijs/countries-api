import React from "react";
import "./BackBtn.style.scss";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BtnName } from "../../constant/BtnName";

const { BACK } = BtnName;

const BackBtn = () => {
  return (
    <Link to="/">
      <button className="back-button-dark-mode">
        <BsArrowLeft className="bs-arrow-left" />
        {BACK}
      </button>
    </Link>
  );
};

export default BackBtn;
