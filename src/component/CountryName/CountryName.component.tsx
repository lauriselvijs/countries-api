import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store/reducer";
import "./CountryName.style.scss";

const CountryName = () => {
  const { name } = useSelector((state: State) => state.country.singleCountry);
  return <div className="country-name">{name}</div>;
};

export default CountryName;
