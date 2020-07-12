<script>
    export let color;
</script>

<h4>Custom color:</h4>
<div>
    <input id="color" type="text" bind:value={color}>
    <span class="small">Enter any valid CSS color value</span>
</div>