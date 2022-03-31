import React, { useEffect, useState } from "react";
import "./BorderCountriesBtn.style.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const BorderCountriesBtn = ({ borderCountries }: any) => {
  const { cca3 } = useParams();

  useEffect(() => {}, [cca3]);

  return (
    <div className="border-countries-btn-container">
      {borderCountries.map(({ countryCode, name }: any, index: any) => (
        <Link key={index} to={`/country/${countryCode}`}>
          <button className="border-countries-btn">{name}</button>
        </Link>
      ))}
    </div>
  );
};

export default BorderCountriesBtn;
