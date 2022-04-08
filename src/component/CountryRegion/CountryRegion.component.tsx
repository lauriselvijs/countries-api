import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store/reducer";
import "./CountryRegion.style.scss";

const CountryRegion = () => {
  const { region } = useSelector((state: State) => state.country.singleCountry);

  return (
    <div className="country-region">
      <span className="country-region-text">Region: </span>
      {region}
    </div>
  );
};

export default CountryRegion;
