import React, { useEffect, UIEvent } from "react";
import NavBarWrapper from "../../component/NavBarWrapper";
import CountrySearch from "../../component/CountrySearch";
import CountryContinentSelect from "../../component/CountryContinentSelect";
import Countries from "../../component/Countries";
import ClearSelect from "../../component/ClearSelect";

const CountriesInfo = () => {
  return (
    <>
      <NavBarWrapper>
        <CountrySearch />
        <ClearSelect />
        <CountryContinentSelect />
      </NavBarWrapper>
      <Countries />
    </>
  );
};

export default CountriesInfo;
