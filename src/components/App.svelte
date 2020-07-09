<script>

	import '../css/app.css';
	import '../css/fontello.css';

	import { fullscreen, exitFullscreen, isFullScreen } from '../utils/fullscreen';
	import { MAIN_COLORS, toChannels, getColor } from '../utils/colors';

	let color;
	let red;
	let green;
	let blue;

	let hidden = false;
	let loop = true;
	let interval = 3;
	let intervalId;
	let index = -1;

	let fullscreenIcon = 'icon-resize-full-alt';

	function toggleHidden() {
		hidden = !hidden;
	}

	function maximize() {
		if (isFullScreen()) {
			exitFullscreen(() => fullscreenIcon = 'icon-resize-full-alt');
		} else {
			fullscreen(() => fullscreenIcon = 'icon-resize-small');
		}
	}

	function onColorClick(color, i) {
		cancelLoop(false);
		index = i;
		changeColor(color);
	}

	function changeColor(c) {
		color = c;
		const channels = toChannels(c);
		red = channels[0];
		green = channels[1];
		blue = channels[2];
	}

	function changeChannel() {
		cancelLoop(false);
		const channels = [red, green, blue].map(toHex).join('');
		changeColor('#' + channels);
	}

	function toHex(number) {
		return ('0' + number.toString(16)).slice(-2);
	}

	function cancelLoop(shouldLoop = false) {
		clearInterval(intervalId);
		loop = shouldLoop;
	}

	function intervalChanged() {
		cancelLoop(loop);
		const actualInterval = Math.max(interval, 1);
		if (loop) {
			intervalId = setInterval(() => {
				changeColor(getColor(++index));
			}, actualInterval * 1000);
			changeColor(getColor(++index));
		}
	}

	intervalChanged();

</script>

<main>
	<div on:click={toggleHidden} class="background" style="background-color: { color }"></div>
	<div class="control" class:hidden>
		<div class="float-left">
			<button class="btn" on:click={toggleHidden}>
				<i class="icon-left-open"></i>
				<i class="icon-up-open"></i>
			</button>
			<button class="btn" on:click={maximize}>
				<i class={fullscreenIcon}></i>
			</button>
		</div>
		<h4>Main colors:</h4>
		<div class="color-buttons">
			{#each MAIN_COLORS as color, i}
				<button on:click={() => onColorClick(color, i)} style="background-color: {color}">&nbsp;</button>
			{/each}
		</div>
		<div>
			<input id="loop" type="checkbox" bind:checked={loop} on:change={intervalChanged}>
			<label for="loop">Loop over main colors every</label>
			<input id="interval" type="text" bind:value={interval} on:input={intervalChanged}>
			<label for="interval">seconds</label>
		</div>
		<h4>Custom color:</h4>
		<div>
			<input id="color" type="text" bind:value={color}>
			<span class="small">Enter any valid CSS color value</span>
		</div>
		<div>
			<div class="range-container">
				<label for="red">Red:</label>
				<input id="red" type="range" min="0" max="255" bind:value={red} on:input={changeChannel}>
				<input type="text" bind:value={red} on:input={changeChannel}>
			</div>
			<div class="range-container">
				<label for="green">Green:</label>
				<input id="green" type="range" min="0" max="255" bind:value={green} on:input={changeChannel}>
				<input type="text" bind:value={green} on:input={changeChannel}>
			</div>
			<div class="range-container">
				<label for="blue">Blue:</label>
				<input id="blue" type="range" min="0" max="255" bind:value={blue} on:input={changeChannel}>
				<input type="text" bind:value={blue} on:input={changeChannel}>
			</div>
		</div>
		<div class="small">
			<div>Click anywhere outside this panel to hide it</div>
		</div>
		<div class="small"><a target="_blank" href="https://github.com/ralozkolya/screen-check-svelte"><i class="icon-github-circled"></i>Source</a></div>
	</div>
</main>
