<template>

    <div class="page_container">
        <div class="gridfull" v-if="boardSubscription.message">
            <div class="grid_obj" v-for="(tile,index) in boardSubscription.message.tiles"  :style={backgroundColor:getTileColor(tile)} v-bind:key="index">
                <div class="word_container" :class="'guessed_' + tile.guessed"><span class="word">{{tile.word}}</span></div>
            </div>
        </div>
        
    </div>
    
</template>

<script>
import { mapFields } from 'vuex-map-fields';

import { mapMutations } from 'vuex';

export default {
  name: 'home',
  created(){
      
      this.subscribeToBoard();
  },
  data(){
    return {
     
    }
  },
  methods: {
    ...mapMutations(['subscribeToBoard']),
    getTileColor(tile){
        return this.colors[tile.value]
    }
  },
  computed: {
    ...mapFields([
        'boardSubscription',
        'colors',
        'lobby_id'
      ]),
  }
}
</script>


<style>

html, body, #app {
    margin: 0;
    height: 100%;
}
.subscribe_toolbar{
    display:flex;
    align-items:center;
    text-align:center;
    justify-content:center;
    background-color:black;
    color:white;
}
.page_container{
    height: 100%;
    display:grid;
    grid-template-rows: 1fr;
}
.gridfull{
    background:none;
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    font-size:.8em;
}
.grid_obj{
    border: solid 1px white;
    display:flex;
    justify-content:center;
    align-items:center;
    text-overflow:hidden;
    overflow:hidden;
}
.word_container{
}

.guessed_true .word{
 color:white;
 background-color:black;
}
.word{
    font-size: 2vw;
}
</style>