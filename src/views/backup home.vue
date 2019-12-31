<template>
  <div class="home">
    <div class="toolbar">
      <label>Play Codenames! - Your Lobby:</label><input v-model="lobby_id">
            <button v-on:click="generateBoard">New Board</button>
      <button v-on:click="showall=!showall">Toggle Answers</button>
      <button v-on:click="publishGameBoard">Push Board</button>
    </div>

    <div class="tile_grid">
      <div class="tile" v-for="(tile,index) in gameboard.tiles" v-bind:key="index" :style={backgroundColor:getTileColor(tile)} v-on:click="guess(index)"><span class="word">{{tile.word}}</span></div>
    </div>

  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import { mapMutations, mapGetters } from 'vuex';


export default {
  name: 'home',
  created(){
  },
  data(){
    return {
      showall: false
    }
  },
  computed: {
      ...mapFields([
        'wordlist',
        'gameboard',
        'colors',
        'lobby_id'
      ]),
      ...mapGetters(['scoreboard']),
  },
  methods: {
    ...mapMutations(['generateBoard','guess','getTileColor','publishGameBoard']),
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

.home{
    height: 100%;
    display:grid;
    grid-template-rows: 40px 1fr;
}
.toolbar{
  color:white;
  background-color:black;
  padding: 5px 10px;
  text-align:center;
}
.toolbar button{
  margin: 2px 10px;
  border:none;
  border-radius:4px;
  background-color:white;
  padding: 5px 10px;
}

</style>