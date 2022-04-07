import { ISingleCountry, ICountryCard } from "../../type-definition/Country";

export interface ICountryInitialState {
  loading: boolean;
  singleCountry: ISingleCountry;
  countries: ICountryCard["country"][];
  borderCountries: {
    name: string;
    countryCode: string;
  }[];
}
