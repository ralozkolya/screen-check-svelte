<script>

    import { getColor } from '../utils/colors';

    export let loop, index, color;

    let interval = 3;
    let intervalId;
    
    $: intervalChanged(loop, interval);

	function cancelLoop(shouldLoop = false) {
        clearInterval(intervalId);
		loop = shouldLoop;
    }

    function intervalChanged(loop, interval) {
        cancelLoop(loop);
		const actualInterval = Math.max(interval, 1);
		if (loop) {
			intervalId = setInterval(() => {
				color = getColor(++index);
			}, actualInterval * 1000);
			color = getColor(++index);
		}
    }

</script>

<style>

    #interval {
        width: 2em;
        margin: 0 .5em;
    }

</style>

<div>
    <input id="loop" type="checkbox" bind:checked={loop}>
    <label for="loop">Loop over main colors every</label>
    <input id="interval" type="text" bind:value={interval}>
    <label for="interval">seconds</label>
</div>