import React, { useState, useEffect } from "react";
import "./SingleCountryInfo.style.scss";
import axios from "axios";
import BorderCountriesBtn from "../BorderCountriesBtn";
import { populationFormatting } from "../../util/Population/Population";
import { CountryAPI } from "../../constant/CountryAPI";
import { useParams } from "react-router-dom";

const { FIND_COUNTRY_BY_COUNTRY_CODE_URL } = CountryAPI;

const SingleCountryInfo = () => {
  const [country, setCountry]: any = useState([]);
  const [borderCountries, setBorderCountries]: any = useState([]);
  let { cca3 }: any = useParams();

  const getCountryAndBorderData = async () => {
    const data = await getCountryData();

    setCountry([data]);

    const { borders } = data;

    borders.forEach(async (countryCode: string) => {
      const {
        data: { name },
      }: any = await axios.get(
        `${FIND_COUNTRY_BY_COUNTRY_CODE_URL}${countryCode}`
      );

      setBorderCountries((prevState: any) => [
        ...prevState,
        {
          name,
          countryCode,
        },
      ]);
    });
  };

  const getCountryData = async () => {
    try {
      const { data } = await axios.get(
        `${FIND_COUNTRY_BY_COUNTRY_CODE_URL}${cca3}`
      );

      return data;
    } catch (error: any) {
      return error;
    }
  };

  useEffect(() => {
    getCountryAndBorderData();
  }, []);

  return (
    <div className="single-country-info">
      <div className="flag">
        <img
          className="flag-img"
          src={country[0]?.flags.svg}
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
          <BorderCountriesBtn borderCountries={borderCountries} />
        </div>
      </div>
    </div>
  );
};

export default SingleCountryInfo;
