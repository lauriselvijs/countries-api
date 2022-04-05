import { ICountryInitialState } from "./country.reducer.d";

export const countryInitialState: ICountryInitialState = {
  loading: false,
  error: {},
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
