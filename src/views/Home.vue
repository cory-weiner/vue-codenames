<template>
  <div class="home">
    This is the homepage
   <button v-on:click="generateBoard">New Board</button>
   <button v-on:click="showall=!showall">Toggle Answers</button>
    <div class="tile_grid">
      <div class="tile" v-for="(tile,index) in gameboard.tiles" v-bind:key="index" :style={backgroundColor:getTileColor(tile)} v-on:click="guess(index)">{{tile.word}}</div>
    </div>
    {{scoreboard}}
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'home',
  data(){
    return {
      showall: false
    }
  },
  computed: {
      ...mapFields([
        'wordlist',
        'gameboard',
        'colors'
      ]),
      ...mapGetters(['scoreboard']),
  },
  methods: {
    ...mapMutations(['generateBoard','guess','getTileColor']),
    getTileColor(tile){
      if (tile.guessed || this.showall){
        return this.colors[tile.value]
      }
      else{
        return '#dfdfdf'
      }
    }
  }
}
</script>


<style>

.tile_grid{
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap:20px;
  grid-row-gap:20px;
  padding: 20px;
}
.tile{
  background-color:#dfdfdf;
  border: solid 1px #cccccc;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  cursor:pointer;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(102,102,102,1);
  -moz-box-shadow: 0px 1px 2px 0px rgba(102,102,102,1);
  box-shadow: 0px 1px 2px 0px rgba(102,102,102,1);
}
</style>