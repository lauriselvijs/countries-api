import React from "react";
import "./SingleCountryWrapper.style.scss";
import { WrapperProps } from "../../type-definition/Wrapper";

const SingleCountryWrapper = ({ children }: WrapperProps) => {
  return <div className="single-country-wrapper">{children}</div>;
};

export default SingleCountryWrapper;
