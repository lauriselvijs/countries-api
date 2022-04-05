import React from "react";
import "./Country.style.scss";
import BackBtn from "../../component/BackBtn";
import SingleCountryInfo from "../../component/SingleCountryInfo";
import SingleCountryWrapper from "../../component/SingleCountryWrapper";
import NavBarWrapper from "../../component/NavBarWrapper";
import { useSelector } from "react-redux";
import { State } from "../../store/reducer";
import Loader from "../../component/Loader";

const Country = () => {
  const loading = useSelector((state: State) => state.country.loading);

  console.log(loading);

  return (
    <main className="country">
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBarWrapper>
            <BackBtn />
          </NavBarWrapper>
          <SingleCountryWrapper>
            <SingleCountryInfo />
          </SingleCountryWrapper>
        </>
      )}
    </main>
  );
};

export default Country;
