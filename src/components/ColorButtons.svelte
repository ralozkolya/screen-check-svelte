<script>

    import { MAIN_COLORS } from '../utils/colors';

    export let color, index, loop;

    let onColorClick = (c, i) => {
        loop = false;
        color = c;
        index = i;
    };

</script>

<style>

    .color-buttons {
        display: flex;
        justify-content: space-between;
    }

    .color-buttons > button {
        width: 3em;
        height: 3em;
    }

    .color-buttons > button:last-child {
        margin: 0;
    }

</style>

<h4>Main colors:</h4>
<div class="color-buttons">
    {#each MAIN_COLORS as color, i}
        <button on:click={() => onColorClick(color, i)} style="background-color: {color}">&nbsp;</button>
    {/each}
</div>