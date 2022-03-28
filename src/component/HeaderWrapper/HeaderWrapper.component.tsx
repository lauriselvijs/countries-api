import React from "react";
import "./HeaderWrapper.style.scss";
import Wrapper from "../../type-definition/Wrapper";

const HeaderWrapper = ({ children }: Wrapper.WrapperProps) => {
  return <header className="header-wrapper">{children}</header>;
};

export default HeaderWrapper;
