import React from "react";
import { populationFormatting } from "../../util/Population/Population";
import "./CountryCard.style.scss";
import { Link, useParams } from "react-router-dom";
import { ICountryCard } from "../../type-definition/Country";
import { State } from "../../store/reducer";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { countryActions } from "../../store/action";

const CountryCard = ({
  country: {
    name: { common },
    cca3: countryCode,
    population,
    region,
    capital,
    flags: { png },
  },
}: ICountryCard) => {
  const darkMode = useSelector((state: State) => state.darkMode.darkMode);

  const dispatch = useDispatch();

  const { getSingleCountryData } = bindActionCreators(countryActions, dispatch);

  const onCardClick = () => {
    getSingleCountryData(countryCode);
  };

  return (
    <Link to={`/country/${countryCode}`} onClick={onCardClick}>
      <section
        className={darkMode ? "countries-card-dark-mode" : "countries-card"}
      >
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
      </section>
    </Link>
  );
};

export default CountryCard;
