import React, { useEffect, useState } from "react";
import "./Countries.style.scss";
import axios from "axios";
import CountryCard from "../CountryCard";
import { CountryAPI } from "../../constant/CountryAPI";
import { ICountryCard } from "../../type-definition/Country";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/reducer";

const { GET_ALL_COUNTRY_DATA_URL } = CountryAPI;

const Countries = () => {
  const [countries, setCountries] = useState<ICountryCard[]>([]);

  const countryData = useSelector((state: State) => state.country.countryData);
  const dispatch = useDispatch();

  const getCountriesData = async () => {
    try {
      const { data } = await axios.get(GET_ALL_COUNTRY_DATA_URL);
      return setCountries(data);
    } catch (error: any) {
      return error;
    }
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <section className="countries-container">
      {countries.map((country: any, index: number) => (
        <CountryCard country={country} key={index} />
      ))}
    </section>
  );
};

export default Countries;
