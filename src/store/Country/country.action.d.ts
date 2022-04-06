import { Country } from "./country.action.type";
import { ICountryCard, ISingleCountry } from "../../type-definition/Country.d";
import { IError } from "../../type-definition/Error";

interface ISetLoading {
  type: Country.SET_LOADING;
}

interface ISetError {
  type: Country.SET_ERROR;
  payload: IError;
}

interface IClearError {
  type: Country.CLEAR_ERROR;
  payload: IError;
}

interface IClearSingleCountryState {
  type: Country.CLEAR_SINGLE_COUNTRY_STATE;
}

interface IClearCountriesState {
  type: Country.CLEAR_COUNTRIES_STATE;
}

interface IClearBorderCountriesState {
  type: Country.CLEAR_BORDER_COUNTRIES_STATE;
}

interface ICountryData {
  type: Country.GET_COUNTRY_DATA;
  payload: ICountryCard["country"][];
}

interface ICountrySearchData {
  type: Country.GET_COUNTRY_DATA_BY_SEARCH;
  payload: ICountryCard["country"][];
}

interface ICountryContinentData {
  type: Country.GET_COUNTRY_DATA__BY_CONTINENT;
  payload: ICountryCard["country"][];
}

interface ISingleCountryData {
  type: Country.GET_SINGLE_COUNTRY_DATA;
  payload: ISingleCountry;
}

interface IBorderCountryNames {
  type: Country.GET_BORDER_COUNTRY_NAMES;
  payload: {
    name: string;
    countryCode: string;
  }[];
}

export type CountryActions =
  | ISetLoading
  | ISetError
  | IClearError
  | ICountryData
  | ISingleCountryData
  | IBorderCountryNames
  | IClearSingleCountryState
  | IClearCountriesState
  | IClearBorderCountriesState
  | ICountrySearchData
  | ICountryContinentData;
