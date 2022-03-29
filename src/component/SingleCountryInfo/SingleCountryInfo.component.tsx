import React, { useState, useEffect } from "react";
import "./SingleCountryInfo.style.scss";
import axios from "axios";
import BorderCountriesBtn from "../BorderCountriesBtn";
import { populationFormatting } from "../../util/Population/Population";

const SingleCountryInfo = () => {
  const [country, setCountry]: any = useState([]);

  const getCountryData = async () => {
    try {
      const { data } = await axios.get(
        "https://restcountries.com/v2/name/belgium"
      );
      return setCountry(data);
    } catch (error: any) {
      return error;
    }
  };

  useEffect(() => {
    getCountryData();
  }, []);

  return (
    <div className="single-country-info">
      <div className="flag">
        <img
          className="flag-img"
          src={country[0]?.flags?.png}
          alt={country[0]?.name + " flag"}
        />
      </div>
      <div className="country-info-container">
        <div className="country-name">{country[0]?.name}</div>
        <div className="country-info">
          <div className="country-info-left-section">
            <div className="native-name">
              <span className="native-name-text">Native Name: </span>
              {country[0]?.nativeName}
            </div>
            <div className="country-population">
              <span className="country-population-text">Population: </span>
              {populationFormatting(country[0]?.population)}
            </div>
            <div className="country-region">
              <span className="country-region-text">Region: </span>
              {country[0]?.region}
            </div>
            <div className="country-subregion">
              <span className="country-subregion-text">Sub Region: </span>
              {country[0]?.subregion}
            </div>
            <div className="country-capital">
              <span className="country-capital-text">Capital: </span>
              {country[0]?.capital}
            </div>
          </div>
          <div className="country-info-right-section">
            <div className="country-top-level-domain">
              <span className="country-top-level-domain-text">
                Top Level Domain:{" "}
              </span>
              {country[0]?.topLevelDomain[0]}
            </div>
            <div className="country-currencies">
              <span className="country-currencies-text">Currencies: </span>{" "}
              {country[0]?.currencies[0]?.name}
            </div>
            <div className="country-languages">
              <span className="country-languages-text">Languages: </span>
              {country[0]?.languages.map(({ name }: any, index: number) => (
                <span className="country-language" key={index}>
                  {name}
                  {country[0]?.languages.length !== index + 1 && ","}{" "}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-countries">
          <span className="border-countries-text">Border countries:</span>
          <BorderCountriesBtn borderCountries={country[0]?.borders} />
        </div>
      </div>
    </div>
  );
};

export default SingleCountryInfo;
