<script lang="ts">
	// Imports
	import { onMount } from "svelte"
	import { initializeSimulation } from "../main"

	// State
	let canvas: HTMLCanvasElement

	// Lifecycle
	onMount(() => {
		initializeSimulation(canvas)
	})
</script>

<div class="container">
	<canvas bind:this={canvas}></canvas>
</div>

<style>
	.container {
		height: 100%;
		border-radius: var(--br-xlg);
	}

	canvas {
		height: 100%;
		width: 100%;
		background-color: blue;
		border-radius: var(--br-xlg);
	}
</style>
