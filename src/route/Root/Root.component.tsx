import React from "react";
import "./Root.style.scss";
import NavBarWrapper from "../../component/NavBarWrapper";
import SearchCountry from "../../component/SearchCountry";
import CountryContinentSelect from "../../component/CountryContinentSelect";
import Countries from "../../component/Countries";
import ClearSelect from "../../component/ClearSelect";

const Root = () => {
  return (
    <main className="root">
      <NavBarWrapper>
        <SearchCountry />
        <ClearSelect />
        <CountryContinentSelect />
      </NavBarWrapper>
      <Countries />
    </main>
  );
};

export default Root;
