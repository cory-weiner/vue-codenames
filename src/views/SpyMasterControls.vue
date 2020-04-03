


<template>
    <div class="rules_container"> 
        <div class="playerstatus"><span class="spymaster_symbol">🕵</span> You are the spymaster.</div>
        <button class="newboard_button" v-on:click="generateBoard">New Board</button>
       <form> <div id="clue_controller"><input v-model="clue"><button v-on:click="onGiveClue">Give Clue</button></div></form>
    </div>
</template>


<script>
import { mapMutations } from 'vuex';
// import { mapFields } from 'vuex-map-fields';
export default {
  created(){
  },
  data(){
    return {
      clue: ''
    }
  },
  computed: {
  },
  methods: {
    ...mapMutations(['generateBoard','sendClue']),
    onGiveClue(){
        this.sendClue(this.clue)
        this.clue = ''
    }
    
  },
  components: {

    }
}
</script>


<style>
.playerstatus{
  background: rgba(0,0,0,0.5);
  padding: 5px;
  border-radius: 4px;
  text-align:center;
  font-size: .8em;
}
.newboard_button{
    margin-bottom:10px;
    width:100%;
    background-color: rgba(255,255,255,0.5);
    font-weight:bold;
    color: rgb(117,14,67);
    cursor:pointer;
    border:solid 1px white;
}
#clue_controller{
    display: grid;
    grid-template-columns: 125px 1fr;
    grid-column-gap: 5px;
}
#clue_controller input{
    box-sizing: border-box;
    margin: 0px;
}
#clue_controller button{
    flex:auto;
    display: block;
    font-weight: bold;
}


</style>