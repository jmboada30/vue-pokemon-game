<template>
  <h1>Quien es este Pokemon?</h1>

  <pokemon-picture :pokemonId="4" :showPokemon="false"></pokemon-picture>
  <pokemon-options></pokemon-options>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
export default {
  components: { PokemonPicture, PokemonOptions },

}
</script>

<style>

</style>