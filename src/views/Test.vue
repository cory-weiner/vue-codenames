<template>
    <div class="page_container">
        <div class="subscribe_toolbar">Lobby:</div>
        <div class="grid">
            <div class="grid_object">tile</div>
            <div class="grid_object">tile</div>
            <div class="grid_object">tile</div>
            <div class="grid_object">tile</div>

                    <div class="grid_object">tile</div>
            <div class="grid_object">tile</div>
            <div class="grid_object">tile</div>
            <div class="grid_object">tile</div>

                    <div class="grid_object">tile</div>
            <div class="grid_object">tile</div>
            <div class="grid_object">tile</div>
            <div class="grid_object">tile</div>

                    <div class="grid_object">tile</div>
            <div class="grid_object">tile</div>
            <div class="grid_object">tile</div>
            <div class="grid_object">tile</div>
            
    </div>
    </div>
</template>

<script>



export default {
  name: 'test'
}
</script>


<style>


html, body, #app {
    margin: 0;
    height: 100%;
}

.page_container{
    height: 100%;
    display:grid;
    grid-template-rows: 40px 1fr;
}
.grid{
    
    display:grid;
    grid-template-columns: repeat(4, 1fr);
}
.grid_object{
    border: solid 1px green;
}
</style>