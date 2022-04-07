import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store/reducer";
import "./CountryCapital.style.scss";

const CountryCapital = () => {
  const { capital } = useSelector(
    (state: State) => state.country.singleCountry
  );

  return (
    <div className="country-capital">
      <span className="country-capital-text">Capital: </span>
      {capital}
    </div>
  );
};

export default CountryCapital;
