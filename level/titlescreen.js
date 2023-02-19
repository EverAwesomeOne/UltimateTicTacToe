class TitleScreen {
    constructor(game) {
        this.game = game;

        // boolean for credits screen
        this.credits = false;

        // bounding boxes
        this.mouseBB = new BoundingBox(0,0,1,1);
        this.playBB = new BoundingBox((700 / 2) - 55,(700 / 2) - 38,125,70);
        this.creditsBB = new BoundingBox((700 / 2) - 90,(700 / 2) + 160,200,70);
        this.exitBB = new BoundingBox(600 - 62,640 - 38,120,50);
        
        // title screen dino animation
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/dino.png");
        this.dinoRun = new Animator(this.spritesheet, 8, 287, 175, 460-287, 2, 0.15);
        this.dinoX = -250;
    };

    update() {
        // update dino animation
        this.dinoX += 4;
        if (this.dinoX > 700) this.dinoX = -250;

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
                this.credits = true;
            }
            // exit credits screen
            else {
                if (this.mouseBB.collide(this.exitBB)) {
                    this.credits = false;
                }
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
        // display title screen
        if (!this.credits) {
            setBlackStroke(ctx);
            ctx.lineWidth = 6;
            ctx.textAlign = "center";

            //title
            ctx.font = '45px "Press Start 2P"';
            ctx.fillText("Dinosaur Game", 700 / 2, 100);

            ctx.font = '25px "Press Start 2P"';

            //play
            if (this.mouseBB.collide(this.playBB)) {
                setRainbowStroke(ctx, this.playBB);
            }
            ctx.fillText("PLAY", 720 / 2, 720 / 2);
            ctx.strokeRect(this.playBB.left, this.playBB.top, this.playBB.width, this.playBB.height);

            setBlackStroke(ctx);

            //credits
            if (this.mouseBB.collide(this.creditsBB)) {
                setRainbowStroke(ctx, this.creditsBB);
            }
            ctx.fillText("CREDITS", 720 / 2, 720 / 2 + 200);
            ctx.strokeRect(this.creditsBB.left, this.creditsBB.top, this.creditsBB.width, this.creditsBB.height);

            // draw dino
            this.dinoRun.drawFrame(this.game.clockTick, ctx, this.dinoX, 720 / 2 - 250);

        }
        // display credits screen
        else {
            // credits screen
            setBlackStroke(ctx);
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
            setBlackStroke(ctx);
            if (this.mouseBB.collide(this.exitBB)) {
                setRainbowStroke(ctx, this.exitBB);
            }

            ctx.lineWidth = 6;
            ctx.textAlign = "center";
            ctx.font = '25px "Press Start 2P"';
            ctx.fillText("EXIT", 600, 640);
            ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);

        }
    };
};