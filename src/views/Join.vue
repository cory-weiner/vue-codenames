<template>

    <div class="page_container">
        <div class="subscribe_toolbar">
            <div>
            <div class="logo">MineCypher</div>
            <h2>Join Lobby</h2>
                <div>
                    <input v-model="join_lobby_id" placeholder="enter lobby id...">
                    <button v-on:click="joinLobby">Join Lobby</button>
                </div>
            </div>
        </div>
        
    </div>
    
</template>

<script>

export default {
  name: 'home',
  created(){
  },
  data(){
    return {
        join_lobby_id: ''
    }
  },
  methods: {
    joinLobby(){
        this.$router.push('join/'+this.join_lobby_id)
    }
  },
  computed: {
  }
}
</script>


<style>

html, body, #app {
    margin: 0;
    height: 100%;
}
.subscribe_toolbar{
    display:block;
}
h2{
    display:block;
}
input{
    padding: 5px 10px;
    margin-right: 10px;
    border:none;
    border-radius: 2px;
}
button{
    border:none;
    padding: 5px 10px;
    background-color:white;
    color:black;
    border-radius: 2px;
}
</style>