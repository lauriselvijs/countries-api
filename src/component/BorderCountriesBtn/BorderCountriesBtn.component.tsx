import React from "react";
import "./BorderCountriesBtn.style.scss";
import { Link } from "react-router-dom";
import { IBorderCountries } from "../../type-definition/Country";

const BorderCountriesBtn = ({ borderCountries }: IBorderCountries) => {
  return (
    <div className="border-countries-btn-container">
      {borderCountries?.map(({ countryCode, name }, index: number) => (
        <Link key={index} to={`/country/${countryCode}`}>
          <button className="border-countries-btn-dark-mode">{name}</button>
        </Link>
      ))}
    </div>
  );
};

export default BorderCountriesBtn;
