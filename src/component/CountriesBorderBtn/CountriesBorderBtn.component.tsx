import React from "react";
import "./CountriesBorderBtn.style.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../../store/reducer";
import { IBorderCountries } from "../../type-definition/Country";
import PropTypes from "prop-types";

const CountriesBorderBtn = ({ borderCountries }: IBorderCountries) => {
  const darkMode = useSelector((state: State) => state.darkMode.darkMode);

  return (
    <div className="border-countries">
      <span className="border-countries-text">Border countries:</span>
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
    </div>
  );
};

CountriesBorderBtn.propTypes = {
  borderCountries: PropTypes.arrayOf(
    PropTypes.shape({
      countryCode: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

CountriesBorderBtn.defaultProps = {
  borderCountries: [{ countryCode: "", name: "" }],
};

export default CountriesBorderBtn;
