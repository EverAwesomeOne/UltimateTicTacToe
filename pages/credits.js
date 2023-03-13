class Credits {
    constructor(game) {
        this.game = game;

        // bounding boxes
        this.mouseBB = new BoundingBox(0,0,1,1);
        this.exitBB = new BoundingBox(PARAMS.CANVAS_WIDTH / 2 - 62,PARAMS.CANVAS_HEIGHT - PARAMS.CANVAS_HEIGHT / 5 - 40,120,50);
    }

    update() {
        // update if user clicks
        if (this.game.click) {
            // update mouse location
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            // exit credits screen
            if (this.mouseBB.collide(this.exitBB)) {
                this.game.camera.loadLevel(titleScreen);
            }
            // reset user click
            this.game.click = null;
        }

        // update mouse movement
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y,1,1);
        }
    }

    draw(ctx) {
        // credits screen
        setCustomStroke(ctx, "black");
        ctx.lineWidth = 6;
        ctx.textAlign = "center";
        ctx.font = '45px "Press Start 2P"';
        ctx.fillText("CREDITS",720 / 2, 100);

        ctx.textAlign = "left";
        ctx.font = '25px "Press Start 2P"';

        ctx.fillText("DEVELOPER:", 40, 200);
        ctx.fillText("\u2615 Chloe Duncan", 40, 240);
        ctx.fillText("\"I Speak Java\"", 40, 280);
        ctx.fillText("CLASS:", 40, 360);
        ctx.fillText("\uD83D\uDCBB TCSS 491", 40, 400);
        ctx.fillText("\u26c4 Winter 2023", 40, 440);

        // exit button
        setCustomStroke(ctx, "black");
        if (this.mouseBB.collide(this.exitBB)) {
            setRainbowStroke(ctx, this.exitBB, true);
        }

        ctx.lineWidth = 6;
        ctx.textAlign = "center";
        ctx.font = '25px "Press Start 2P"';
        ctx.fillText("EXIT", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT - PARAMS.CANVAS_HEIGHT / 5);
        ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);
    }
}