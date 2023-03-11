class TicTacToe {
    constructor(game) {
        this.game = game;

        // bounding boxes
        this.mouseBB = new BoundingBox(0,0,1,1);
        this.boardBoundingBoxes();
    }

    boardBoundingBoxes() {
        let rowX = (PARAMS.CANVAS_WIDTH - 300) / 2;
        let rowY = (PARAMS.CANVAS_HEIGHT - 300) / 2;

        // row 1
        this.cell0 = new BoundingBox(rowX, rowY,100,100);
        this.cell1 = new BoundingBox(rowX + 100, rowY,100,100);
        this.cell2 = new BoundingBox(rowX + 200, rowY,100,100);

        // row 2
        this.cell3 = new BoundingBox(rowX, rowY + 100,100,100);
        this.cell4 = new BoundingBox(rowX + 100, rowY + 100,100,100);

        // row 3
        this.cell6 = new BoundingBox(rowX, rowY + 200,100,100);
        this.cell7 = new BoundingBox(rowX + 100, rowY + 200,100,100);
        this.cell8 = new BoundingBox(rowX + 200, rowY + 200,100,100);
    }

    update() {
        // update if user clicks
        if (this.game.click) {
            // update mouse location
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            // reset user click
            this.game.click = null;
        }

        // update mouse movement
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y,1,1);
        }
    }

    draw(ctx) {
        this.drawBoard(ctx);
    }

    drawBoard(ctx) {
        let rowX = (PARAMS.CANVAS_WIDTH - 300) / 2;
        let rowY = (PARAMS.CANVAS_HEIGHT - 300) / 2;

        setBlackStroke(ctx);

        ctx.beginPath();

        // left vertical line
        ctx.moveTo(rowX + 100, rowY);
        ctx.lineTo(rowX + 100, rowY + 300);
        // right vertical line
        ctx.moveTo(rowX + 200, rowY);
        ctx.lineTo(rowX + 200, rowY + 300);

        // top horizontal line
        ctx.moveTo(rowX, rowY + 100);
        ctx.lineTo(rowX + 300, rowY + 100);

        // bottom horizontal line
        ctx.moveTo(rowX, rowY + 200);
        ctx.lineTo(rowX + 300, rowY + 200);

        ctx.stroke();
    }
}