class TicTacToe {
    constructor(game) {
        this.game = game;

        // duplicate code
        this.rowX = (PARAMS.CANVAS_WIDTH - 600) / 2;
        this.rowY = ((PARAMS.CANVAS_HEIGHT - 600) / 2) + 20;  // account for HUD height

        // bounding boxes
        this.mouseBB = new BoundingBox(0,0,1,1);
        this.boardBoundingBoxes();
    }

    boardBoundingBoxes() {
        // row 1
        this.cell0 = new BoundingBox(this.rowX, this.rowY,200,200);
        this.cell1 = new BoundingBox(this.rowX + 200, this.rowY,200,200);
        this.cell2 = new BoundingBox(this.rowX + 400, this.rowY,200,200);

        // row 2
        this.cell3 = new BoundingBox(this.rowX, this.rowY + 200,200,200);
        this.cell4 = new BoundingBox(this.rowX + 200, this.rowY + 200,200,200);
        this.cell5 = new BoundingBox(this.rowX + 400, this.rowY + 200,200,200);

        // row 3
        this.cell6 = new BoundingBox(this.rowX, this.rowY + 400,200,200);
        this.cell7 = new BoundingBox(this.rowX + 200, this.rowY + 400,200,200);
        this.cell8 = new BoundingBox(this.rowX + 400, this.rowY + 400,200,200);
    }

    update() {

        // win game
        // tie
        // lose game

        // play game
        // update if user clicks
        if (this.game.click) {
            // update mouse location
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            if (this.mouseBB.collide(this.cell0)) {

            }

            else if (this.mouseBB.collide(this.cell1)) {

            }

            else if (this.mouseBB.collide(this.cell2)) {

            }

            else if (this.mouseBB.collide(this.cell3)) {

            }

            else if (this.mouseBB.collide(this.cell4)) {

            }

            else if (this.mouseBB.collide(this.cell5)) {

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
        this.drawBoard(ctx);
        //this.playAnywhere(ctx);
        //this.playInCell(ctx, this.cell5);
        this.drawCells(ctx);
    }

    // draw main board grid
    drawBoard(ctx) {
        setCustomStroke(ctx, "black");

        ctx.beginPath();

        // left vertical line
        ctx.moveTo(this.rowX + 200, this.rowY);
        ctx.lineTo(this.rowX + 200, this.rowY + 600);
        // right vertical line
        ctx.moveTo(this.rowX + 400, this.rowY);
        ctx.lineTo(this.rowX + 400, this.rowY + 600);

        // top horizontal line
        ctx.moveTo(this.rowX, this.rowY + 200);
        ctx.lineTo(this.rowX + 600, this.rowY + 200);

        // bottom horizontal line
        ctx.moveTo(this.rowX, this.rowY + 400);
        ctx.lineTo(this.rowX + 600, this.rowY + 400);

        ctx.stroke();
    }

    // player help
    playAnywhere(ctx) {
        let playHereBB = new BoundingBox(this.rowX, this.rowY,600,600);
        setRainbowStroke(ctx, playHereBB);
        ctx.strokeRect(this.rowX, this.rowY,600,600);
    }

    playInCell(ctx, cell) {
        let playHereBB = new BoundingBox(cell.x, cell.y,200,200);
        setRainbowStroke(ctx, playHereBB);
        ctx.strokeRect(cell.x, cell.y,200,200);
    }

    drawCells(ctx) {
        this.drawCellGrid(ctx, this.cell0, "pink");
        this.drawCellGrid(ctx, this.cell1, "red");
        this.drawCellGrid(ctx, this.cell2, "orange");
        this.drawCellGrid(ctx, this.cell3, "maroon");
        this.drawCellGrid(ctx, this.cell4, "green");
        this.drawCellGrid(ctx, this.cell5, "teal");
        this.drawCellGrid(ctx, this.cell6, "navy");
        this.drawCellGrid(ctx, this.cell7, "blue");
        this.drawCellGrid(ctx, this.cell8, "purple");

    }

    drawCellGrid(ctx, cell, color) {
        setCustomStroke(ctx, color);

        ctx.beginPath();

        // left vertical line
        ctx.moveTo(cell.x + (200 / 3), cell.y + 10);
        ctx.lineTo(cell.x + (200 / 3), cell.y + 200 - 10);
        // right vertical line
        ctx.moveTo(cell.x + 200 - (200 / 3), cell.y + 10);
        ctx.lineTo(cell.x + 200 - (200 / 3), cell.y + 200 - 10);

        // top horizontal line
        ctx.moveTo(cell.x + 10, cell.y + (200 / 3));
        ctx.lineTo(cell.x + 200 - 10, cell.y + (200 / 3));

        // bottom horizontal line
        ctx.moveTo(cell.x + 10, cell.y + 200 - (200 / 3));
        ctx.lineTo(cell.x + 200 - 10, cell.y + 200 - (200 / 3));

        ctx.stroke();
    }

    boardCell0() {

    }

    boardCell1() {

    }

    boardCell2() {

    }

    boardCell3() {

    }

    boardCell4() {

    }

    boardCell5() {

    }

    boardCell6() {

    }

    boardCell7() {

    }

    boardCell8() {

    }
}