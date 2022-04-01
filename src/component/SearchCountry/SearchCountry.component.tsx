import React, { useState } from "react";
import "./SearchCountry.style.scss";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { CountryAPI } from "../../constant/CountryAPI";

const { FIND_COUNTRY_BY_NAME_URL } = CountryAPI;

const SearchCountry = () => {
  const [countrySearch, setCountrySearch] = useState<string>("");

  const getCountryBySearchInput = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCountrySearch(e.currentTarget.value);
    try {
      const { data } = await axios.get(
        `${FIND_COUNTRY_BY_NAME_URL}${countrySearch.toLowerCase()}`
      );
      console.log(data);
    } catch (e) {
      return e;
    }
  };

  return (
    <div className="search-country-container">
      <AiOutlineSearch className="search-icon" />
      <input
        className="search-country-input"
        type="text"
        placeholder="Search for a country..."
        value={countrySearch}
        onChange={getCountryBySearchInput}
      />
    </div>
  );
};

export default SearchCountry;
