import React from "react";
import "./Country.style.scss";
import BackBtn from "../../component/BackBtn";
import CountrySingleInfo from "../../component/CountrySingleInfo";
import NavBarWrapper from "../../component/NavBarWrapper";

const Country = () => {
  return (
    <main className="country">
      <NavBarWrapper>
        <BackBtn />
      </NavBarWrapper>
      <CountrySingleInfo />
    </main>
  );
};

export default Country;
