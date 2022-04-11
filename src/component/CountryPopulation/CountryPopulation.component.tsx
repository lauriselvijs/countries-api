import React from "react";
import { populationFormatting } from "../../util/Population/Population";
import "./CountryPopulation.style.scss";
import PropTypes from "prop-types";
import { ISingleCountry } from "../../type-definition/Country";

const CountryPopulation = ({
  population,
}: {
  population: ISingleCountry["population"];
}) => {
  return (
    <div className="country-population">
      <span className="country-population-text">Population: </span>
      {populationFormatting(population)}
    </div>
  );
};

CountryPopulation.propTypes = {
  population: PropTypes.number,
};

CountryPopulation.defaultProps = {
  population: 0,
};

export default CountryPopulation;
