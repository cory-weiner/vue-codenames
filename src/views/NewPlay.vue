<template>
  <div class="home">
      <div class="toolbar">
          <router-link tag="h1" to="/">vue-codenames</router-link>
        <div class="toolbar_section">
            <b>Hello, {{username}}</b>
            <p class="lobbyname">Lobby: {{lobby_id}}</p>
        </div>

        <app-spy-controls v-if="isSpyMaster"></app-spy-controls>
        <div v-if="startteam">
            <div class='start_team_name'>{{startteam}} goes first.</div>
            <div v-for="(value,key) in scoreboard" v-bind:key="key">
            <div v-if="value.show" class="team_score">
            <span>{{key}}</span> : {{value.guessed}}/{{value.tiles}}
            </div>
    
            </div>
        </div>
        
        <!-- <div class="toolbar_section" v-if="isSpyMaster">
            <button class="newboard_button" v-on:click="generateBoard">New Board</button>
        </div> -->

        <!-- <div class="Spymasters" v-if="gameboard">
            Spymasters
            {{gameboard.spymasters}}
        </div> -->

                    <app-players></app-players>

                    {{alert}}
                    <h3>Chat:</h3>
            <div class="toolbar_section chat_container" id="chat_container_box">
                <div class="chatmessage" v-for="(msg,index) in chat" v-bind:key="index"><b>{{msg.user}}</b> : {{msg.message}}</div>
            </div>
            <form><div class="chat_controls"><input v-model="chatmsg" placeholder="send chat..."><button v-on:click="sendchat">send</button></div></form>
      </div>

        <div v-if="gameboard" class="board_container">
            <template v-if="clue"><div class="board_toolbar">{{clue.user}}'s Clue:<b>{{clue.clue}}</b></div></template>
            <template v-if="!clue"><div class="board_toolbar"><b>welcome to vue-codenames!</b></div></template>
            <app-board v-if="gameboard.tiles" :gameboard="gameboard"></app-board>
            <div v-if="!gameboard.tiles" class="noboard_container"><button class="noboard" v-on:click="generateBoard">Create a board!</button></div>
        </div>
      
      <!-- Players:
      {{playerList}}
      {{isSpymaster}}
      <div v-if="isSpyMaster">You are the spymaster!</div>

      <h1>Gameboard</h1>
    <pre>{{gameboard}}</pre>
    <h1>Players</h1>
    <pre>{{players}}</pre>
    <hr>
    MESSAGES:

    {{messages}} -->
    
  </div>

  
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import { mapMutations, mapGetters, mapState } from 'vuex';
// import Rules from './Rules.vue';
import Board from './Board/Board.vue';
import Players from './Players.vue';
import SpyMasterControls from './SpyMasterControls.vue';

export default {
  name: 'home',
  props: [],
  created(){
    //   Subscribe to the mqtt lobby.
    if(this.lobby_id && this.username){
        this.subscribeToLobby()
    }
    else{
        alert('Missing lobby ID or USERNAME.')
        this.$router.push({ path: '/' })
    }
    
    
    window.addEventListener("beforeunload", this.unsubscribePlayer);
  },
  beforeDestroy(){
      this.resetGameboard();
      this.unsubscribePlayer();
  },
    updated: function () {
    var objDiv = document.getElementById("chat_container_box");
    objDiv.scrollTop = objDiv.scrollHeight;
    },
  data(){
    return {
      showall: false,
      showrules: false,
      chatmsg: ''
    }
  },
  computed: {
      ...mapFields([
        'gameboard',
        'players',
        'lobby_id',
        'username',
        'messages',
        'chat',
        'clue',
        'alert'
      ]),
      ...mapGetters(['playerList','isSpyMaster']),
      ...mapState(['startteam']),
      scoreboard(){
          if (typeof this.gameboard.tiles == 'undefined'){
              return undefined
          }
          var scores = {
              'RED': {show: true, tiles:0, guessed:0},
              'BLUE': {show: true, tiles:0, guessed:0},
              'NUETRAL': {show: false, tiles:0, guessed:0},
              'ASSASSIN': {show: false, tiles:0, guessed:0}
          }
          this.gameboard.tiles.forEach(t=>{
              scores[t.value].tiles += 1
              if (t.guessed){
                  scores[t.value].guessed +=1
              }
          })
          return scores
      },
  },
  methods: {
    ...mapMutations(['subscribeToLobby','generateBoard','sendChat','unsubscribePlayer','resetGameboard']),
    sendchat(){
        this.sendChat(this.chatmsg)
        this.chatmsg = ''
    }
  },
  components: {
      AppBoard: Board,
      AppPlayers: Players,
      AppSpyControls: SpyMasterControls
    }
}
</script>


<style scoped>
.noboard{
    font-size: 3em;
    border: solid 4px rgba(117,14,67,1);
    border-bottom: solid 10px rgba(117,14,67,1);
    border-radius: 10px;
    padding: 20px;
    cursor:pointer;
    color:white;
        background: linear-gradient(144deg, rgba(117,14,67,1) 0%, rgba(171,33,85,1) 60%, rgba(255,213,6,1) 100%);

}

.noboard_container{
    display: grid;
    justify-items: center;
    align-items: center;
}
h1{
    font-size:1.2em;
    padding: 10px;
    margin: 0px;
    background-color: rgba(0,0,0,0.5);
    margin-bottom: 10px;
    cursor:pointer;
}
.home{
    height: 100%;
    display:grid;
    grid-template-columns: 250px 1fr;
}
.lobbyname{
    font-size:.8em;
}
.toolbar{
    background-color:red;

    background: rgb(117,14,67);
    background: linear-gradient(144deg, rgba(117,14,67,1) 0%, rgba(171,33,85,1) 60%, rgba(255,213,6,1) 100%);
    color:white;
    column-gap:20px;
    align-items: center;
    border-right: solid 5px black;
}
.toolbar_section{
    padding: 0px 10px;
}
hr{
    border:none;
    height:2px;
    background-color:white;
}

.board_container{
    display:grid;
    grid-template-rows: 60px 1fr;
}
.board_toolbar{
    background-color:black;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:1.5em;
    
}
.board_toolbar b{
    margin: 0px 10px;
    color:rgba(255,213,6,1)
}
.chatmessage{
    padding: 5px 0px;
    font-size:.8em;
}
.chat_container{
    background-color: rgb(117,14,67);
    max-height:300px;
    overflow-y:auto;
    margin: 5px;
    border-radius: 4px;
}
.chat_controls{
    text-align: center;
    margin-top:10px;
}
.chat_controls input{
    margin:0px !important;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}
.chat_controls button{
    color: white !important;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    background-color:black;
}
h3{
    padding: 5px 10px;
    margin: 0px;
    font-size:1em;
    font-weight:bold;
    border-top: solid 2px rgb(117,14,67);
}


@media only screen and (max-width: 900px) {
 .home{
    display: flex;
    position:relative;
}
.board_container{
    width:100%;
    grid-template-rows: 40px 1fr;
    box-sizing: border-box;
}
.board_container>*{
    box-sizing: border-box;
}
.toolbar{
    display: none;
}

}
.start_team_name{
    text-align:center;
     background: rgba(0, 0, 0, 0.5);
     margin: 5px;
     border-radius: 4px;
     padding: 3px;
     font-weight:bold;
}
.team_score{
 text-align:center;
}
.team_score span{
    font-weight: bold;
    display: inline-block;
    padding: 5px;
}
</style>