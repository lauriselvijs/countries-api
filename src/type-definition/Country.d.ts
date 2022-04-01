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

export interface ICountryParam {
  cca3: string;
}
