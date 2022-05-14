<template>
  <h1 v-if="!pokemon">Por favor espere...</h1>

  <div v-else>
    <h1>Quien es este Pokemon?</h1>
    <pokemon-picture
      :pokemonId="pokemon.id"
      :showPokemon="showPokemon"
    ></pokemon-picture>
    <pokemon-options :pokemons="pokemonArr" @selection="checkAnswer"></pokemon-options>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";
export default {
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      this.selectPokemon();
    },
    selectPokemon() {
      const index = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[index];
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      if(pokemonId === this.pokemon.id) {
        alert('YES')
      } else {
        alert('NOO')
      }
    }
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style></style>
