import React, { useEffect, useState } from "react";
import "./Countries.style.scss";
import axios from "axios";
import CountryCard from "../CountryCard";

const Countries = () => {
  const [countries, setCountries]: any = useState([]);

  const getCountriesData = async () => {
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
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
      {countries.map((country: any, index: any) => (
        <CountryCard country={country} key={index} />
      ))}
    </section>
  );
};

export default Countries;
