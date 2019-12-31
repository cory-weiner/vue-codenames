<template>
  <div id="app">
    <!-- <div id="nav">
      
    </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body{
  margin:0px;
  padding: 0px;
}
.tile_grid{
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap:5px;
  grid-row-gap:5px;
  font-weight:bold;
  padding: 5px;
}
.tile{
  background-color:#dfdfdf;
  border: solid 1px #cccccc;
  display: flex;
  justify-content: center;
  cursor:pointer;
  border:none;
  align-items:center;
}
.word{
  background-color:white;
  padding: 5px 10px;
  border-radius:2px;
  font-size: 2vw;
  font-weight:bold;
}
.guessed{
  color:white;
  margin-right: 10px;
}
label{
  font-weight:bold;
  margin-right:10px;
}
hr{
  border:none;
  border-bottom: solid 1px #cccccc;
  margin:10px 0px;
}

html, body, #app {
    margin: 0;
    height: 100%;
}
.logo{
font-family: Rockwell,"Courier Bold",Courier,Georgia,Times,"Times New Roman",serif;
font-size:2em;
}
</style>
