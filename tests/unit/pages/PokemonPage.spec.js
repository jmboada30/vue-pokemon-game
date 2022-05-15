import { mount, shallowMount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage';
import { pokemonArr } from '../mocks/pokemons.mock';
describe('PokemonPage Page', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test('debe hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('debe llamar mixPokemonArray al montar', () => {
    const mixPokemonArray = jest.spyOn(PokemonPage.methods, 'mixPokemonArray');
    const wrapper = shallowMount(PokemonPage);
    expect(mixPokemonArray).toHaveBeenCalled();
  });

  test('debe hacer match con el snapshot cuando cargan los pokemons', () => {
    const wrapper = mount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonArr,
          pokemon: pokemonArr[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('debe mostrar los components de PokemonPicture y PokemonOptions', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonArr,
          pokemon: pokemonArr[0],
          showPokemon: false,
          showAnswer: false,
          message: '',
        };
      },
    });

    const pokemonPicture = wrapper.find('pokemon-picture-stub');
    const pokemonOptions = wrapper.find('pokemon-options-stub');
    console.log(pokemonOptions.attributes());

    expect(pokemonPicture.exists()).toBe(true);
    expect(pokemonOptions.exists()).toBe(true);
    expect(pokemonPicture.attributes('pokemonid')).toBe('1');
    expect(pokemonOptions.attributes('pokemons')).toBeDefined();
  });
});
