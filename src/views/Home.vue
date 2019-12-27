<template>
  <div class="home">
    This is the homepage
   <button v-on:click="generateBoard">New Board</button>
   <button v-on:click="showall=!showall">Toggle Answers</button>
   <button v-on:click="pushboard">Push Board</button>
    <div class="tile_grid">
      <div class="tile" v-for="(tile,index) in gameboard.tiles" v-bind:key="index" :style={backgroundColor:getTileColor(tile)} v-on:click="guess(index)">{{tile.word}}</div>
    </div>
    {{scoreboard}}

    <pre>{{client}}</pre>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import { mapMutations, mapGetters } from 'vuex';
var mqtt=require('mqtt');

export default {
  name: 'home',
  created(){
    this.client = mqtt.connect(this.host+':'+this.port,{clientId:this.clientId})
  },
  data(){
    return {
      showall: false,
      client: {},
      msglog: [],
      host: 'wss://test.mosquitto.org',
      port: '8081',
      topic: 'codenames/',
      lobby_id: 'qtz7',
      subscribe_qos: 0,
      publish_qos: 0,
      retain:true,
      clientId: 'client_' +  Date.now().toString(),
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
    },
    pushboard(){
      this.client.publish(this.topic+this.lobby_id,JSON.stringify(this.gameboard),{qos:parseInt(this.publish_qos),retain:this.retain})
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