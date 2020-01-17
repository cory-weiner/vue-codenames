<template>
    <div class="tile_grid" :style="{ backgroundImage: 'url(' + require('../../assets/dirt.jpg') + ')' }">
      <div class="tile" v-for="(tile,index) in gameboard.tiles" v-bind:key="index" :style={backgroundColor:getTileColor(tile)} v-on:click="guess(index)">
      <span class="word">{{tile.word}}</span>
      </div>
    </div>
</template>

<script>


import { mapMutations } from 'vuex';
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'Board',
  props: ['gameboard','showall'],
  methods: {
    getTileColor(tile){
      if (tile.guessed || this.showall){
        return this.colors[tile.value]
      }
      else{
        return 'rgba(0,0,0,0.3)'
      }
    },
    ...mapMutations(['guess'])
  },
  computed: {
    ...mapFields([
        'colors',
      ]),
  }
}
</script>


<style>
.rules_container{
    padding: 20px;
}
.tile{
   background:none;
}
</style>