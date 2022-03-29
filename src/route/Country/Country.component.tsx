import React from "react";
import "./Country.style.scss";
import BackBtn from "../../component/BackBtn";
import SingleCountryInfo from "../../component/SingleCountryInfo";
import SingleCountryWrapper from "../../component/SingleCountryWrapper";
import NavBarWrapper from "../../component/NavBarWrapper";

const Country = () => {
  return (
    <main className="country">
      <NavBarWrapper>
        <BackBtn />
      </NavBarWrapper>
      <SingleCountryWrapper>
        <SingleCountryInfo />
      </SingleCountryWrapper>
    </main>
  );
};

export default Country;
