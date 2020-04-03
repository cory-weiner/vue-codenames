<template>
  <div class="home2">
    <div class="splash">
      <div class="logo">Vue CodeNames</div>
      <div class="subline">A Top Secret Word Game</div>
      <div class="header_links">
        <a href="https://github.com/cory-weiner/vue-codenames">Source Code</a>
        <a href="https://weiner.app">By Cory Weiner</a>
      </div>
    </div>
    <div class="lower_container">
      <AppCreateOrJoin></AppCreateOrJoin>
      <div class="rules_container"><app-rules></app-rules></div>
    </div>
  
  </div>
</template>

<script>
import Rules from './Rules.vue';
import CreateOrJoin from './CreateOrJoin.vue';
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
        AppRules: Rules,
        AppCreateOrJoin: CreateOrJoin
    }
}
</script>


<style>
.logo{
  font-weight:bold;
  font-size:2.5em;
  text-align: center;
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
background: rgb(117,14,67);
background: linear-gradient(144deg, rgba(117,14,67,1) 0%, rgba(171,33,85,1) 37%, rgba(255,213,6,1) 100%);
padding: 20px;
}

.header_links a{
  color:white;
  border: solid 1px white;
  text-decoration: none;
  margin: 10px;
  padding: 5px 10px;
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
}
.header_links a:hover{
  background-color:white;
  color: rgba(171,33,85,1);
}
</style>