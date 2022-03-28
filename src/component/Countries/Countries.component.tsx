import React, { useEffect, useState } from "react";
import "./Countries.style.scss";
import axios from "axios";

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
      {countries.map(
        (
          {
            name: { common },
            population,
            region,
            capital,
            flags: { png },
          }: any,
          index: number
        ) => (
          <div key={index} className="countries-card">
            <img className="country-flag" src={png} alt={common + " flag"} />
            <div className="countries-card-contents">
              <div className="country-name">{common}</div>
              <div className="population">
                <span className="population-name">Population: </span>
                {population}
              </div>
              <div className="region">
                <span className="region-name">Region: </span>
                {region}
              </div>
              <div className="capital">
                <span className="capital-name">Capital: </span>
                {capital}
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Countries;
