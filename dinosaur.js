class Dinosaur {
    constructor(game) {
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./images/dino.png");

        this.x = 0;
        this.y = 527;

        this.direction = 0;
        this.state = 0;

        this.updateBB();

        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations() {
        for (let i = 0; i < 5; i++) { // four states
            this.animations.push([]);
            for (let j = 0; j < 1; j++) { // one directions
                this.animations[i].push([]);
            }
        }

        // state = 0 is the idle animation
        this.animations[0][0] = new Animator(this.spritesheet, 8, 55, 160, 228-55, 1, 0.2);

        // state = 1 is the walking animation
        this.animations[1][0] = new Animator(this.spritesheet, 8, 287, 175, 460-287, 2, 0.2);

        // state = 2 is the duck animation
        this.animations[2][0] = new Animator(this.spritesheet, 0, 655, 128, 210, 2, 0.2);

        // state = 4 is the jump animation
        this.animations[3][0] = new Animator(this.spritesheet, 0, 655, 128, 210, 2, 0.2);

        // state = 4 is the dead animation
        this.animations[4][0] = new Animator(this.spritesheet, 196, 55, 356-196, 228-55, 1, 0.2);


    };

    updateBB() {
        this.BB = new BoundingBox(this.x, this.y, 128, 210);
    };

    update() {
        //movement
        if (!this.game.up && !this.game.down && !this.game.left && !this.game.right) {
            this.state = 0; // idle
        } else {
            if (this.game.right) {
                this.state = 1;
                this.x += 4;
            }
        }


        //Update position
        this.updateBB();

        // stay within canvas bounds
        if (this.x > 700) this.x = 0;
        if (this.x < 0) this.x = 700;
        if (this.y > 700) this.y = 0;
        if (this.y < 0) this.y = 700;
    };
    draw(ctx) {
        // info box
        ctx.textAlign = "left";
        ctx.font = '15px "Press Start 2P"';
        ctx.strokeStyle = "Black";
        ctx.fillStyle = "Black";
        ctx.fillText("Dino can only move right.", 5, 60);
        ctx.fillText("Use arrow or 'd' key to move right.", 5, 90);
        ctx.fillText("Eventually there will only be jump and duck", 5, 120);
        ctx.fillText("movement.", 5, 150);


        // dino
        this.animations[this.state][this.direction].drawFrame(this.game.clockTick, ctx, this.x, this.y);

        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
        }
    };
}