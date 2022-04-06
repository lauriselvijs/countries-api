import { Country } from "./country.action.type";
import { CountryActions } from "./country.action.d";
import { ICountryInitialState } from "./country.initial-state.d";
import { countryInitialState } from "./country.initial-state";

const countryReducer = (
  state = countryInitialState,
  action: CountryActions
): ICountryInitialState => {
  switch (action.type) {
    case Country.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Country.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case Country.CLEAR_ERROR:
      return {
        ...state,
        error: [],
      };
    case Country.GET_BORDER_COUNTRY_NAMES:
      return {
        ...state,
        borderCountries: action.payload,
        loading: false,
      };
    case Country.GET_SINGLE_COUNTRY_DATA:
      return {
        ...state,
        singleCountry: action.payload,
        loading: false,
      };
    case Country.GET_COUNTRY_DATA:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case Country.GET_COUNTRY_DATA_BY_SEARCH:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case Country.GET_COUNTRY_DATA__BY_CONTINENT:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };

    case Country.CLEAR_BORDER_COUNTRIES_STATE:
      return {
        ...state,
        borderCountries: [],
      };
    case Country.CLEAR_SINGLE_COUNTRY_STATE:
      return {
        ...state,
        singleCountry: {
          flags: { svg: "" },
          nativeName: "",
          name: "",
          population: 0,
          region: "",
          subregion: "",
          capital: "",
          topLevelDomain: [{ countryDomain: "" }],
          currencies: [{ name: "" }],
          languages: [{ name: "" }],
          borders: [],
        },
      };
    case Country.CLEAR_COUNTRIES_STATE:
      return {
        ...state,
        countries: [],
      };
    default:
      return state;
  }
};

export default countryReducer;
