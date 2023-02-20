class HUD {
    constructor(game) {
        this.game = game;
        this.score = 0;
        this.resetGame = false;

        this.mouseBB = new BoundingBox(0,0,1,1);
        this.resetBB = new BoundingBox(10,10,100,22);
    };

    update() {
        // update score
        this.score += 5;

        // update if user clicks
        if (this.game.click) {
            // update mouse location
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            // restart game
            if (this.mouseBB.collide(this.resetBB)) {
                this.game.camera.loadLevel(titleScreen);
            }
            // reset user click
            this.game.click = null;
        }
        // update mouse movement
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y,1,1);
        }
    };

    draw(ctx) {
        setBlackStroke(ctx);
        ctx.lineWidth = 4;
        ctx.textAlign = "center";
        ctx.font = '15px "Press Start 2P"';

        // HUD box
        ctx.strokeRect(0, 0, 700, 40);

        // score
        ctx.fillText("Score " + this.score, 600, 28);

        // reset game
        if (this.mouseBB.collide(this.resetBB)) {
            setRainbowStroke(ctx, this.resetBB);
        }
        ctx.fillText("Reset", 60, 28);
        ctx.strokeRect(this.resetBB.left, this.resetBB.top, this.resetBB.width, this.resetBB.height);
    };
};