export interface IBorderCountries {
  borderCountries: {
    countryCode: string;
    name: string;
  }[];
}

export interface ICountry {
  flags: { svg: string };
  nativeName: string;
  name: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: [countryDomain: string];
  currencies: { name: string }[];
  languages: { name: string }[];
  borders?: string[];
}

export interface ICountryState {
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
}

export interface ICountryCard {
  country: {
    name: { common: string };
    cca3: string;
    population: number;
    region: string;
    capital: string;
    flags: { png: string };
  };
}

export interface BorderCountryNames {
  borderCountries: { name: string; countryCode: string }[];
}
