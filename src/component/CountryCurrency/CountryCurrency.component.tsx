import React from "react";
import "./CountryCurrency.style.scss";
import PropTypes from "prop-types";
import { ISingleCountry } from "../../type-definition/Country";

const CountryCurrency = ({
  currencies,
}: {
  currencies: ISingleCountry["currencies"];
}) => {
  return (
    <div className="country-currencies">
      <span className="country-currencies-text">Currencies: </span>{" "}
      {currencies?.map(({ name }, index: number) => (
        <span className="country-currencies-item" key={index}>
          {name}
          {currencies?.length !== index + 1 && ","}{" "}
        </span>
      ))}
    </div>
  );
};

CountryCurrency.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};

CountryCurrency.defaultProps = {
  currencies: [{ name: "" }],
};

export default CountryCurrency;
