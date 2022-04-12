import React from "react";
import "./DarkModeBtn.style.scss";
import { BtnName } from "../../constant/BtnName";
// import { BsMoon, BsMoonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { darkModeActions } from "../../store/action";
import { State } from "../../store/reducer";
import { BsMoon } from "@react-icons/all-files/bs/BsMoon";
import { RiMoonFill } from "@react-icons/all-files/ri/RiMoonFill";
import { RiMoonLine } from "@react-icons/all-files/ri/RiMoonLine";

const { DARK_MODE } = BtnName;

const DarkModeBtn = () => {
  const dispatch = useDispatch();
  const { setDarkMode } = bindActionCreators(darkModeActions, dispatch);
  const darkMode = useSelector((state: State) => state.darkMode.darkMode);

  return (
    <div className="dark-mode-btn-container">
      {darkMode ? (
        <RiMoonFill className="moon-icon" />
      ) : (
        <RiMoonLine className="moon-icon-dark-mode" />
      )}
      <button
        onClick={setDarkMode}
        className={darkMode ? "dark-mode-btn-d-m" : "dark-mode-btn"}
      >
        {DARK_MODE}
      </button>
    </div>
  );
};

export default DarkModeBtn;
