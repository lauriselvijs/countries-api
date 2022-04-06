import React, { useState } from "react";
import "./SearchCountry.style.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { CountryAPI } from "../../constant/CountryAPI";
import { State } from "../../store/reducer";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { countryActions } from "../../store/action";

const { FIND_COUNTRY_BY_NAME_URL } = CountryAPI;

const SearchCountry = () => {
  const [countrySearch, setCountrySearch] = useState<string>("");
  const darkMode = useSelector((state: State) => state.darkMode.darkMode);

  const dispatch = useDispatch();

  const { getCountryDataBySearch } = bindActionCreators(
    countryActions,
    dispatch
  );

  const getCountryBySearchInput = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCountrySearch(e.currentTarget.value);
    getCountryDataBySearch(e.currentTarget.value);
  };

  return (
    <div className="search-country-container">
      <AiOutlineSearch
        className={darkMode ? "search-icon-dark-mode" : "search-icon"}
      />
      <input
        className={
          darkMode ? "search-country-input-dark-mode" : "search-country-input"
        }
        type="text"
        placeholder="Search for a country..."
        value={countrySearch}
        onChange={getCountryBySearchInput}
      />
    </div>
  );
};

export default SearchCountry;
