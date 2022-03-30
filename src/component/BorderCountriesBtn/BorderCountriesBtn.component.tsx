import React from "react";
import "./BorderCountriesBtn.style.scss";

const BorderCountriesBtn = ({ borderCountries }: any) => {
  return (
    <div className="border-countries-btn-container">
      {borderCountries.map((borderCountry: any, index: any) => (
        <button key={index} className="border-countries-btn">
          {borderCountry}
        </button>
      ))}
    </div>
  );
};

export default BorderCountriesBtn;
