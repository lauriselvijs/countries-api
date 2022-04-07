import React from "react";
import "./CountrySingleWrapper.style.scss";
import { IWrapperProps } from "../../type-definition/Wrapper";

const CountrySingleWrapper = ({ children }: IWrapperProps) => {
  return <div className="single-country-wrapper">{children}</div>;
};

export default CountrySingleWrapper;
