const getPokemonOptions = () => {
  const mixedPokemon = getPokemon().sort(() => Math.random() - 0.5);
  getPokemonNames(mixedPokemon.splice(0, 4));
};

const getPokemon = () => {
  const pokemonArr = Array.from(Array(650));
  return pokemonArr.map((_, index) => index + 1);
};

const getPokemonNames = ([a, b, c, d] = []) => {
  console.log(a, b, c, d);
};

export default getPokemonOptions;
