// Imports
import Controls from "./controls"

class Car {
	private x: number
	private y: number
	private width: number
	private height: number
	private speed: number
	private acceleration: number
	private maxFowardSpeed: number
	private maxReverseSpeed: number
	private friction: number
	private angle: number
	private angleSpeed: number
	public controls: Controls

	constructor(x: number, y: number, width: number, height: number) {
		this.x = x
		this.y = y
		this.width = width
		this.height = height
		this.speed = 0
		this.acceleration = 0.1
		this.maxFowardSpeed = 3
		this.maxReverseSpeed = 1
		this.friction = 0.05
		this.angle = 0
		this.angleSpeed = 0.03
		this.controls = new Controls()
	}

	draw(ctx: CanvasRenderingContext2D) {
		// Save the current context and translate to the car's position
		ctx.save()
		ctx.translate(this.x, this.y)
		ctx.rotate(-this.angle)

		// Draw the car
		ctx.beginPath()
		ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height)
		ctx.fill()

		// Restore the context
		ctx.restore()
	}

	update() {
        // Move the car
        this.move()
    }

	private move() {
		// Adjust speed based on controls
		if (this.controls.forward) {
			this.speed += this.acceleration
		}
		if (this.controls.backward) {
			this.speed -= this.acceleration
		}

		// Cap speed at max forward and reverse speeds
		if (this.speed > this.maxFowardSpeed) {
			this.speed = this.maxFowardSpeed
		}
		if (this.speed < -this.maxReverseSpeed) {
			this.speed = -this.maxReverseSpeed
		}

		// Adjust speed based on friction
		if (this.speed > 0) {
			this.speed -= this.friction
		}
		if (this.speed < 0) {
			this.speed += this.friction
		}
		if (Math.abs(this.speed) < this.friction) {
			this.speed = 0
		}

		// Adjust angle based on controls (prevents turning while stopped)
		if (this.speed !== 0) {
			const flip = this.speed > 0 ? 1 : -1

			if (this.controls.left) {
				this.angle += this.angleSpeed * flip
			}
			if (this.controls.right) {
				this.angle -= this.angleSpeed * flip
			}
		}

		// Move car based on speed and angle
		this.x -= Math.sin(this.angle) * this.speed
		this.y -= Math.cos(this.angle) * this.speed
	}
}

// Exports
export default Car
