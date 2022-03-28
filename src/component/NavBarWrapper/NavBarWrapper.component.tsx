import React from "react";
import "./NavBarWrapper.style.scss";
import Wrapper from "../../type-definition/Wrapper";

const NavBarWrapper = ({ children }: Wrapper.WrapperProps) => {
  return <section className="nav-bar-wrapper">{children}</section>;
};

export default NavBarWrapper;
