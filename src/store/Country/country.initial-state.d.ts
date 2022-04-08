import {
  ISingleCountry,
  ICountryCard,
  IBorderCountries,
} from "../../type-definition/Country";

export interface ICountryInitialState {
  loading: boolean;
  singleCountry: ISingleCountry;
  countries: ICountryCard["country"][];
  borderCountries: IBorderCountries["borderCountries"];
}
