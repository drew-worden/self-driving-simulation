// Imports
import Car from "./lib/car"

function initializeSimulation(canvas: HTMLCanvasElement) {
	const ctx = canvas.getContext("2d")
	if (!ctx) {
		throw new Error("Unable to get 2d context from canvas.")
	}
	resizeCanvas(canvas, ctx)
	const car = new Car(100, 100, 20, 40)
	function animate() {
		car.update()
		resizeCanvas(canvas, ctx)
		car.draw(ctx)
		requestAnimationFrame(animate)
	}
	animate()
}

function resizeCanvas(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
	const width = canvas.clientWidth
	const height = canvas.clientHeight

	const pixelRatio = window.devicePixelRatio || 1
	canvas.width = width * pixelRatio
	canvas.height = height * pixelRatio
	ctx.scale(pixelRatio, pixelRatio)
}

// Exports
export { initializeSimulation }
