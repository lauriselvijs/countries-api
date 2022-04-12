import React from "react";
import "./CountriesInfo.style.scss";
import NavBarWrapper from "../../component/NavBarWrapper";
import CountrySearch from "../../component/CountrySearch";
import CountryContinentSelect from "../../component/CountryContinentSelect";
import Countries from "../../component/Countries";
import ClearSelect from "../../component/ClearSelect";

const CountriesInfo = () => {
  return (
    <main className="root">
      <NavBarWrapper>
        <CountrySearch />
        <ClearSelect />
        <CountryContinentSelect />
      </NavBarWrapper>
      <Countries />
    </main>
  );
};

export default CountriesInfo;
