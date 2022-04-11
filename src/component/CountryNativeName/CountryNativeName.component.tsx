import React from "react";
import "./CountryNativeName.style.scss";
import PropTypes from "prop-types";
import { ISingleCountry } from "../../type-definition/Country";

const CountryNativeName = ({
  nativeName,
}: {
  nativeName: ISingleCountry["nativeName"];
}) => {
  return (
    <div className="native-name">
      <span className="native-name-text">Native Name: </span>
      {nativeName}
    </div>
  );
};

CountryNativeName.propTypes = {
  nativeName: PropTypes.string,
};

CountryNativeName.defaultProps = {
  nativeName: "",
};

export default CountryNativeName;
