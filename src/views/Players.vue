<template>
  <div class="playerlist">
      <div class="listheading">({{this.playerList.length}}) Player(s)</div>
      <div class="fullist" v-if="isSpyMaster">
            <div class="player" v-bind:key="player" v-for="player in playerList" v-on:click="toggleSpyMaster(player)"><span class="spymaster_symbol" v-if="isPLayerSpymaster(player)">
              🕵</span>{{player}}
            </div>
      </div>

      <div class="fullist" v-if="!isSpyMaster">
         
            <div class="player" v-bind:key="player" v-for="player in playerList"><span class="spymaster_symbol" v-if="isPLayerSpymaster(player)">
              🕵</span>{{player}}
            </div>
      </div>


  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { mapFields } from 'vuex-map-fields';
export default {
  created(){
  },
  data(){
    return {
      showList: false
    }
  },
  computed: {
      ...mapFields([
        'gameboard'
      ]),
    ...mapGetters(['playerList','isSpyMaster'])
  },
  methods: {
    isPLayerSpymaster(player){
      if (typeof this.gameboard.spymasters === 'undefined'){
        return true
      }
      if(this.gameboard.spymasters.includes(player)){
        return true
      }
      return false
    },
    ...mapMutations(['toggleSpyMaster'])
  },
  components: {

    }
}
</script>


<style>
.listheading{
  font-weight: bold;
  background-color:rgba(0,0,0,0.5);;
  padding: 5px 10px;
}
.fullist{
  padding: 10px;
}
.player{
  font-size: .8em;
  margin-bottom: 5px;
}
.player:hover{
  font-weight:bold;
  cursor:pointer;
}
.spymaster_symbol{
  margin-right: 5px;
  color:white;
  border-radius:5px;
  font-size:1.2em;
  color:yellow;
}
</style>