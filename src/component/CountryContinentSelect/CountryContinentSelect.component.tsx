import React from "react";
import "./CountryContinentSelect.style.scss";
import { Continents } from "../../constant/Continents";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { BtnName } from "../../constant/BtnName";

const { CONTINENT_LIST } = Continents;
const { COUNTRY_SELECT_MENU } = BtnName;

const CountryContinentSelect = () => {
  return (
    <section className="country-continent-container">
      <IoIosArrowDown className="country-continent-select-arrow" />
      <button className="filter-by-region">{COUNTRY_SELECT_MENU}</button>
      <ul className="continent-list">
        {CONTINENT_LIST.map((continent: string, index: number) => (
          <li key={index} className="continent">
            {continent}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CountryContinentSelect;
