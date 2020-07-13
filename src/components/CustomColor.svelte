<script>

    export let color, loop;

</script>

<style>

    #color {
        box-sizing: border-box;
        width: 100%;
    }

</style>

<h4>Custom color:</h4>
<div>
    <input id="color" type="text" bind:value={color} on:input={() => loop = false} aria-label="Custom color">
    <span class="small">Enter any valid CSS color value</span>
</div>