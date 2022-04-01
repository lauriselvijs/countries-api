export const populationFormatting = (
  population: number | bigint = 0
): string => {
  return new Intl.NumberFormat("en-US").format(population);
};
