import React from "react";
import "./HeaderWrapper.style.scss";
import { IWrapperProps } from "../../type-definition/Wrapper.d";
import { State } from "../../store/reducer";
import { useSelector } from "react-redux";

const HeaderWrapper = ({ children }: IWrapperProps) => {
  const darkMode = useSelector((state: State) => state.darkMode.darkMode);

  return (
    <header
      className={darkMode ? "header-wrapper-dark-mode" : "header-wrapper"}
    >
      {children}
    </header>
  );
};

export default HeaderWrapper;
