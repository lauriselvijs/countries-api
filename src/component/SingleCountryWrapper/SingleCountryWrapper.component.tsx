import React from "react";
import "./SingleCountryWrapper.style.scss";
import { IWrapperProps } from "../../type-definition/Wrapper";

const SingleCountryWrapper = ({ children }: IWrapperProps) => {
  return <div className="single-country-wrapper">{children}</div>;
};

export default SingleCountryWrapper;
