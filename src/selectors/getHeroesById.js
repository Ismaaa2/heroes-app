import { heroes } from "../data/heroes";

export const getHeroesById = (id) => {
  return heroes.find((arr) => arr.id === id);
};
