import React from "react";
import "./NavBarWrapper.style.scss";
import { IWrapperProps } from "../../type-definition/Wrapper";

const NavBarWrapper = ({ children }: IWrapperProps) => {
  return <section className="nav-bar-wrapper">{children}</section>;
};

export default NavBarWrapper;
