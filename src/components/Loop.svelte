<script>

    import { createEventDispatcher } from 'svelte';

    export let loop;
    export let interval;

    const dispatch = createEventDispatcher();

    let intervalChanged = () => {
        dispatch('interval-changed');
    };

</script>

<div>
    <input id="loop" type="checkbox" bind:checked={loop} on:change>
    <label for="loop">Loop over main colors every</label>
    <input id="interval" type="text" bind:value={interval} on:input>
    <label for="interval">seconds</label>
</div>