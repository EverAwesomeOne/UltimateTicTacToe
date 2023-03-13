class TitleScreen {
    constructor(game) {
        this.game = game;
        
        // bounding boxes
        this.mouseBB = new BoundingBox(0,0,1,1);
        this.playBB = new BoundingBox((PARAMS.CANVAS_WIDTH / 2) - 62,(PARAMS.CANVAS_HEIGHT / 2) - 50,125,70);
        this.creditsBB = new BoundingBox((PARAMS.CANVAS_WIDTH / 2) - 100,(PARAMS.CANVAS_HEIGHT / 2) + 150,200,70);
    };

    update() {
        // update if user clicks
        if (this.game.click) {
            // update mouse location
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            // play game
            if (this.mouseBB.collide(this.playBB)) {
                this.game.camera.loadLevel(playGame);
            }
            // credits screen
            else if (this.mouseBB.collide(this.creditsBB)) {
                this.removeFromWorld = true;
                let credits = new Credits(this.game);
                this.game.addEntityToTop(credits);
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
        // draw background
        let background = ASSET_MANAGER.getAsset("./images/titlescreenbackground.png");
        ctx.drawImage(background, 0, 0, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT);

        // display title screen
        setCustomStroke(ctx, "black");
        ctx.lineWidth = 6;
        ctx.textAlign = "center";

        //title
        ctx.font = '45px "Press Start 2P"';
        ctx.fillText("Ultimate", 700 / 2, 100);
        ctx.fillText("Tic Tac Toe", 700 / 2, 170);

        ctx.font = '25px "Press Start 2P"';

        //play
        if (this.mouseBB.collide(this.playBB)) {
            setRainbowStroke(ctx, this.playBB, true);
        }
        ctx.fillText("PLAY", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2);
        ctx.strokeRect(this.playBB.left, this.playBB.top, this.playBB.width, this.playBB.height);

        setCustomStroke(ctx, "black");

        //credits
        if (this.mouseBB.collide(this.creditsBB)) {
            setRainbowStroke(ctx, this.creditsBB, true);
        }
        ctx.fillText("CREDITS", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 2 + 200);
        ctx.strokeRect(this.creditsBB.left, this.creditsBB.top, this.creditsBB.width, this.creditsBB.height);
    };
}