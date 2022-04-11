import React from "react";
import "./CountryTopLevelDomain.style.scss";
import PropTypes from "prop-types";

const CountryTopLevelDomain = ({
  countryDomain,
}: {
  countryDomain: string;
}) => {
  return (
    <div className="country-top-level-domain">
      <span className="country-top-level-domain-text">Top Level Domain: </span>
      {countryDomain}
    </div>
  );
};

CountryTopLevelDomain.propTypes = {
  countryDomain: PropTypes.string,
};

CountryTopLevelDomain.defaultProps = {
  countryDomain: "",
};

export default CountryTopLevelDomain;
