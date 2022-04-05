import React, { useEffect } from "react";
import "./Countries.style.scss";
import CountryCard from "../CountryCard";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/reducer";
import { bindActionCreators } from "redux";
import { countryActions } from "../../store/action";
import { ICountryCard } from "../../type-definition/Country";

const Countries = () => {
  const countries = useSelector((state: State) => state.country.countries);
  const dispatch = useDispatch();

  const { getCountryData } = bindActionCreators(countryActions, dispatch);

  useEffect(() => {
    countries.length === 0 && getCountryData();
  }, []);

  return (
    <section className="countries-container">
      {countries.map((country: ICountryCard["country"], index: number) => (
        <CountryCard country={country} key={index} />
      ))}
    </section>
  );
};

export default Countries;
