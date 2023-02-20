class Dinosaur {
    constructor(game) {
        this.game = game;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/dino.png");

        this.x = 0;
        this.y = 180;
        this.h = 180;

        this.direction = 0;
        this.state = 0;

        // dino bounding box
        this.updateBB();

        // dino animations
        this.animations = [];
        this.loadAnimations();

        // physics variables
        this.gravity = 1;
        this.dy = 0;
        this.jumpForce = 15;
        this.originalheight = this.h;
        this.grounded = false;
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
        // run
        if (!this.game.jump && !this.game.duck) {
            this.state = 1;
            this.x += 4;
        }

        // duck
        if (this.game.duck) {
            console.log("duck");
        }

        // jump
        if (this.game.jump) {
            this.jump();
        } else {
            this.jumpTimer = 0;
        }

        this.y += this.dy;

        // gravity
        if (this.y + this.h < PARAMS.CANVAS_HEIGHT) {
            this.dy += this.gravity;
            this.grounded = false;
        } else {
            this.dy = 0;
            this.grounded = true;
            this.y = PARAMS.CANVAS_HEIGHT - this.h;
        }

        //Update position
        this.updateBB();

        // stay within canvas bounds
        if (this.x > 700) this.x = 0;
        if (this.x < 0) this.x = 700;
        if (this.y > 700) this.y = 0;
        if (this.y < 0) this.y = 700;
    };

    jump() {
        if (this.grounded && this.jumpTimer == 0) {
            this.jumpTimer = 1;
            this.dy = -this.jumpForce;
        }n 

        else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
            this.jumpTimer++;
            this.dy = -this.jumpForce - (this.jumpTimer / 50);
        }
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

        // debug
        PARAMS.DEBUG = document.getElementById("debug").checked;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
        }
    };
}