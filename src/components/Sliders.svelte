<script>

    export let red;
    export let green;
    export let blue;

</script>

<div>
    <div class="range-container">
        <label for="red">Red:</label>
        <input id="red" type="range" min="0" max="255" bind:value={red} on:input>
        <input type="text" bind:value={red} on:input>
    </div>
    <div class="range-container">
        <label for="green">Green:</label>
        <input id="green" type="range" min="0" max="255" bind:value={green} on:input>
        <input type="text" bind:value={green} on:input>
    </div>
    <div class="range-container">
        <label for="blue">Blue:</label>
        <input id="blue" type="range" min="0" max="255" bind:value={blue} on:input>
        <input type="text" bind:value={blue} on:input>
    </div>
</div>