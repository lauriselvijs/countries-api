import React from "react";
import "./NavBarWrapper.style.scss";
import { WrapperProps } from "../../type-definition/Wrapper.d";

const NavBarWrapper = ({ children }: WrapperProps) => {
  return <section className="nav-bar-wrapper">{children}</section>;
};

export default NavBarWrapper;
