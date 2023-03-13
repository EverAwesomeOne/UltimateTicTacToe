class EndGameScreen {
    constructor(game, win) {
        this.game = game;

        // boolean to determine win or lose screen
        this.win = win;
    
        // bounding boxes
        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.restartBB = new BoundingBox((PARAMS.CANVAS_WIDTH / 2) - 190 / 2, (2* PARAMS.CANVAS_HEIGHT / 3) - 105, 190, 70);

        // animation
        let sprite = ASSET_MANAGER.getAsset("./images/victorydance.png");
        this.animation = new Animator(sprite, 100, 40, 435, 580, 3, 0.2);
        this.x = -200;
        this.y = PARAMS.CANVAS_HEIGHT / 10;
    };

    update() {
        // update animation
        this.x += 3;
        if (this.x > PARAMS.CANVAS_WIDTH) {
            this.x = -200;
        }

        // update if user clicked
        if (this.game.click) {
            // update mouse location
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            // restart game
            if (this.mouseBB.collide(this.restartBB)) {
                this.game.camera.loadLevel(titleScreen);
            }
            // reset user click
            this.game.click = null;
        }

        // update mouse movement
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y, 1, 1);
        }
    };

    draw(ctx) {
        // showChat
        setCustomStroke(ctx, "black");
        ctx.fillRect(0, 0, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT);

        setCustomStroke(ctx, "white");
        ctx.lineWidth = 6;
        ctx.textAlign = "center";

        // animation
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);

        // win game message
        ctx.font = "Bold 60px Courier";
        if (this.win) {

            // display win text
            let player;
            if (this.game.winningPlayer) {
                player = "X";
            } else {
                player = "O";
            }
            ctx.fillText("Player " + player + " Wins!", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2 - 20);
        } else {
            ctx.fillText("It's a Tie!", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2 - 20);
        }

        // restart button
        ctx.font = "Bold 35px Courier";

        if (this.mouseBB.collide(this.restartBB)) {
            setRainbowStroke(ctx, this.restartBB, true);
        }
        ctx.fillText("RESTART", PARAMS.CANVAS_WIDTH / 2, ((2 * PARAMS.CANVAS_HEIGHT) / 3) - 60);
        ctx.strokeRect(this.restartBB.left, this.restartBB.top, this.restartBB.width, this.restartBB.height);
    };
}