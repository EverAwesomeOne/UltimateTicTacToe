class GameEngine {
    constructor(options) {
        // What you will use to draw
        // Documentation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
        this.ctx = null;

        // Everything that will be updated and drawn each frame
        this.entities = [];

        // Information on the input
        this.click = null;
        this.mouse = null;
        this.wheel = null;

        this.setKeysNotPressed();
        this.inCanvas = true;
        this.lastDirection = 0;

        // Options and the Details
        this.options = options || {
            debugging: false
        };
    };

    setKeysNotPressed() {
        //
    };

    init(ctx) {
        this.ctx = ctx;
        this.startInput();
        this.timer = new Timer();
    };

    start() {
        this.running = true;
        const gameLoop = () => {
            this.loop();
            requestAnimFrame(gameLoop, this.ctx.canvas);
        };
        gameLoop();
    };

    startInput() {
        // TODO: remove that = this and use the function declaration
        // show below with the getXandY method
        let that = this;
        const getXandY = e => ({
            x: e.clientX - this.ctx.canvas.getBoundingClientRect().left,
            y: e.clientY - this.ctx.canvas.getBoundingClientRect().top
        });

        this.ctx.canvas.addEventListener("mousemove", e => {
            if (this.options.debugging) {
                console.log("MOUSE_MOVE", getXandY(e));
            }
            this.mouse = getXandY(e);
        });

        this.ctx.canvas.addEventListener("click", e => {
            if (this.options.debugging) {
                console.log("CLICK", getXandY(e));
            }
            this.click = getXandY(e);
        });

        this.ctx.canvas.addEventListener("wheel", e => {
            if (this.options.debugging) {
                console.log("WHEEL", getXandY(e), e.wheelDelta);
            }
            e.preventDefault(); // Prevent Scrolling
            this.wheel = e;
        });

        this.ctx.canvas.addEventListener("contextmenu", e => {
            if (this.options.debugging) {
                console.log("RIGHT_CLICK", getXandY(e));
            }
            e.preventDefault(); // Prevent Context Menu
            this.rightclick = getXandY(e);
        });

        // function keydownListener (e) {
        //     //e.preventDefault();
        //     switch (e.code) {
        //         case "Space":
        //             that.jump = true;
        //             break;
        //         case "KeyD":
        //             that.duck = true;
        //             break;
        //     }
        // }
        // function keyUpListener (e) {
        //     //e.preventDefault();
        //     switch (e.code) {
        //         case "Space":
        //             that.jump = false;
        //             break;
        //         case "KeyD":
        //             that.duck = false;
        //             break;
        //     }
        // }

        // that.keydown = keydownListener;
        // that.keyup = keyUpListener;

        // this.ctx.canvas.addEventListener("keydown", that.keydown);
        // this.ctx.canvas.addEventListener("keyup", that.keyup);

        // document.getElementById("gameWorld").addEventListener('blur', () => {
        //     that.inCanvas = false;
        //     that.setKeysNotPressed();
        // });

    };

    addEntity(entity) {
        for (let i = 0; i < this.entities.length; i++) {
            if (this.entities[i] === entity) {
                console.log(this.entities.splice(i, 1));
            }
        }
        this.entities.push(entity);
    };

    addEntityToTop(entity) {
        for (let i = 0; i < this.entities.length; i++) {
            if (this.entities[i] === entity) {
                console.log(this.entities.splice(i, 1));
            }
        }
        this.entities.unshift(entity) ;
    };

    draw() {
        // Clear the whole canvas with transparent color (rgba(0, 0, 0, 0))
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // Draw latest things first
        for (let i = this.entities.length - 1; i >= 0; i--) {
            this.entities[i].draw(this.ctx, this);
        }
        this.camera.draw(this.ctx);
    };

    update() {
        let entitiesCount = this.entities.length;

        for (let i = 0; i < entitiesCount; i++) {
            let entity = this.entities[i];

            if (!entity.removeFromWorld) {
                entity.update();
            }
        }
        this.camera.update();

        for (let i = this.entities.length - 1; i >= 0; --i) {
            if (this.entities[i].removeFromWorld) {
                this.entities.splice(i, 1);
            }
        }
    };

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    };
}