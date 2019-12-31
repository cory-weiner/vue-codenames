<template>
  <div class="home">
    <div class="modal_wrapper" v-if="showrules" v-on:click="showrules=!showrules">
      <div class="modal_inner" v-on:click.stop="true">
        
        <app-rules></app-rules>
      </div>
    </div>
    <div class="toolbar">
    <router-link to="/" tag="span" class="logo">MineCypher</router-link> |
      <label>Your Lobby:</label><input v-model="lobby_id">
      <button v-on:click="generateBoard">New Board</button>
      <button v-on:click="showall=!showall">Toggle Answers</button>
      <button v-on:click="showrules=!showrules">Rules</button>
    </div>
    
    <app-board :gameboard="gameboard"></app-board>
    

  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import { mapMutations, mapGetters } from 'vuex';
import Rules from './Rules.vue';
import Board from './Board/Board.vue';

export default {
  name: 'home',
  created(){
  },
  data(){
    return {
      showall: false,
      showrules: false
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
    ...mapMutations(['generateBoard','getTileColor','publishGameBoard'])
  },
  components: {
        AppRules: Rules,
        AppBoard: Board
    }
}
</script>


<style scoped>
.logo{
    font-size:1em;
    padding: 0px 10px;
    cursor:pointer;
}
label{
    font-weight:normal;
    color: #999999;
    font-size:.8em;
}
.home{
    height: 100%;
    display:grid;
    grid-template-rows: 40px 1fr;
}

.toolbar{
  color:white;
  background-color:black;
  padding: 5px 10px;
}
.toolbar button{
  margin: 2px 5px;
  border:none;
  border-radius:4px;
  background-color:white;
  padding: 5px 10px;
}

.tile_grid{
  background-size: cover;
}
.word{
  -moz-box-shadow:     0 0 2px #000000;
  -webkit-box-shadow:  0 0 2px #000000;
  box-shadow:          0 0 2px #000000;
}
.modal_wrapper{
  width:100%;
  height:100%;
  display:block;
  position:absolute;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.75);
}
.modal_inner{
  background-color:white;
  width:90vw;
  max-height: 90vh;
  border-radius: 5px;
  overflow-y: auto;
}
</style>