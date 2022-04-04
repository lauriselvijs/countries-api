import { IcountryInitialState } from "./country.reducer.d";

export const countryInitialState: IcountryInitialState = {
  loading: false,
  error: [],
  countryData: [
    {
      flag: "",
      nativeName: "",
      name: "",
      population: 0,
      region: "",
      subregion: "",
      capital: "",
      countryDomain: [],
      currencies: [{ name: "" }],
      languages: [{ name: "" }],
    },
  ],
  countryCard: {
    name: { common: "" },
    cca3: "",
    population: 0,
    region: "",
    capital: "",
    flags: { png: "" },
  },
  borderCountries: [
    {
      name: "",
      countryCode: "",
    },
  ],
};
