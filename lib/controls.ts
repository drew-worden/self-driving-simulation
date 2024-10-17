class Controls {
    public forward: boolean;
    public backward: boolean;
    public left: boolean;
    public right: boolean;

    constructor() {
        this.forward = false;
        this.backward = false;
        this.left = false;
        this.right = false;
        
        this.addKeyboardListeners()
    }

    private addKeyboardListeners() {
        document.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "ArrowUp":
                    this.forward = true
                    break
                case "ArrowDown":
                    this.backward = true
                    break
                case "ArrowLeft":
                    this.left = true
                    break
                case "ArrowRight":
                    this.right = true
                    break
            }
        })
        
        document.addEventListener("keyup", (e) => {
            switch (e.key) {
                case "ArrowUp":
                    this.forward = false
                    break
                case "ArrowDown":
                    this.backward = false
                    break
                case "ArrowLeft":
                    this.left = false
                    break
                case "ArrowRight":
                    this.right = false
                    break
            }
        })
    }
}

// Exports
export default Controls