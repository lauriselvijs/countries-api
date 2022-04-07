import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store/reducer";

const CountryFlag = () => {
  const {
    flags: { svg },
    name,
  } = useSelector((state: State) => state.country.singleCountry);

  return <img className="flag-img" src={svg} alt={name + " flag"} />;
};

export default CountryFlag;
