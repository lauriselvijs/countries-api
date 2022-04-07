import React from "react";
import "./CountryInfo.style.scss";
import NavBarWrapper from "../../component/NavBarWrapper";
import CountrySearch from "../../component/CountrySearch";
import CountryContinentSelect from "../../component/CountryContinentSelect";
import Countries from "../../component/Countries";
import ClearSelect from "../../component/ClearSelect";
import Loader from "../../component/Loader";
import { useSelector } from "react-redux";
import { State } from "../../store/reducer";
import { Outlet } from "react-router-dom";

const CountryInfo = () => {
  const loading = useSelector((state: State) => state.country.loading);

  return (
    <main className="root">
      <NavBarWrapper>
        <CountrySearch />
        <ClearSelect />
        <CountryContinentSelect />
      </NavBarWrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Countries />
        </>
      )}
      <Outlet />
    </main>
  );
};

export default CountryInfo;
