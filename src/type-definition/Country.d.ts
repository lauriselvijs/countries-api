export interface IBorderCountries {
  borderCountries: {
    countryCode: string;
    name: string;
  }[];
}

export interface ISingleCountry {
  flags: { svg: string };
  nativeName: string;
  name: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: { name: string }[];
  languages: { name: string }[];
  borders?: string[];
}

export interface ICountryCard {
  country: {
    name: { common: string };
    cca3: string;
    population: number;
    region: string;
    capital: string[];
    flags: { png: string };
  };
}
