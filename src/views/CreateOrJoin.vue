<template>
  <div class="create_or_join">
      <div class="two_col">

          <h2>Create Or Join Lobby</h2>
          <input class="joinforminput" v-model="username" placeholder="Enter your name"/>
          <input class="joinforminput" v-model="lobby_id" placeholder="Enter Lobby ID"/>
          <!-- <button class="joinbutton" v-on:click="createGame">Create Lobby</button>
            <button class="joinbutton" v-on:>Join Lobby</button> -->
            <router-link tag="button" class="joinbutton"  to="/play">Create/Join Lobby</router-link>

      </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
  name: 'createorjoin',
  created(){
  },
  data(){
    return {
    }
  },
  computed: {
      ...mapFields([
        'lobby_id',
        'username'
      ])
  },
  methods: {
      createGame(){
          if (!this.username && !this.lobby_id){
              alert('Please enter both USERNAME and LOBBY ID')
          }
          else{

              this.$router.push({ path: 'play' })
          }
      }
  },
  components: {
    }
}
</script>


<style>
.create_or_join{
}
.username_form{
    text-align: center;
    padding:10px;
}
 .joinforminput {
     border: solid 2px #750e43 !important;
     font-size:1em;
     box-sizing: border-box;
     color:black;
     margin-bottom: 10px;
 }
 .two_col h2{
margin: 0px;
font-size:1.2em;
margin-bottom:5px;
text-align: center;
margin-bottom:20px;
padding-top:10px;
 }
 .two_col{
     text-align:center;
     border-radius: 2px;
     border-bottom: solid 2px #ffd506;
     border-top: solid 1px #cccccc;
 }
  .two_col>div{
      
      padding: 20px;
      display: inline-block;
      text-align: left;
  }
    .joinbutton{
        color: white;
        background-color: #750e43;
        border:solid 1px #750e43;
        font-size:1em;

        box-sizing: border-box;
        display: inline-block;
        cursor:pointer;
        margin-right:10px;
        margin-bottom: 10px;
    }
    .joinbutton:hover{
        background-color:black;
        border-color:black;
    }
</style>