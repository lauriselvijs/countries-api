import React from "react";
import { populationFormatting } from "../../util/Population/Population";
import "./CountryCard.style.scss";

const CountryCard = ({
  country: {
    name: { common },
    population,
    region,
    capital,
    flags: { png },
  },
}: any) => {
  return (
    <div className="countries-card">
      <img className="country-flag" src={png} alt={common + " flag"} />
      <div className="countries-card-contents">
        <div className="country-name">{common}</div>
        <div className="population">
          <span className="population-name">Population: </span>
          {populationFormatting(population)}
        </div>
        <div className="region">
          <span className="region-name">Region: </span>
          {region}
        </div>
        <div className="capital">
          <span className="capital-name">Capital: </span>
          {capital}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
