<script>

    import { createEventDispatcher } from 'svelte';

    import { MAIN_COLORS } from '../utils/colors';

    const dispatch = createEventDispatcher();

    let onColorClick = (color, i) => {
        dispatch('color-click', { color, i });
    };

</script>

<h4>Main colors:</h4>
<div class="color-buttons">
    {#each MAIN_COLORS as color, i}
        <button on:click={() => onColorClick(color, i)} style="background-color: {color}">&nbsp;</button>
    {/each}
</div>