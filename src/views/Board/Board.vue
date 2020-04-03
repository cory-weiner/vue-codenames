<template>
    <div class="tile_grid">
      <div class="tile" v-for="(tile,index) in gameboard.tiles" v-bind:key="index" :style={backgroundColor:getTileColor(tile)} v-on:click="onGuess(index)">

      <span v-if="isSpyMaster" :style={color:alwaysGetTileColor(tile)} class="word">{{tile.word}}</span>
      <span v-if="!isSpyMaster" class="word">{{tile.word}}</span>
      </div>
    </div>
</template>

<script>


import { mapMutations, mapGetters } from 'vuex';
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
        return 'rgba(0,0,0,0.1)'
      }
    },
    alwaysGetTileColor(tile){
        return this.colors[tile.value]
      }
    ,
    ...mapMutations(['guess']),
    onGuess(index){
      if(this.isSpyMaster){
        this.guess(index)
      }
    }
  },
  computed: {
    ...mapFields([
        'colors'
      ]),
    ...mapGetters(['isSpyMaster'])
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