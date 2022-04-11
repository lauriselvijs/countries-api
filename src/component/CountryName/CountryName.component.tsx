import React from "react";
import "./CountryName.style.scss";
import PropTypes from "prop-types";
import { ISingleCountry } from "../../type-definition/Country";

const CountryName = ({ name }: { name: ISingleCountry["name"] }) => {
  return <div className="country-name">{name}</div>;
};

CountryName.propTypes = {
  name: PropTypes.string,
};

CountryName.defaultProps = {
  name: "",
};

export default CountryName;
