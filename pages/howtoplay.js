class HowToPlay {
    constructor(game) {
        this.game = game;

        // bounding boxes
        this.mouseBB = new BoundingBox(0,0,1,1);
        this.exitBB = new BoundingBox(PARAMS.CANVAS_WIDTH / 2 - 62,PARAMS.CANVAS_HEIGHT - 70,120,50);
    }

    update() {
        // update if user clicks
        if (this.game.click) {
            // update mouse location
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y,1,1);

            // exit credits screen
            if (this.mouseBB.collide(this.exitBB)) {
                this.removeFromWorld = true;
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
        setCustomStroke(ctx, "white");
        ctx.fillRect(0,0,PARAMS.CANVAS_WIDTH,PARAMS.CANVAS_HEIGHT);

        // credits screen
        setCustomStroke(ctx, "black");
        ctx.lineWidth = 6;
        ctx.textAlign = "center";
        ctx.font = '45px "Press Start 2P"';
        ctx.fillText("How To Play",720 / 2, 80);

        ctx.textAlign = "left";
        ctx.font = '15px "Press Start 2P"';

        ctx.fillText("OBJECTIVE---------------------------------", 40, 120);
        ctx.fillText("Win the smaller tic tac toe game boards to", 40, 140);
        ctx.fillText("win the big tic tac toe game board!", 40, 160);
        //ctx.fillText("------------------------------------------", 40, 180);
        ctx.fillText("RULES-------------------------------------", 40, 200);
        ctx.fillText("The 1st player can go anywhere.", 40, 220);
        ctx.fillText("After that, each player's next move is", 40, 260);
        ctx.fillText("determined by the current player's move.", 40, 280);
        ctx.fillText("This is because each smaller tic tac toe", 40, 320);
        ctx.fillText("grid corresponds to the large grid.", 40, 340);
        ctx.fillText("So, if Player X marks the center cell of", 40, 380);
        ctx.fillText("the small board within the top left cell", 40, 400);
        ctx.fillText("of the large board, then Player O's next", 40, 420);
        ctx.fillText("move will have to be within the center", 40, 440);
        ctx.fillText("cell of the large board.", 40, 460);
        ctx.fillText("If a player sends the next player to a", 40, 500);
        ctx.fillText("completed cell, then that next player can", 40, 520);
        ctx.fillText("make their next move anywhere.", 40, 540);
        //ctx.fillText("------------------------------------------", 40, 560);
        ctx.fillText("CONTROLS----------------------------------", 40, 580);
        ctx.fillText("Use your mouse to click the cells", 40, 600);
        ctx.fillText("on-screen.", 40, 620);

        // exit button
        //setCustomStroke(ctx, "black");
        ctx.lineWidth = 6;
        ctx.textAlign = "center";
        ctx.font = '25px "Press Start 2P"';
        if (this.mouseBB.collide(this.exitBB)) {
            setRainbowStroke(ctx, this.exitBB, true);
        }
        ctx.fillText("EXIT", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT - 30);
        ctx.strokeRect(this.exitBB.left, this.exitBB.top, this.exitBB.width, this.exitBB.height);
    }
}