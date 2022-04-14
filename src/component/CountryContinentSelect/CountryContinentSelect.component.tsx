import React, { useEffect, useRef, useState } from "react";
import "./CountryContinentSelect.style.scss";
import { Continents } from "../../constant/Continents";
import { BtnName } from "../../constant/BtnName";
import { State } from "../../store/reducer";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { countryActions } from "../../store/action";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import { useClickedOutside } from "../../hook/Event.hook";

const { CONTINENT_LIST } = Continents;
const { COUNTRY_SELECT_MENU } = BtnName;

const CountryContinentSelect = () => {
  const [showContinents, setShowContinents] = useState<boolean>(false);

  const countryContainerRef = useRef(null);

  const darkMode = useSelector((state: State) => state.darkMode.darkMode);

  const dispatch = useDispatch();

  const { getCountryDataByContinent } = bindActionCreators(
    countryActions,
    dispatch
  );

  const onCountryContinentSelect = async (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    continent: string
  ) => {
    getCountryDataByContinent(continent);
    setShowContinents(!showContinents);
  };

  const onFilterByRegionBtnClick = () => {
    setShowContinents(!showContinents);
  };

  useClickedOutside(showContinents, setShowContinents, countryContainerRef);

  return (
    <div className="country-continent-container" ref={countryContainerRef}>
      {showContinents ? (
        <IoIosArrowDown
          className={
            darkMode
              ? "country-continent-select-arrow-dark-mode"
              : "country-continent-select-arrow"
          }
        />
      ) : (
        <IoIosArrowUp
          className={
            darkMode
              ? "country-continent-select-arrow-dark-mode"
              : "country-continent-select-arrow"
          }
        />
      )}
      <button
        className={darkMode ? "filter-by-region-dark-mode" : "filter-by-region"}
        onClick={onFilterByRegionBtnClick}
      >
        {COUNTRY_SELECT_MENU}
      </button>
      <ul
        className={darkMode ? "continent-list-dark-mode" : "continent-list"}
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
    </div>
  );
};

export default CountryContinentSelect;
