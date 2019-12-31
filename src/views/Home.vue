<template>
  <div class="home2">
    <div class="splash" :style="{ backgroundImage: 'url(' + require('../assets/dirt.jpg') + ')' }">
      <div class="logo">MineCypher</div>
      <div class="subline">A Game of Words and War</div>
      <div class="buttons"><router-link to="/play/" tag="div" class="play_button">&#9658; Play Now!</router-link></div>
    </div>
    <div class="lower_container">
      
      <div class="rules_container"><app-rules></app-rules></div>
    </div>
  
  </div>
</template>

<script>
import Rules from './Rules.vue';

export default {
  name: 'home',
  created(){
  },
  data(){
    return {
      showrules: false
    }
  },
  computed: {
  },
  methods: {
  },
  components: {
        AppRules: Rules
    }
}
</script>


<style>
.logo{
  font-weight:bold;
  font-size:2.5em;
}
.buttons{
  text-align:center;
  
}
.play_button{
  color:#333333;
  padding: 10px 20px;
  background-color:#dfdfdf;
  border: solid 1px #cccccc;
  margin: 20px;
  border-radius:4px;
  display:inline-block;
  cursor:pointer;
  font-size:1.5em;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
}
.subline{
  background-color:black;
  padding: 5px 10px;
  margin: 5px;
  font-size: .9em;
  border-radius:4px;
}
.splash{
  height: 30vh;
  background-size:cover;
  color:white;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
-webkit-box-shadow: inset 0px -200px 200px -86px rgba(0,0,0,0.75);
-moz-box-shadow: inset 0px -200px 200px -86px rgba(0,0,0,0.75);
box-shadow: inset 0px -200px 200px -86px rgba(0,0,0,0.75);
}
</style>