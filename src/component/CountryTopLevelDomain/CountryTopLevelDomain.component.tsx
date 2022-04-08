import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store/reducer";
import "./CountryTopLevelDomain.style.scss";

const CountryTopLevelDomain = () => {
  const {
    topLevelDomain: [countryDomain],
  } = useSelector((state: State) => state.country?.singleCountry);

  return (
    <div className="country-top-level-domain">
      <span className="country-top-level-domain-text">Top Level Domain: </span>
      {countryDomain}
    </div>
  );
};

export default CountryTopLevelDomain;
