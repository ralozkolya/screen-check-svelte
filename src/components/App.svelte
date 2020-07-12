<script>

	import '../css/app.css';
	import '../css/fontello.css';

	import { getColor } from '../utils/colors';

	import ControlButtons from './ControlButtons.svelte';
	import ColorButtons from './ColorButtons.svelte';
	import CustomColor from './CustomColor.svelte';
	import Sliders from './Sliders.svelte';
	import Loop from './Loop.svelte';

	let color = getColor(0);
	let hidden = false;
	let loop = true;
	let index = 0;

	function toggleHidden() {
		hidden = !hidden;
	}

</script>

<style>

	.control {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		max-height: 100vh;
		box-sizing: border-box;
		background: rgba(255, 255, 255, .9);
		padding: 1.5em;
		transition: transform .3s linear;
		box-shadow: 0 0 10px rgba(0, 0, 0, .5);
	}

	.control > div:not(:last-child) {
		margin-bottom: .5em;
	}

	.hidden {
		transform: translateY(-110%);
	}

	.background {
		height: 100%;
		transition: background-color .3s;
	}

	@media (min-width: 720px) and (min-height: 600px) {
		.hidden {
			transform: translateX(-110%);
		}

		.control {
			top: 1.5em;
			left: 1.5em;
			width: auto;
			border-radius: .7em;
		}
	}

</style>

<main>
	<div on:click={toggleHidden} class="background" style="background-color: { color }"></div>
	<div class="control" class:hidden>

		<ControlButtons on:click={toggleHidden} />

		<ColorButtons bind:color={color} bind:index={index} bind:loop={loop} />

		<Loop bind:loop={loop} bind:index={index} bind:color={color} />

		<CustomColor bind:color={color} />

		<Sliders bind:color={color} bind:loop={loop} />

		<div class="small">
			<div>Click anywhere outside this panel to hide it</div>
		</div>

		<div class="small"><a target="_blank" href="https://github.com/ralozkolya/screen-check-svelte"><i class="icon-github-circled"></i>Source</a></div>
	</div>
</main>
