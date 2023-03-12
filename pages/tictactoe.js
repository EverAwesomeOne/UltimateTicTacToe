class TicTacToe {
    constructor(game) {
        this.game = game;

        this.turnCount = 1;

        // duplicate code
        this.rowX = (PARAMS.CANVAS_WIDTH - 600) / 2;
        this.rowY = ((PARAMS.CANVAS_HEIGHT - 600) / 2) + 20;  // account for HUD height

        // mouseBB
        this.mouseBB = new BoundingBox(0, 0, 1, 1);

        // set up game
        this.setUpGame();
    };

    setUpGame() {
        this.createBoard();
        this.enableCells();
    }

    createBoard() {
        // row 1
        this.cell0 = new BoundingBox(this.rowX, this.rowY, 200, 200);
        this.cell1 = new BoundingBox(this.rowX + 200, this.rowY, 200, 200);
        this.cell2 = new BoundingBox(this.rowX + 400, this.rowY, 200, 200);

        // row 2
        this.cell3 = new BoundingBox(this.rowX, this.rowY + 200, 200, 200);
        this.cell4 = new BoundingBox(this.rowX + 200, this.rowY + 200, 200, 200);
        this.cell5 = new BoundingBox(this.rowX + 400, this.rowY + 200, 200, 200);

        // row 3
        this.cell6 = new BoundingBox(this.rowX, this.rowY + 400, 200, 200);
        this.cell7 = new BoundingBox(this.rowX + 200, this.rowY + 400, 200, 200);
        this.cell8 = new BoundingBox(this.rowX + 400, this.rowY + 400, 200, 200);

        // inner cells
        this.createInnerCells(this.cell0);
        this.createInnerCells(this.cell1);
        this.createInnerCells(this.cell2);
        this.createInnerCells(this.cell3);
        this.createInnerCells(this.cell4);
        this.createInnerCells(this.cell5);
        this.createInnerCells(this.cell6);
        this.createInnerCells(this.cell7);
        this.createInnerCells(this.cell8);
    };

    createInnerCells(cell) {
        let c1X = cell.x;
        let c2X = cell.x + 200 / 3;
        let c3X = cell.x + 200 - (200 / 3);
        let r1Y = cell.y;
        let r2Y = cell.y + 200 / 3;
        let r3Y = cell.y + 200 - (200 / 3);

        // row 1
        cell.cell0 = new BoundingBox(c1X, r1Y, 200 / 3, 200 / 3);
        cell.cell1 = new BoundingBox(c2X, r1Y, 200 / 3, 200 / 3);
        cell.cell2 = new BoundingBox(c3X, r1Y, 200 / 3, 200 / 3);

        // row 2
        cell.cell3 = new BoundingBox(c1X, r2Y, 200 / 3, 200 / 3);
        cell.cell4 = new BoundingBox(c2X, r2Y, 200 / 3, 200 / 3);
        cell.cell5 = new BoundingBox(c3X, r2Y, 200 / 3, 200 / 3);

        // row 3
        cell.cell6 = new BoundingBox(c1X, r3Y, 200 / 3, 200 / 3);
        cell.cell7 = new BoundingBox(c2X, r3Y, 200 / 3, 200 / 3);
        cell.cell8 = new BoundingBox(c3X, r3Y, 200 / 3, 200 / 3);
    };

    enableCells() {
        this.playableCell00 = true;
        this.playableCell01 = true;
        this.playableCell02 = true;
        this.playableCell03 = true;
        this.playableCell04 = true;
        this.playableCell05 = true;
        this.playableCell06 = true;
        this.playableCell07 = true;
        this.playableCell08 = true;

        this.playableCell10 = true;
        this.playableCell11 = true;
        this.playableCell12 = true;
        this.playableCell13 = true;
        this.playableCell14 = true;
        this.playableCell15 = true;
        this.playableCell16 = true;
        this.playableCell17 = true;
        this.playableCell18 = true;
        this.playableCell10 = true;

        this.playableCell21 = true;
        this.playableCell22 = true;
        this.playableCell23 = true;
        this.playableCell24 = true;
        this.playableCell25 = true;
        this.playableCell26 = true;
        this.playableCell27 = true;
        this.playableCell28 = true;
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

            // Cell 0
            if (this.mouseBB.collide(this.cell0)) {
                // Cell 00
                if (this.mouseBB.collide(this.cell0.cell0) && this.playableCell00) {
                    this.playableCell00 = false;
                    this.cXO = this.X;
                    this.turnCount++;
                }
                // Cell 01
                else if (this.mouseBB.collide(this.cell0.cell1) && this.playableCell01) {
                    this.playableCell01 = false;
                    this.cX1 = this.X;
                    this.turnCount++;
                }
                // Cell 02
                else if (this.mouseBB.collide(this.cell0.cell2) && this.playableCell02) {
                    this.playableCell02 = false;
                    this.cX2 = this.X;
                    this.turnCount++;
                }
                // Cell 03
                else if (this.mouseBB.collide(this.cell0.cell3) && this.playableCell03) {
                    this.playableCell03 = false;
                    this.cX3 = this.X;
                    this.turnCount++;
                }
                // Cell 04
                else if (this.mouseBB.collide(this.cell0.cell4) && this.playableCell04) {
                    this.playableCell04 = false;
                    this.cX4 = this.X;
                    this.turnCount++;
                }
                // Cell 05
                else if (this.mouseBB.collide(this.cell0.cell5) && this.playableCell05) {
                    this.playableCell05 = false;
                    this.cX5 = this.X;
                    this.turnCount++;
                }
                // Cell 06
                else if (this.mouseBB.collide(this.cell0.cell6) && this.playableCell06) {
                    this.playableCell06 = false;
                    this.cX6 = this.X;
                    this.turnCount++;
                }
                // Cell 07
                else if (this.mouseBB.collide(this.cell0.cell7) && this.playableCell07) {
                    this.playableCell07 = false;
                    this.cX7 = this.X;
                    this.turnCount++;
                }
                // Cell 08
                else if (this.mouseBB.collide(this.cell0.cell8) && this.playableCell08) {
                    this.playableCell08 = false;
                    this.cX8 = this.X;
                    this.turnCount++;
                }
                console.log(this.turnCount)
            }

            // reset user click
            this.game.click = null;
        }

        // update mouse movement
        if (this.game.mouse) {
            this.mouseBB = new BoundingBox(this.game.mouse.x, this.game.mouse.y, 1, 1);
        }

        this.setPlayer();
    };

    setPlayer() {
        if (this.turnCount % 2 === 0) {
            this.X = 0;
        } else {
            this.X = 1;
        }
    }

    setTurnDisplayText() {
        let playerXText = "Player X's Turn!";
        let playerOText = "Player O's Turn!";

        if (this.X === 1) {
            return playerXText;
        } else {
            return playerOText;
        }
    }

    draw(ctx) {
        setCustomStroke(ctx, "black");
        let turnText = this.setTurnDisplayText();
        ctx.fillText(turnText, PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT - 8);

        this.drawBoard(ctx);

        if (this.turnCount === 1) {
            setCustomStroke(ctx, "black");
            this.playAnywhere(ctx);
        }

        if (!this.playableCell00) {
            this.drawTurn(ctx, this.cell0.cell0, this.cXO);
        } if (!this.playableCell01) {
            this.drawTurn(ctx, this.cell0.cell1, this.cX1);
        } if (!this.playableCell02) {
            this.drawTurn(ctx, this.cell0.cell2, this.cX2);
        } if (!this.playableCell03) {
            this.drawTurn(ctx, this.cell0.cell3, this.cX3);
        } if (!this.playableCell04) {
            this.drawTurn(ctx, this.cell0.cell4, this.cX4);
        } if (!this.playableCell05) {
            this.drawTurn(ctx, this.cell0.cell5, this.cX5);
        } if (!this.playableCell06) {
            this.drawTurn(ctx, this.cell0.cell6, this.cX6);
        } if (!this.playableCell07) {
            this.drawTurn(ctx, this.cell0.cell7, this.cX7);
        } if (!this.playableCell08) {
            this.drawTurn(ctx, this.cell0.cell8, this.cX8);
        }

    };

    // draw main board grid
    drawBoard(ctx) {
        // draw big board
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

        // draw inner cells of big board
        this.drawCells(ctx);
    };

    drawCells(ctx) {
        this.drawInnerCellGrid(ctx, this.cell0, "pink");
        this.drawInnerCellGrid(ctx, this.cell1, "red");
        this.drawInnerCellGrid(ctx, this.cell2, "orange");
        this.drawInnerCellGrid(ctx, this.cell3, "maroon");
        this.drawInnerCellGrid(ctx, this.cell4, "green");
        this.drawInnerCellGrid(ctx, this.cell5, "teal");
        this.drawInnerCellGrid(ctx, this.cell6, "navy");
        this.drawInnerCellGrid(ctx, this.cell7, "blue");
        this.drawInnerCellGrid(ctx, this.cell8, "purple");
    };

    drawInnerCellGrid(ctx, cell, color) {
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
    };

    drawTurn(ctx, cell, X) {
        setCustomStroke(ctx, "black");
        ctx.beginPath();
        if (X === 1) {
            ctx.moveTo(cell.x + 10, cell.y + 10);
            ctx.lineTo(cell.x + cell.width - 10, cell.y + cell.height - 10);
            ctx.moveTo(cell.x + 10, cell.y + cell.height - 10);
            ctx.lineTo(cell.x + cell.width - 10, cell.y + 10);
            ctx.stroke();
        } else if (X === 0) {
            let radius = 20;
            ctx.arc(cell.x + cell.width / 2, cell.y + cell.height / 2, radius, 0, 2 * Math.PI, false);
        }
        ctx.stroke();
    };

    // player help
    playAnywhere(ctx) {
        let playHereBB = new BoundingBox(this.rowX, this.rowY, 600, 600);
        setRainbowStroke(ctx, playHereBB);
        ctx.strokeRect(this.rowX, this.rowY, 600, 600);
    };

    playInCell(ctx, cell, dimension) {
        let playHereBB = new BoundingBox(cell.x, cell.y, dimension, dimension);
        setRainbowStroke(ctx, playHereBB);
        ctx.strokeRect(cell.x, cell.y, dimension, dimension);
    };
}