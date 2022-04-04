import { Country } from "./country.action.type";

interface ISetLoading {
  type: Country.SET_LOADING;
  payload: boolean;
}

interface ISetError {
  type: Country.SET_ERROR;
  payload: any[];
}

interface IClearError {
  type: Country.CLEAR_ERROR;
}

interface IClearState {
  type: Country.CLEAR_STATE;
}

export interface ICountryData {
  type: Country.GET_COUNTRY_DATA;
  payload: {
    flag: string;
    nativeName: string;
    name: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    countryDomain: string[];
    currencies: { name: string }[];
    languages: { name: string }[];
  }[];
}

export interface ICountryCard {
  type: Country.GET_SINGLE_COUNTRY_DATA;
  payload: {
    name: { common: string };
    cca3: string;
    population: number;
    region: string;
    capital: string;
    flags: { png: string };
  };
}

export interface IBorderCountryNames {
  type: Country.GET_BORDER_COUNTRY_NAMES;
  payload: {
    name: string;
    countryCode: string;
  }[];
}

export type CountryActions =
  | ISetLoading
  | ISetError
  | ICountryData
  | ICountryCard
  | IBorderCountryNames
  | IClearError;
