import { shallowMount } from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions';
import { pokemonArr } from '../mocks/pokemons.mock';
describe('PokemonOptions Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: pokemonArr,
      },
    });
  });

  test('debe hacer match con snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('debe mostrar las 4 opciones correctamente', () => {
    const liTags = wrapper.findAll('li');
    expect(liTags.length).toBe(4);
    expect(liTags[0].text()).toBe(pokemonArr[0].name);
    expect(liTags[1].text()).toBe(pokemonArr[1].name);
    expect(liTags[2].text()).toBe(pokemonArr[2].name);
    expect(liTags[3].text()).toBe(pokemonArr[3].name);
  });

  test('debe emitir "selection" con sus parametros al hacer 4 click', () => {
    const [li1, li2, li3, li4] = wrapper.findAll('li');
    li1.trigger('click');
    li2.trigger('click');
    li3.trigger('click');
    li4.trigger('click');

    expect(wrapper.emitted('selection').length).toBe(4);
    expect(wrapper.emitted('selection')[0]).toEqual([pokemonArr[0].id]);
    expect(wrapper.emitted('selection')[1]).toEqual([pokemonArr[1].id]);
    expect(wrapper.emitted('selection')[2]).toEqual([pokemonArr[2].id]);
    expect(wrapper.emitted('selection')[3]).toEqual([pokemonArr[3].id]);
  });
});
