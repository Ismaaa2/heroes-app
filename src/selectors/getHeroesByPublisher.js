import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  console.log('se ha iniciado la app')
  const publisherValid = ["DC Comics", "Marvel Comics"];
  if (!publisherValid.includes(publisher)) {
      throw new Error(`Publisher "${ publisher }" no es válido.`)
  }
  return heroes.filter((arr) => arr.publisher === publisher);
};
