import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BorderCountriesBtn.style.scss";

const BorderCountriesBtn = ({ borderCountries }: any) => {
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  console.log(borderCountries);

  return (
    <div className="border-countries-btn-container">
      {borderCountries?.map((borderCountry: any, index: any) => (
        <button key={index} className="border-countries-btn">
          {/* {regionNames.of(borderCountry)} */}
        </button>
      ))}
    </div>
  );
};

export default BorderCountriesBtn;
