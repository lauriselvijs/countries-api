import { ICountryInitialState } from "./country.initial-state.d";

export const countryInitialState: ICountryInitialState = {
  loading: false,
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
  countries: [],
  borderCountries: [],
};
