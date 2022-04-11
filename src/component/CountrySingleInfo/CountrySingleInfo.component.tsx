import React, { useEffect } from "react";
import "./CountrySingleInfo.style.scss";
import CountriesBorderBtn from "../CountriesBorderBtn";
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
import CountryRegion from "../CountryRegion";
import Loader from "../Loader/Loader.component";

const CountrySingleInfo = () => {
  const { borders } = useSelector(
    (state: State) => state.country.singleCountry
  );
  const { singleCountry, borderCountries } = useSelector(
    (state: State) => state.country
  );

  const loading = useSelector((state: State) => state.country.loading);
  const darkMode = useSelector((state: State) => state.darkMode.darkMode);
  const { cca3 } = useParams<string>();

  const dispatch = useDispatch();

  const { getBorderCountryNames, getSingleCountryData } = bindActionCreators(
    countryActions,
    dispatch
  );

  useEffect(() => {
    getSingleCountryData(cca3);
  }, [cca3]);

  useEffect(() => {
    getBorderCountryNames(borders);
  }, [borders]);

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
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="country-single-info">
            <CountryFlag
              flag={svg}
              countryName={name}
              className="country-single-flag-img"
            />
            <div
              className={
                darkMode
                  ? "country-info-container-dark-mode"
                  : "country-info-container"
              }
            >
              <CountryName name={name} />
              <div className="country-info">
                <div className="country-info-left-section">
                  <CountryNativeName nativeName={nativeName} />
                  <CountryPopulation population={population} />
                  <CountryRegion region={region} />
                  <CountrySubregion subregion={subregion} />
                  <CountryCapital capital={capital} />
                </div>
                <div className="country-info-right-section">
                  <CountryTopLevelDomain countryDomain={countryDomain} />
                  <CountryCurrency currencies={currencies} />
                  <CountryLanguage languages={languages} />
                </div>
              </div>
              <CountriesBorderBtn borderCountries={borderCountries} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CountrySingleInfo;
