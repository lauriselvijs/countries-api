import React from "react";
import "./Country.style.scss";
import BackBtn from "../../component/BackBtn";
import CountrySingleInfo from "../../component/CountrySingleInfo";
import CountrySingleWrapper from "../../component/CountrySingleWrapper";
import NavBarWrapper from "../../component/NavBarWrapper";
import { useSelector } from "react-redux";
import { State } from "../../store/reducer";
import Loader from "../../component/Loader";

const Country = () => {
  const loading = useSelector((state: State) => state.country.loading);

  return (
    <main className="country">
      <NavBarWrapper>
        <BackBtn />
      </NavBarWrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CountrySingleWrapper>
            <CountrySingleInfo />
          </CountrySingleWrapper>
        </>
      )}
    </main>
  );
};

export default Country;
