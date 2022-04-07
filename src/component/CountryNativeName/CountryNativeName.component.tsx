import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store/reducer";
import "./CountryNativeName.style.scss";

const CountryNativeName = () => {
  const { nativeName } = useSelector(
    (state: State) => state.country.singleCountry
  );

  return (
    <div className="native-name">
      <span className="native-name-text">Native Name: </span>
      {nativeName}
    </div>
  );
};

export default CountryNativeName;
