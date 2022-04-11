import React from "react";
import "./CountryLanguage.style.scss";
import PropTypes from "prop-types";
import { ISingleCountry } from "../../type-definition/Country";

const CountryLanguage = ({
  languages,
}: {
  languages: ISingleCountry["languages"];
}) => {
  return (
    <div className="country-languages">
      <span className="country-languages-text">Languages: </span>
      {languages?.map(({ name }, index: number) => (
        <span className="country-language" key={index}>
          {name}
          {languages?.length !== index + 1 && ","}{" "}
        </span>
      ))}
    </div>
  );
};

CountryLanguage.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};

CountryLanguage.defaultProps = {
  languages: [{ name: "" }],
};

export default CountryLanguage;
