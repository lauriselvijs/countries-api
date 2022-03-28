import React from "react";
import "./SearchCountry.style.scss";
import { AiOutlineSearch } from "react-icons/ai";

const SearchCountry = () => {
  return (
    <div className="search-country-container">
      <AiOutlineSearch className="search-icon" />
      <input
        className="search-country-input"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchCountry;
