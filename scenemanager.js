class Scenemanager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;

        this.gameOver = false;

        this.loadLevel(titleScreen);
    };

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    loadLevel(level) {
        this.currentLevel = level;

        if (this.currentLevel === titleScreen) {
            this.game.addEntity(new TitleScreen(this.game));
        }

        if (this.currentLevel === playGame) {
            this.clearEntities();
            this.game.addEntity(new HUD(this.game));
            this.game.addEntity(new Dinosaur(this.game));
        }
    };

    update() {
        // do nothing
    };

    draw(ctx) {
        // do nothing
    };
}

//-----//
// HUD //
//-----//

class HUD {
    constructor(game) {
        this.game = game;
        this.gameOver = game.gameOver;
        this.score = 0;
        this.resetGame = false;

        this.mouseBB = new BoundingBox(0,0,1,1);
        this.resetBB = new BoundingBox(10,10,100,22);
    };

    update() {
        // update score
        // show game over box if game over

        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            if (this.mouseBB.collide(this.resetBB)) {
                this.game.camera.clearEntities();
                this.game.camera.loadLevel(titleScreen);
            }

            this.game.click = null;
        }

        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y,1,1);
        }
    };

    draw(ctx) {
        this.setBlackStroke(ctx);
        ctx.lineWidth = 4;
        ctx.textAlign = "center";
        ctx.font = '15px "Press Start 2P"';

        // HUD box
        ctx.strokeRect(0, 0, 700, 40);

        // score
        ctx.fillText("Score", 650, 28);

        // reset game
        if (this.mouseBB.collide(this.resetBB)) {
            this.setRainbowStroke(ctx, this.resetBB);
        }
        ctx.fillText("Reset", 60, 28);
        ctx.strokeRect(this.resetBB.left, this.resetBB.top, this.resetBB.width, this.resetBB.height);


        if (this.gameOver) {
            // draw game over box
            // draw ok button to exit and reset game
        }
    };

    setBlackStroke(ctx) {
        ctx.strokeStyle = "Black";
        ctx.fillStyle = "Black";
    };

    setRainbowStroke(ctx, boundingbox) {
        let BB = boundingbox;
        let coordX = BB.left;
        let coordY = BB.top;
        let boxW = BB.left + BB.width;
        let boxH = BB.top + BB.height;
        let rainbow = ctx.createLinearGradient(coordX, coordY, boxW, boxH);

        rainbow.addColorStop(0, "red");
        rainbow.addColorStop(0.2, "orange");
        rainbow.addColorStop(0.4, "green");
        rainbow.addColorStop(0.6, "blue");
        rainbow.addColorStop(0.8, "indigo");
        rainbow.addColorStop(1.0, "violet");

        ctx.strokeStyle = rainbow;
        ctx.fillStyle = rainbow;
    };
}

//--------------//
// Title Screen //
//--------------//

class TitleScreen {
    constructor(game) {
        this.game = game;

        this.mouseBB = new BoundingBox(0,0,1,1);
        this.playBB = new BoundingBox((700 / 2) - 55,(700 / 2) - 38,125,70);
        this.creditsBB = new BoundingBox((700 / 2) - 90,(700 / 2) + 160,200,70);
        this.exitBB = new BoundingBox(600 - 62,640 - 38,120,50);

        this.credits = false;

        this.spritesheet = ASSET_MANAGER.getAsset("./images/dino.png");
        this.dinoRun = new Animator(this.spritesheet, 8, 287, 175, 460-287, 2, 0.15);
        this.dinoX = -250;
    };

    update() {
        // update dino
        this.dinoX += 4;
        if (this.dinoX > 700) this.dinoX = -250;

        // update if user clicks
        if (this.game.click) {
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            if (this.mouseBB.collide(this.playBB)) {
                this.game.camera.clearEntities();
                this.game.camera.loadLevel(playGame);
            } else if (this.mouseBB.collide(this.creditsBB)) {
                this.credits = true;
            } else {
                if (this.mouseBB.collide(this.exitBB)) {
                    this.credits = false;
                }
            }

            this.game.click = null;
        }

        // update cursor location
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y,1,1);
        }
    };

    draw(ctx) {

        if (!this.credits) {
            this.setBlackStroke(ctx);
            ctx.lineWidth = 6;
            ctx.textAlign = "center";

            //title
            ctx.font = '45px "Press Start 2P"';
            ctx.fillText("Dinosaur Game", 700 / 2, 100);

            ctx.font = '25px "Press Start 2P"';

            //play
            if (this.mouseBB.collide(this.playBB)) {
                this.setRainbowStroke(ctx, this.playBB);
            }
            ctx.fillText("PLAY", 720 / 2, 720 / 2);
            ctx.strokeRect(this.playBB.left, this.playBB.top, this.playBB.width, this.playBB.height);

            this.setBlackStroke(ctx);

            //credits
            if (this.mouseBB.collide(this.creditsBB)) {
                this.setRainbowStroke(ctx, this.creditsBB);
            }
            ctx.fillText("CREDITS", 720 / 2, 720 / 2 + 200);
            ctx.strokeRect(this.creditsBB.left, this.creditsBB.top, this.creditsBB.width, this.creditsBB.height);

            // draw dino
            this.dinoRun.drawFrame(this.game.clockTick, ctx, this.dinoX, 720 / 2 - 250);

        } else {
            this.setBlackStroke(ctx);
            if (this.mouseBB.collide(this.exitBB)) {
                this.setRainbowStroke(ctx, this.exitBB);
            }

            ctx.lineWidth = 6;
            ctx.textAlign = "center";
            ctx.font = '25px "Press Start 2P"';
            ctx.fillText("EXIT", 600, 640);
            ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);

        }

        if (this.credits) {
            this.setBlackStroke(ctx);
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

        }
    };

    setBlackStroke(ctx) {
        ctx.strokeStyle = "Black";
        ctx.fillStyle = "Black";
    };

    setRainbowStroke(ctx, boundingbox) {
        let BB = boundingbox;
        let coordX = BB.left;
        let coordY = BB.top;
        let boxW = BB.left + BB.width;
        let boxH = BB.top + BB.height;
        let rainbow = ctx.createLinearGradient(coordX, coordY, boxW, boxH);

        rainbow.addColorStop(0, "red");
        rainbow.addColorStop(0.2, "orange");
        rainbow.addColorStop(0.4, "green");
        rainbow.addColorStop(0.6, "blue");
        rainbow.addColorStop(0.8, "indigo");
        rainbow.addColorStop(1.0, "violet");

        ctx.strokeStyle = rainbow;
        ctx.fillStyle = rainbow;
    };
}

//--------//
// Levels //
//--------//

let playGame = {
    label: "game"
};

let credits = {
    label: "credits"
};

let titleScreen = {
    label: "title screen"
};