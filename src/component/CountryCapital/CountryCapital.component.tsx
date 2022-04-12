import React from "react";
import "./CountryCapital.style.scss";
import PropTypes from "prop-types";
import { ICountryCard } from "../../type-definition/Country";

const CountryCapital = ({
  capital,
}: {
  capital: ICountryCard["country"]["capital"] | string;
}) => {
  return (
    <div className="country-capital">
      <span className="country-capital-text">Capital: </span>
      {capital}
    </div>
  );
};

CountryCapital.propTypes = {
  capital: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

CountryCapital.defaultProps = {
  capital: [""],
};

export default CountryCapital;
