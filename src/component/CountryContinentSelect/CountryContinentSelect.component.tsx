import React, { useState } from "react";
import "./CountryContinentSelect.style.scss";
import { Continents } from "../../constant/Continents";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { BtnName } from "../../constant/BtnName";
import { CountryAPI } from "../../constant/CountryAPI";
import axios from "axios";

const { FIND_COUNTRY_BY_CONTINENT_URL } = CountryAPI;
const { CONTINENT_LIST } = Continents;
const { COUNTRY_SELECT_MENU } = BtnName;

const CountryContinentSelect = () => {
  const [showContinents, setShowContinents] = useState<boolean>(false);

  const onCountryContinentSelect = async (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    continent: string
  ) => {
    try {
      const { data } = await axios.get(
        `${FIND_COUNTRY_BY_CONTINENT_URL}${continent.toLowerCase()}`
      );
      console.log(data);
    } catch (error) {
      return error;
    }
  };

  const onFilterByRegionBtnClick = () => {
    setShowContinents(!showContinents);
  };

  return (
    <section className="country-continent-container">
      {showContinents ? (
        <IoIosArrowDown className="country-continent-select-arrow-dark-mode" />
      ) : (
        <IoIosArrowUp className="country-continent-select-arrow-dark-mode" />
      )}
      <button
        className="filter-by-region-dark-mode"
        onClick={onFilterByRegionBtnClick}
      >
        {COUNTRY_SELECT_MENU}
      </button>
      <ul
        className="continent-list-dark-mode"
        style={showContinents ? { display: "block" } : { display: "none" }}
      >
        {CONTINENT_LIST.map((continent: string, index: number) => (
          <li
            key={index}
            className="continent"
            onClick={(e) => onCountryContinentSelect(e, continent)}
          >
            {continent}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CountryContinentSelect;
