import React from "react";
import "./CountrySubregion.style.scss";
import PropTypes from "prop-types";
import { ISingleCountry } from "../../type-definition/Country";

const CountrySubregion = ({
  subregion,
}: {
  subregion: ISingleCountry["subregion"];
}) => {
  return (
    <div className="country-subregion">
      <span className="country-subregion-text">Sub Region: </span>
      {subregion}
    </div>
  );
};

CountrySubregion.propTypes = {
  subregion: PropTypes.string,
};

CountrySubregion.defaultProps = {
  subregion: "",
};

export default CountrySubregion;
