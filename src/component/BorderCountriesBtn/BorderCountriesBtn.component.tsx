import React from "react";
import "./BorderCountriesBtn.style.scss";
import { Link } from "react-router-dom";
import { IBorderCountries } from "../../type-definition/Country";
import { useSelector } from "react-redux";
import { State } from "../../store/reducer";

const BorderCountriesBtn = ({ borderCountries }: IBorderCountries) => {
  const darkMode = useSelector((state: State) => state.darkMode.darkMode);

  return (
    <div className="border-countries-btn-container">
      {borderCountries?.map(({ countryCode, name }, index: number) => (
        <Link key={index} to={`/country/${countryCode}`}>
          <button
            className={
              darkMode
                ? "border-countries-btn-dark-mode"
                : "border-countries-btn"
            }
          >
            {name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default BorderCountriesBtn;
