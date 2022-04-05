import React from "react";
import { populationFormatting } from "../../util/Population/Population";
import "./CountryCard.style.scss";
import { Link } from "react-router-dom";
import { ICountryCard } from "../../type-definition/Country";

const CountryCard = ({
  country: {
    name: { common },
    cca3,
    population,
    region,
    capital,
    flags: { png },
  },
}: ICountryCard) => {
  return (
    <section className="countries-card-dark-mode">
      <Link to={`/country/${cca3}`}>
        <img className="country-flag" src={png} alt={common + " flag"} />
      </Link>
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
    </section>
  );
};

export default CountryCard;
