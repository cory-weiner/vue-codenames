<template>
    <div class="rules_container">
        <h1>Rules of MineCypher</h1>
        <p>MineCypher is a party game played with 2 teams of at least 2 or more people each.</p>
        <h2>Basics</h2>
        <p>You are part of a military operation to clear a plot of land as you prepare to attack the enemy force. To do so, you must disable the enemy mines to clear a path for your forces to move in.</p>
        <h2>The Encryptor</h2>
        
 
            <p>Each team has one person designated as their ‘Encryptor’. The Encryptors job is to provide a single word clue to reveal which zones the enemy mines are located.  The remaining one or more members on the team form a group of ‘mine sweepers’ whose task is to disable the mines from the clue given by the Encryptor.
            The clue given should correspond to one or more mine tiles on the grid. The Encryptor should state the number of tiles their clue relates to in order for the minesweepers to identify which mines to disable.</p>
            <div class="tip">
                MineCypher is best played on two screens. Create a game to serve as your ‘lobby’, then on your smartphone go to /join and enter your lobby ID to join the game as a the Encryptor.
            </div>

        
        <h2>Death Trap</h2>
        <p>
            In the field is a mine from a past engagement with the enemy, which was never disabled. Attempting to disarm this mine will yield an instant death for your minesweepers, and the enemy forces will win the game. The Encryptor should avoid giving clues that might cause your team to select this tile.
        </p>
        <h2>False Alarm</h2>
        <p>Spots on the board which are free of mines cause no penalty</p>
        <h2>Game End</h2>
        <p>The game is over when the winning team has disabled all of their mines before the enemy.</p>

    </div>
</template>

<script>



export default {
  name: 'Rules'
}
</script>


<style>
.rules_container{
    padding: 20px;
}
</style>