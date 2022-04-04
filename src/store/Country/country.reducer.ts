import { Country } from "./country.action.type";
import { CountryActions } from "./country.action.d";
import { IcountryInitialState } from "./country.reducer.d";
import { countryInitialState } from "./country.reducer.initial-state";

const countryReducer = (
  state = countryInitialState,
  action: CountryActions
): IcountryInitialState => {
  switch (action.type) {
    case Country.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
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
      };
    case Country.GET_COUNTRY_DATA:
      return {
        ...state,
        countryData: action.payload,
      };
    case Country.GET_SINGLE_COUNTRY_DATA:
      return {
        ...state,
        countryCard: action.payload,
      };
    default:
      return state;
  }
};

export default countryReducer;
