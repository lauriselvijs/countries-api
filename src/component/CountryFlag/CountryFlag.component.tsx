import React from "react";
import "./CountryFlag.style.scss";
import PropTypes from "prop-types";

const CountryFlag = ({
  flag,
  countryName,
  className,
}: {
  flag: string;
  countryName: string;
  className?: string;
}) => {
  return <img className={className} src={flag} alt={countryName + " flag"} />;
};

CountryFlag.propTypes = {
  flag: PropTypes.string,
  countryName: PropTypes.string,
  className: PropTypes.string,
};

CountryFlag.defaultProps = {
  flag: "",
  countryName: "",
  className: "",
};

export default CountryFlag;
