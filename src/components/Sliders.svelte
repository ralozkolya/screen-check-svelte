<script>

    import { toChannels } from '../utils/colors';

    export let color;
    export let loop;

    $: [ red, green, blue ] = toChannels(color);

    function onChannelChange() {
        loop = false;
        color = '#' + [red, green, blue].map(toHex).join('');
    }

	function toHex(number) {
		number = Number(number);
		number = Math.min(255, Math.max(0, number));
		return ('0' + number.toString(16)).slice(-2);
	}

</script>

<style>

    .range-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1em;
    }

    .range-container > label {
        margin-top: .5em;
        min-width: 4em;
    }

    .range-container > input[type=range] {
        margin-right: 1em;
        min-width: 3em;
    }

    .range-container > input[type=text] {
        width: 2em;
    }

    @media (min-width: 360px) {
        .range-container > input[type=range] {
            flex-grow: 1;
        }
    }

</style>

<div>
    <div class="range-container">
        <label for="red">Red:</label>
        <input id="red" type="range" min="0" max="255" bind:value={red} on:input={onChannelChange}>
        <input type="text" bind:value={red} on:input={onChannelChange}>
    </div>
    <div class="range-container">
        <label for="green">Green:</label>
        <input id="green" type="range" min="0" max="255" bind:value={green} on:input={onChannelChange}>
        <input type="text" bind:value={green} on:input={onChannelChange}>
    </div>
    <div class="range-container">
        <label for="blue">Blue:</label>
        <input id="blue" type="range" min="0" max="255" bind:value={blue} on:input={onChannelChange}>
        <input type="text" bind:value={blue} on:input={onChannelChange}>
    </div>
</div>