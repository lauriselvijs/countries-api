import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store/reducer";
import "./CountrySubregion.style.scss";

const CountrySubregion = () => {
  const { subregion } = useSelector(
    (state: State) => state.country.singleCountry
  );

  return (
    <div className="country-subregion">
      <span className="country-subregion-text">Sub Region: </span>
      {subregion}
    </div>
  );
};

export default CountrySubregion;
