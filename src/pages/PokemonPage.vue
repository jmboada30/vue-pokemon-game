<template>
  <h1 v-if="!pokemon">Por favor espere...</h1>

  <div v-else>
    <h1>Quien es este Pokemon?</h1>
    <pokemon-picture
      :pokemonId="pokemon.id"
      :showPokemon="showPokemon"
    ></pokemon-picture>
    <pokemon-options
      :pokemons="pokemonArr"
      @selection="checkAnswer"
    ></pokemon-options>

    <template class="fade-in" v-if="showAnswer">
      <h2>{{ message }}</h2>
      <button @click="newGame">Nuevo juego</button>
    </template>
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
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const index = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[index];
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (pokemonId === this.pokemon.id) {
        this.message = `Correcto, ${this.pokemon.name}`;
      } else {
        this.message = `Oops, era ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.pokemonArr = [];
      this.pokemon = null;
      this.showPokemon = false;
      this.showAnswer = false;
      this.message = "";
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style></style>
