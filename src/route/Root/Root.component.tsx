import React from "react";
import "./Root.style.scss";
import NavBarWrapper from "../../component/NavBarWrapper";
import SearchCountry from "../../component/SearchCountry";
import CountryContinentSelect from "../../component/CountryContinentSelect";
import Countries from "../../component/Countries";
import ClearSelect from "../../component/ClearSelect";
import Loader from "../../component/Loader";
import { useSelector } from "react-redux";
import { State } from "../../store/reducer";

const Root = () => {
  const loading = useSelector((state: State) => state.country.loading);

  return (
    <main className="root">
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBarWrapper>
            <SearchCountry />
            <ClearSelect />
            <CountryContinentSelect />
          </NavBarWrapper>
          <Countries />
        </>
      )}
    </main>
  );
};

export default Root;
