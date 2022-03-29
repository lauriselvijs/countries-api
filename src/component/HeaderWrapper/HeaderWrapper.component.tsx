import React from "react";
import "./HeaderWrapper.style.scss";
import { WrapperProps } from "../../type-definition/Wrapper.d";

const HeaderWrapper = ({ children }: WrapperProps) => {
  return <header className="header-wrapper">{children}</header>;
};

export default HeaderWrapper;
