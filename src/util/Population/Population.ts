export const populationFormatting = (population: number | bigint) => {
  return new Intl.NumberFormat("en-US").format(population);
};
