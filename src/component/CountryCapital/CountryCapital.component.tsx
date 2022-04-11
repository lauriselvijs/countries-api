import React from "react";
import "./CountryCapital.style.scss";
import PropTypes from "prop-types";
import { ISingleCountry } from "../../type-definition/Country";

const CountryCapital = ({
  capital,
}: {
  capital: ISingleCountry["capital"];
}) => {
  return (
    <div className="country-capital">
      <span className="country-capital-text">Capital: </span>
      {capital}
    </div>
  );
};

CountryCapital.propTypes = {
  capital: PropTypes.string,
};

CountryCapital.defaultProps = {
  capital: "",
};

export default CountryCapital;
