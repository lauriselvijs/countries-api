import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store/reducer";

const CountryLanguage = () => {
  const { languages } = useSelector(
    (state: State) => state.country.singleCountry
  );

  return (
    <div className="country-languages">
      <span className="country-languages-text">Languages: </span>
      {languages?.map(({ name }: any, index: number) => (
        <span className="country-language" key={index}>
          {name}
          {languages?.length !== index + 1 && ","}{" "}
        </span>
      ))}
    </div>
  );
};

export default CountryLanguage;
