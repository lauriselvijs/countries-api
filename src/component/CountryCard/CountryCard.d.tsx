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
