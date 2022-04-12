import React, { useState } from "react";
import "./CountrySearch.style.scss";
import { State } from "../../store/reducer";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { countryActions } from "../../store/action";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";

const CountrySearch = () => {
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
    <div className="country-search-container">
      <AiOutlineSearch
        className={darkMode ? "search-icon-dark-mode" : "search-icon"}
      />
      <input
        className={
          darkMode ? "country-search-input-dark-mode" : "country-search-input"
        }
        type="text"
        placeholder="Search for a country..."
        value={countrySearch}
        onChange={getCountryBySearchInput}
      />
    </div>
  );
};

export default CountrySearch;
