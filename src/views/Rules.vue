<template>
    <div class="rules_container">
        <h1>What is Vue-CodeNames?</h1>
        <p>Vue codenames is an open source browser based Vue.js implementation of the popular card game Codenames. Users are connected to a game lobby in realtime via MQTT web protocol. The full rules of the game are available below.</p>
        <h1>Game Rules</h1>
        <p>Vue-Codenames is a party game played with 2 teams of at least 2 or more people each.</p>
        <h2>Basics</h2>
        <p>You are part of a military operation to clear a plot of land as you prepare to attack the enemy force. To do so, you must disable the enemy mines to clear a path for your forces to move in.</p>
        <h2>Setup</h2>
        <p>To setup your game, have one person create a lobby, and using the unique lobby ID, other players can join. Divide all players into two teams before starting.</p>
        <h2>The Spymaster</h2>
        
            <p>Each team has one person designated as their Spymaster. The Spymasters job is to provide a single word clue to reveal where that teams field operatives are located.  The remaining one or more members on the team form a group whose task is to identify and make contact with their field operatives using only the clues given by the Spymaster.
            The clue given should correspond to one or more mine tiles on the grid. The Spymaster should state the number of tiles their clue relates to in order for their team to identify which tiles to select.</p>
            <div class="tip">
                Vue-Codenames is best played on two or more screens. Create a game to serve as your ‘lobby’, then on your smartphone or laptop, other members can join using the lobby id.
            </div>

        
        <h2>Assassin</h2>
        <p>
            In the field is a single assassin whom your team wants to avoid at all costs. Attempting to contact this operative will yield an instant loss for your team. The Spymaster should avoid giving clues that might cause your team to select this tile.
        </p>
        <h2>Innocent Bystanders</h2>
        <p>Spots on the board in a tan color are innocent bystandars. If your team guesses a bystander, the card is revealed, and your teams turn is over. No other penalty is applied.</p>
        <h2>Game End</h2>
        <p>The game is over when the winning team has identified all of their field agents before the enemy team.</p>

    </div>
</template>

<script>



export default {
  name: 'Rules'
}
</script>


<style>
p{
    line-height: 1.5em;
    
}
.rules_container{
    padding: 20px;
}
</style>