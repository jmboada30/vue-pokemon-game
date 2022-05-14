import getPokemonOptions, {
  getPokemon,
  getPokemonNames,
} from '@/helpers/getPokemonOptions';

describe('getPokemonOptions', () => {
  test('debe regresar un arreglo de numeros', () => {
    const pokemons = getPokemon();

    expect(pokemons.length).toBeGreaterThan(30);
    expect(pokemons[0]).toBe(1);
  });

  test('debe retornar un arr de 4 items con nombres y ids', async () => {
    const pokemons = await getPokemonNames([1, 2, 3, 4]);
    expect(pokemons).toStrictEqual([
      { name: 'bulbasaur', id: 1 },
      { name: 'ivysaur', id: 2 },
      { name: 'venusaur', id: 3 },
      { name: 'charmander', id: 4 },
    ]);
  });

  test('getPokemonOptions debe retornar un arr mezclado', async () => {
    const pokemons = await getPokemonOptions();

    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
    ]);
  });
});
