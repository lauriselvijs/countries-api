import React from "react";
import "./CountryRegion.style.scss";
import PropTypes from "prop-types";
import { ISingleCountry } from "../../type-definition/Country";

const CountryRegion = ({ region }: { region: ISingleCountry["region"] }) => {
  return (
    <div className="country-region">
      <span className="country-region-text">Region: </span>
      {region}
    </div>
  );
};

CountryRegion.propTypes = {
  region: PropTypes.string,
};

CountryRegion.defaultProps = {
  region: "",
};

export default CountryRegion;
