export interface IcountryInitialState {
  loading: boolean;
  error: any[];
  countryData: {
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
  countryCard: {
    name: { common: string };
    cca3: string;
    population: number;
    region: string;
    capital: string;
    flags: { png: string };
  };
  borderCountries: {
    name: string;
    countryCode: string;
  }[];
}
