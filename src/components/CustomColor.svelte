<script>

    export let color;

</script>

<style>

    #color {
        box-sizing: border-box;
        width: 100%;
    }

</style>

<h4>Custom color:</h4>
<div>
    <input id="color" type="text" bind:value={color}>
    <span class="small">Enter any valid CSS color value</span>
</div>