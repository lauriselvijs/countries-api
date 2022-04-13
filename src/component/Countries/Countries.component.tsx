import React, { useEffect } from "react";
import "./Countries.style.scss";
import CountryCard from "../CountryCard";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/reducer";
import { bindActionCreators } from "redux";
import { countryActions } from "../../store/action";
import { ICountryCard } from "../../type-definition/Country";
import Loader from "../Loader";

const Countries = () => {
  const countries = useSelector((state: State) => state.country.countries);
  const loading = useSelector((state: State) => state.country.loading);

  const dispatch = useDispatch();

  const { getCountryData } = bindActionCreators(countryActions, dispatch);

  useEffect(() => {
    countries.length === 0 && getCountryData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="countries-container">
            {countries.map(
              (country: ICountryCard["country"], index: number) => (
                <CountryCard country={country} key={index} />
              )
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Countries;
