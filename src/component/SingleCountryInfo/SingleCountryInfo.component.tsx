import React, { useState, useEffect } from "react";
import "./SingleCountryInfo.style.scss";
import axios from "axios";
import BorderCountriesBtn from "../BorderCountriesBtn";
import { populationFormatting } from "../../util/Population/Population";
import { CountryAPI } from "../../constant/CountryAPI";
import { useParams } from "react-router-dom";
import {
  IBorderCountries,
  ICountry,
  ICountryState,
} from "../../type-definition/Country";

const { FIND_COUNTRY_BY_COUNTRY_CODE_URL } = CountryAPI;

const SingleCountryInfo = () => {
  const [country, setCountry] = useState<Partial<ICountryState>>({});
  const [borderCountries, setBorderCountries] = useState<
    IBorderCountries["borderCountries"]
  >([]);
  let { cca3 } = useParams<string>();

  console.log(borderCountries);

  const getCountryAndBorderData = async () => {
    const {
      flags: { svg },
      nativeName,
      name,
      population,
      region,
      subregion,
      capital,
      topLevelDomain: [countryDomain],
      currencies,
      languages,
      borders,
    }: ICountry = await getCountryData();

    setCountry({
      flag: svg,
      nativeName,
      population,
      region,
      name,
      subregion,
      capital,
      countryDomain: [countryDomain],
      languages,
      currencies,
    });

    borders?.forEach(async (countryCode: string) => {
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
    setBorderCountries([]);
    getCountryAndBorderData();
  }, [cca3]);

  const {
    flag,
    nativeName,
    name,
    population,
    region,
    subregion,
    capital,
    countryDomain,
    languages,
    currencies,
  } = country;

  return (
    <div className="single-country-info">
      <div className="flag">
        <img className="flag-img" src={flag} alt={name + " flag"} />
      </div>
      <div className="country-info-container">
        <div className="country-name">{name}</div>
        <div className="country-info">
          <div className="country-info-left-section">
            <div className="native-name">
              <span className="native-name-text">Native Name: </span>
              {nativeName}
            </div>
            <div className="country-population">
              <span className="country-population-text">Population: </span>
              {populationFormatting(population)}
            </div>
            <div className="country-region">
              <span className="country-region-text">Region: </span>
              {region}
            </div>
            <div className="country-subregion">
              <span className="country-subregion-text">Sub Region: </span>
              {subregion}
            </div>
            <div className="country-capital">
              <span className="country-capital-text">Capital: </span>
              {capital}
            </div>
          </div>
          <div className="country-info-right-section">
            <div className="country-top-level-domain">
              <span className="country-top-level-domain-text">
                Top Level Domain:{" "}
              </span>
              {countryDomain}
            </div>
            <div className="country-currencies">
              <span className="country-currencies-text">Currencies: </span>{" "}
              {currencies?.map(({ name }: any, index: number) => (
                <span className="country-currencies" key={index}>
                  {name}
                  {currencies?.length !== index + 1 && ","}{" "}
                </span>
              ))}
            </div>
            <div className="country-languages">
              <span className="country-languages-text">Languages: </span>
              {languages?.map(({ name }: any, index: number) => (
                <span className="country-language" key={index}>
                  {name}
                  {languages?.length !== index + 1 && ","}{" "}
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
