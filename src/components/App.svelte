<script>

	import '../css/app.css';
	import '../css/fontello.css';

	import { fullscreen, exitFullscreen, isFullScreen } from '../utils/fullscreen';
	import { MAIN_COLORS, toChannels, getColor } from '../utils/colors';

	import ColorButtons from './ColorButtons.svelte';
	import CustomColor from './CustomColor.svelte';
	import Sliders from './Sliders.svelte';
	import Loop from './Loop.svelte';

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

	function onColorClick(e) {
		const { color, i } = e.detail;
		cancelLoop(false);
		index = i;
		changeColor(color);
	}

	function changeColor(c) {
		color = c;
		[ red, green, blue ] = toChannels(c);
	}

	function onChannelChange() {
		cancelLoop(false);
		console.log(red, green, blue);
		const channels = [red, green, blue].map(toHex).join('');
		changeColor('#' + channels);
	}

	function toHex(number) {
		number = Number(number);
		number = Math.min(255, Math.max(0, number));
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
		<ColorButtons on:color-click={onColorClick} />
		<Loop bind:interval={interval} bind:loop={loop} on:input={intervalChanged} on:change={intervalChanged} />
		<CustomColor {color} />
		<Sliders on:input={onChannelChange} bind:red={red} bind:green={green} bind:blue={blue} />
		<div class="small">
			<div>Click anywhere outside this panel to hide it</div>
		</div>
		<div class="small"><a target="_blank" href="https://github.com/ralozkolya/screen-check-svelte"><i class="icon-github-circled"></i>Source</a></div>
	</div>
</main>
