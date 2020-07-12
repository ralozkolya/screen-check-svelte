<script>

	import { fullscreen, exitFullscreen, isFullScreen } from '../utils/fullscreen';
    
    let fullscreenIcon = 'icon-resize-full-alt';

    function maximize() {
		if (isFullScreen()) {
			exitFullscreen(() => fullscreenIcon = 'icon-resize-full-alt');
		} else {
			fullscreen(() => fullscreenIcon = 'icon-resize-small');
		}
	}

</script>

<style>

    .float-left > * {
        float: left;
    }

    .float-left::after {
        content: '';
        clear: both;
        display: table;
    }

    .btn {
        height: 3em;
        background: white;
        padding: .4em .8em;
        min-width: 3.5em;
    }

    .btn:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right-width: 1px;
    }

    .btn:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left-width: 1px;
    }

    .icon-left-open {
        display: none;
    }

    @media (min-width: 720px) and (min-height: 600px) {
        .icon-up-open {
            display: none;
        }

        .icon-left-open {
            display: inline;
        }
    }

</style>

<div class="float-left">
    <button class="btn" on:click>
        <i class="icon-left-open"></i>
        <i class="icon-up-open"></i>
    </button>
    <button class="btn" on:click={maximize}>
        <i class={fullscreenIcon}></i>
    </button>
</div>