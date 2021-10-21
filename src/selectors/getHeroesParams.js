import { heroes } from "../data/heroes";

export const getHeroesParams = (search) => {
  if(search === '') return []
  const data = heroes.filter((heroe) =>
    heroe.superhero.toLowerCase().includes(search.toLowerCase())
  );

  return data;
};
