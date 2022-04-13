import React from "react";
import "./CountryCard.style.scss";
import { Link } from "react-router-dom";
import { ICountryCard } from "../../type-definition/Country";
import { State } from "../../store/reducer";
import { useSelector } from "react-redux";
import CountryFlag from "../CountryFlag";
import CountryName from "../CountryName";
import CountryPopulation from "../CountryPopulation";
import CountryRegion from "../CountryRegion";
import CountryCapital from "../CountryCapital";
import { useDispatch } from "react-redux";
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

  const { clearSingleCountryState } = bindActionCreators(
    countryActions,
    dispatch
  );

  const onCardClick = () => {
    clearSingleCountryState();
  };

  return (
    <Link to={`/country/${countryCode}`}>
      <div
        className={darkMode ? "countries-card-dark-mode" : "countries-card"}
        onClick={onCardClick}
      >
        <CountryFlag countryName={common} flag={png} />
        <div className="countries-card-contents">
          <CountryName name={common} />
          <CountryPopulation population={population} />
          <CountryRegion region={region} />
          <CountryCapital capital={capital} />
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
