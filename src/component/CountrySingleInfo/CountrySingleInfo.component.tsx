import React, { useEffect } from "react";
import "./CountrySingleInfo.style.scss";
import CountriesBorderBtn from "../CountriesBorderBtn";
import { populationFormatting } from "../../util/Population/Population";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/reducer";
import { bindActionCreators } from "redux";
import { countryActions } from "../../store/action";
import { useParams } from "react-router-dom";
import CountryFlag from "../CountryFlag";
import CountryName from "../CountryName";
import CountryNativeName from "../CountryNativeName";
import CountryPopulation from "../CountryPopulation";
import CountrySubregion from "../CountrySubregion";
import CountryCapital from "../CountryCapital";
import CountryCurrency from "../CountryCurrency";
import CountryTopLevelDomain from "../CountryTopLevelDomain";
import CountryLanguage from "../CountryLanguage";

const CountrySingleInfo = () => {
  const { singleCountry, borderCountries } = useSelector(
    (state: State) => state.country
  );

  const { cca3 } = useParams<string>();

  const darkMode = useSelector((state: State) => state.darkMode.darkMode);

  const dispatch = useDispatch();

  const { getBorderCountryNames, getSingleCountryData } = bindActionCreators(
    countryActions,
    dispatch
  );

  useEffect(() => {
    getSingleCountryData(cca3);
  }, [cca3]);

  useEffect(() => {
    const { borders } = singleCountry;

    getBorderCountryNames(borders);
  }, [singleCountry]);

  const {
    flags: { svg },
    nativeName,
    name,
    population,
    region,
    subregion,
    capital,
    topLevelDomain: [countryDomain],
    languages,
    currencies,
  } = singleCountry;

  return (
    <div className="country-single-info">
      <div className="flag">
        <img className="flag-img" src={svg} alt={name + " flag"} />
      </div>
      <div
        className={
          darkMode
            ? "country-info-container-dark-mode"
            : "country-info-container"
        }
      >
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
          <CountriesBorderBtn borderCountries={borderCountries} />
        </div>
      </div>
    </div>
  );
};

export default CountrySingleInfo;
