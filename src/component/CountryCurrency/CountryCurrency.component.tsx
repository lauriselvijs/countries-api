import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store/reducer";
import "./CountryCurrency.style.scss";

const CountryCurrency = () => {
  const { currencies } = useSelector(
    (state: State) => state.country.singleCountry
  );

  return (
    <div className="country-currencies">
      <span className="country-currencies-text">Currencies: </span>{" "}
      {currencies?.map(({ name }: any, index: number) => (
        <span className="country-currencies-item" key={index}>
          {name}
          {currencies?.length !== index + 1 && ","}{" "}
        </span>
      ))}
    </div>
  );
};

export default CountryCurrency;
