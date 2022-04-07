import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store/reducer";
import { populationFormatting } from "../../util/Population/Population";
import "./CountryPopulation.style.scss";

const CountryPopulation = () => {
  const { population } = useSelector(
    (state: State) => state.country.singleCountry
  );

  return (
    <div className="country-population">
      <span className="country-population-text">Population: </span>
      {populationFormatting(population)}
    </div>
  );
};

export default CountryPopulation;
