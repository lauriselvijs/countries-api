import React from "react";
import "./BackBtn.style.scss";
import { Link } from "react-router-dom";
import { BtnName } from "../../constant/BtnName";
import { useSelector } from "react-redux";
import { State } from "../../store/reducer";
import { BsArrowLeft } from "@react-icons/all-files/bs/BsArrowLeft";

const { BACK } = BtnName;

const BackBtn = () => {
  const darkMode = useSelector((state: State) => state.darkMode.darkMode);

  return (
    <Link to="/">
      <button className={darkMode ? "back-button-dark-mode" : "back-button"}>
        <BsArrowLeft className="bs-arrow-left" />
        {BACK}
      </button>
    </Link>
  );
};

export default BackBtn;
