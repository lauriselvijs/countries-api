import React from "react";
import "./HeaderWrapper.style.scss";
import { IWrapperProps } from "../../type-definition/Wrapper.d";

const HeaderWrapper = ({ children }: IWrapperProps) => {
  return <header className="header-wrapper-dark-mode">{children}</header>;
};

export default HeaderWrapper;
