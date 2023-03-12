class HowToPlay {
    constructor(game) {
        this.game = game;

        // bounding boxes
        this.mouseBB = new BoundingBox(0,0,1,1);
        this.exitBB = new BoundingBox(600 - 62,640 - 38,120,50);
    }

    update() {
        // update if user clicks
        if (this.game.click) {
            // update mouse location
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            // exit credits screen
            if (this.mouseBB.collide(this.exitBB)) {
                this.credits = false;
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
        ctx.fillText("CLASS:", 40, 320);
        ctx.fillText("\uD83D\uDCBB TCSS 491", 40, 360);
        ctx.fillText("\u26c4 Winter 2023", 40, 400);

        // exit button
        setCustomStroke(ctx, "black");
        if (this.mouseBB.collide(this.exitBB)) {
            setRainbowStroke(ctx, this.exitBB);
        }

        ctx.lineWidth = 6;
        ctx.textAlign = "center";
        ctx.font = '25px "Press Start 2P"';
        ctx.fillText("EXIT", 600, 640);
        ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);
    }
}