import React from "react";
import "./NavBarWrapper.style.scss";
import { IWrapperProps } from "../../type-definition/Wrapper";

const NavBarWrapper = ({ children }: IWrapperProps) => {
  return <div className="nav-bar-wrapper">{children}</div>;
};

export default NavBarWrapper;
