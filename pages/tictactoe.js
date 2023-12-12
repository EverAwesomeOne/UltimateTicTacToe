class TicTacToe {
    constructor(game) {
        this.game = game;

        this.turnCount = 1;
        this.rowX = (PARAMS.CANVAS_WIDTH - 600) / 2;
        this.rowY = ((PARAMS.CANVAS_HEIGHT - 600) / 2) + 20;  // account for HUD height

        this.win = false;
        this.showChatBox = false;

        this.hints = [];
        this.playableCell = [];

        // BBs
        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.exitChatBB = new BoundingBox(PARAMS.CANVAS_WIDTH / 2 - 65, ((2 * PARAMS.CANVAS_HEIGHT) / 3) - 72,130,50);
        // set up game
        this.initializeHintsArray();
        this.initializeEnableCellsArray();
        this.createBoard();
    };

    update() {
        // determine whole game board win, tie
        this.determineGameWin();
        this.determineGameTie();
        if (this.win) {
            this.game.camera.loadLevel(winScreen);
        }

        if (this.tie) {
            this.game.camera.loadLevel(tieScreen);
        }

        // determine win, tie on individual cells
        this.determineWin();
        this.determineTie();

        // update if user clicks
        if (this.game.click) {
            // update mouse location
            this.mouseBB = new BoundingBox(this.game.click.x, this.game.click.y, 1, 1);

            this.updateCell0();
            this.updateCell1();
            this.updateCell2();
            this.updateCell3();
            this.updateCell4();
            this.updateCell5();
            this.updateCell6();
            this.updateCell7();
            this.updateCell8();

            // chatBox
            if (this.showChatBox) {
                if (this.mouseBB.collide(this.exitChatBB)) {
                    this.showChatBox = false;
                    this.enableCells();
                }
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

    updateCell8() {
        // Cell 7
        if (this.mouseBB.collide(this.cell8)) {
            this.disableHints();
            // Cell 80
            if (this.mouseBB.collide(this.cell8.cell0) && this.playableCell[8][0]) {
                this.playableCell[8][0] = false;
                this.cX80 = this.X;

                if (this.playableCell0) {
                    this.hints[8][0] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 81
            else if (this.mouseBB.collide(this.cell8.cell1) && this.playableCell[8][1]) {
                this.playableCell[8][1] = false;
                this.cX81 = this.X;

                if (this.playableCell1) {
                    this.hints[8][1] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 82
            else if (this.mouseBB.collide(this.cell8.cell2) && this.playableCell[8][2]) {
                this.playableCell[8][2] = false;
                this.cX82 = this.X;

                if (this.playableCell2) {
                    this.hints[8][2] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 83
            else if (this.mouseBB.collide(this.cell8.cell3) && this.playableCell[8][3]) {
                this.playableCell[8][3] = false;
                this.cX83 = this.X;

                if (this.playableCell3) {
                    this.hints[8][3] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 84
            else if (this.mouseBB.collide(this.cell8.cell4) && this.playableCell[8][4]) {
                this.playableCell[8][4] = false;
                this.cX84 = this.X;

                if (this.playableCell4) {
                    this.hints[8][4] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 85
            else if (this.mouseBB.collide(this.cell8.cell5) && this.playableCell[8][5]) {
                this.playableCell[8][5] = false;
                this.cX85 = this.X;

                if (this.playableCell5) {
                    this.hints[8][5] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 86
            else if (this.mouseBB.collide(this.cell8.cell6) && this.playableCell[8][6]) {
                this.playableCell[8][6] = false;
                this.cX86 = this.X;

                if (this.playableCell6) {
                    this.hints[8][6] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 87
            else if (this.mouseBB.collide(this.cell8.cell7) && this.playableCell[8][7]) {
                this.playableCell[8][7] = false;
                this.cX87 = this.X;

                if (this.playableCell7) {
                    this.hints[8][7] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 88
            else if (this.mouseBB.collide(this.cell8.cell8) && this.playableCell[8][8]) {
                this.playableCell[8][8] = false;
                this.cX88 = this.X;

                if (this.playableCell8) {
                    this.hints[8][8] = true;
                } else {
                    this.anywhere = true;
                }
            }

            else {
                return;
            }
            this.turnCount++;
        }
    };

    updateCell7() {
        // Cell 7
        if (this.mouseBB.collide(this.cell7)) {
            this.disableHints();
            // Cell 70
            if (this.mouseBB.collide(this.cell7.cell0) && this.playableCell[7][0]) {
                this.playableCell[7][0] = false;
                this.cX70 = this.X;

                if (this.playableCell0) {
                    this.hints[7][0] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 71
            else if (this.mouseBB.collide(this.cell7.cell1) && this.playableCell[7][1]) {
                this.playableCell[7][1] = false;
                this.cX71 = this.X;

                if (this.playableCell1) {
                    this.hints[7][1] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 72
            else if (this.mouseBB.collide(this.cell7.cell2) && this.playableCell[7][2]) {
                this.playableCell[7][2] = false;
                this.cX72 = this.X;

                if (this.playableCell2) {
                    this.hints[7][2] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 73
            else if (this.mouseBB.collide(this.cell7.cell3) && this.playableCell[7][3]) {
                this.playableCell[7][3] = false;
                this.cX73 = this.X;

                if (this.playableCell3) {
                    this.hints[7][3] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 74
            else if (this.mouseBB.collide(this.cell7.cell4) && this.playableCell[7][4]) {
                this.playableCell[7][4] = false;
                this.cX74 = this.X;

                if (this.playableCell4) {
                    this.hints[7][4] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 75
            else if (this.mouseBB.collide(this.cell7.cell5) && this.playableCell[7][5]) {
                this.playableCell[7][5] = false;
                this.cX75 = this.X;

                if (this.playableCell5) {
                    this.hints[7][5] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 76
            else if (this.mouseBB.collide(this.cell7.cell6) && this.playableCell[7][6]) {
                this.playableCell[7][6] = false;
                this.cX76 = this.X;

                if (this.playableCell6) {
                    this.hints[7][6] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 77
            else if (this.mouseBB.collide(this.cell7.cell7) && this.playableCell[7][7]) {
                this.playableCell[7][7] = false;
                this.cX77 = this.X;

                if (this.playableCell7) {
                    this.hints[7][7] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 78
            else if (this.mouseBB.collide(this.cell7.cell8) && this.playableCell[7][8]) {
                this.playableCell[7][8] = false;
                this.cX78 = this.X;

                if (this.playableCell8) {
                    this.hints[7][8] = true;
                } else {
                    this.anywhere = true;
                }
            }

            else {
                return;
            }
            this.turnCount++;
        }
    };

    updateCell6() {
        // Cell 6
        if (this.mouseBB.collide(this.cell6)) {
            this.disableHints();
            // Cell 60
            if (this.mouseBB.collide(this.cell6.cell0) && this.playableCell[6][0]) {
                this.playableCell[6][0] = false;
                this.cX60 = this.X;

                if (this.playableCell0) {
                    this.hints[6][0] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 61
            else if (this.mouseBB.collide(this.cell6.cell1) && this.playableCell[6][1]) {
                this.playableCell[6][1] = false;
                this.cX61 = this.X;

                if (this.playableCell1) {
                    this.hints[6][1] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 62
            else if (this.mouseBB.collide(this.cell6.cell2) && this.playableCell[6][2]) {
                this.playableCell[6][2] = false;
                this.cX62 = this.X;

                if (this.playableCell2) {
                    this.hints[6][2] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 63
            else if (this.mouseBB.collide(this.cell6.cell3) && this.playableCell[6][3]) {
                this.playableCell[6][3] = false;
                this.cX63 = this.X;

                if (this.playableCell3) {
                    this.hints[6][3] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 64
            else if (this.mouseBB.collide(this.cell6.cell4) && this.playableCell[6][4]) {
                this.playableCell[6][4] = false;
                this.cX64 = this.X;

                if (this.playableCell4) {
                    this.hints[6][4] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 65
            else if (this.mouseBB.collide(this.cell6.cell5) && this.playableCell[6][5]) {
                this.playableCell[6][5] = false;
                this.cX65 = this.X;

                if (this.playableCell5) {
                    this.hints[6][5] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 66
            else if (this.mouseBB.collide(this.cell6.cell6) && this.playableCell[6][6]) {
                this.playableCell[6][6] = false;
                this.cX66 = this.X;

                if (this.playableCell6) {
                    this.hints[6][6] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 67
            else if (this.mouseBB.collide(this.cell6.cell7) && this.playableCell[6][7]) {
                this.playableCell[6][7] = false;
                this.cX67 = this.X;

                if (this.playableCell6) {
                    this.hints[6][7] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 68
            else if (this.mouseBB.collide(this.cell6.cell8) && this.playableCell[6][8]) {
                this.playableCell[6][8] = false;
                this.cX68 = this.X;

                if (this.playableCell8) {
                    this.hints[6][8] = true;
                } else {
                    this.anywhere = true;
                }
            }

            else {
                return;
            }
            this.turnCount++;
        }
    };

    updateCell5() {
        // Cell 5
        if (this.mouseBB.collide(this.cell5)) {
            this.disableHints();
            // Cell 50
            if (this.mouseBB.collide(this.cell5.cell0) && this.playableCell[5][0]) {
                this.playableCell[5][0] = false;
                this.cX50 = this.X;

                if (this.playableCell0) {
                    this.hints[5][0] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 51
            else if (this.mouseBB.collide(this.cell5.cell1) && this.playableCell[5][1]) {
                this.playableCell[5][1] = false;
                this.cX51 = this.X;

                if (this.playableCell1) {
                    this.hints[5][1] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 52
            else if (this.mouseBB.collide(this.cell5.cell2) && this.playableCell[5][2]) {
                this.playableCell[5][2] = false;
                this.cX52 = this.X;

                if (this.playableCell2) {
                    this.hints[5][2] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 53
            else if (this.mouseBB.collide(this.cell5.cell3) && this.playableCell[5][3]) {
                this.playableCell[5][3] = false;
                this.cX53 = this.X;

                if (this.playableCell3) {
                    this.hints[5][3] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 54
            else if (this.mouseBB.collide(this.cell5.cell4) && this.playableCell[5][4]) {
                this.playableCell[5][4] = false;
                this.cX54 = this.X;

                if (this.playableCell4) {
                    this.hints[5][4] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 55
            else if (this.mouseBB.collide(this.cell5.cell5) && this.playableCell[5][5]) {
                this.playableCell[5][5] = false;
                this.cX55 = this.X;

                if (this.playableCell5) {
                    this.hints[5][5] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 56
            else if (this.mouseBB.collide(this.cell5.cell6) && this.playableCell[5][6]) {
                this.playableCell[5][6] = false;
                this.cX56 = this.X;

                if (this.playableCell6) {
                    this.hints[5][6] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 57
            else if (this.mouseBB.collide(this.cell5.cell7) && this.playableCell[5][7]) {
                this.playableCell[5][7] = false;
                this.cX57 = this.X;

                if (this.playableCell5) {
                    this.hints[5][7] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 58
            else if (this.mouseBB.collide(this.cell5.cell8) && this.playableCell[5][8]) {
                this.playableCell[5][8] = false;
                this.cX58 = this.X;

                if (this.playableCell8) {
                    this.hints[5][8] = true;
                } else {
                    this.anywhere = true;
                }
            }

            else {
                return;
            }
            this.turnCount++;
        }
    };

    updateCell4() {
        // Cell 4
        if (this.mouseBB.collide(this.cell4)) {
            this.disableHints();
            // Cell 40
            if (this.mouseBB.collide(this.cell4.cell0) && this.playableCell[4][0]) {
                this.playableCell[4][0] = false;
                this.cX40 = this.X;

                if (this.playableCell0) {
                    this.hints[4][0] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 41
            else if (this.mouseBB.collide(this.cell4.cell1) && this.playableCell[4][1]) {
                this.playableCell[4][1] = false;
                this.cX41 = this.X;

                if (this.playableCell1) {
                    this.hints[4][1] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 42
            else if (this.mouseBB.collide(this.cell4.cell2) && this.playableCell[4][2]) {
                this.playableCell[4][2] = false;
                this.cX42 = this.X;

                if (this.playableCell2) {
                    this.hints[4][2] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 43
            else if (this.mouseBB.collide(this.cell4.cell3) && this.playableCell[4][3]) {
                this.playableCell[4][3] = false;
                this.cX43 = this.X;

                if (this.playableCell3) {
                    this.hints[4][3] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 44
            else if (this.mouseBB.collide(this.cell4.cell4) && this.playableCell[4][4]) {
                this.playableCell[4][4] = false;
                this.cX44 = this.X;

                if (this.playableCell4) {
                    this.hints[4][4] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 45
            else if (this.mouseBB.collide(this.cell4.cell5) && this.playableCell[4][5]) {
                this.playableCell[4][5] = false;
                this.cX45 = this.X;

                if (this.playableCell5) {
                    this.hints[4][5] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 46
            else if (this.mouseBB.collide(this.cell4.cell6) && this.playableCell[4][6]) {
                this.playableCell[4][6] = false;
                this.cX46 = this.X;

                if (this.playableCell6) {
                    this.hints[4][6] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 47
            else if (this.mouseBB.collide(this.cell4.cell7) && this.playableCell[4][7]) {
                this.playableCell[4][7] = false;
                this.cX47 = this.X;

                if (this.playableCell4) {
                    this.hints[4][7] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 48
            else if (this.mouseBB.collide(this.cell4.cell8) && this.playableCell[4][8]) {
                this.playableCell[4][8] = false;
                this.cX48 = this.X;

                if (this.playableCell8) {
                    this.hints[4][8] = true;
                } else {
                    this.anywhere = true;
                }
            }

            else {
                return;
            }
            this.turnCount++;
        }
    };

    updateCell3() {
        // Cell 3
        if (this.mouseBB.collide(this.cell3)) {
            this.disableHints();
            // Cell 30
            if (this.mouseBB.collide(this.cell3.cell0) && this.playableCell[3][0]) {
                this.playableCell[3][0] = false;
                this.cX30 = this.X;

                if (this.playableCell0) {
                    this.hints[3][0] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 31
            else if (this.mouseBB.collide(this.cell3.cell1) && this.playableCell[3][1]) {
                this.playableCell[3][1] = false;
                this.cX31 = this.X;

                if (this.playableCell1) {
                    this.hints[3][1] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 32
            else if (this.mouseBB.collide(this.cell3.cell2) && this.playableCell[3][2]) {
                this.playableCell[3][2] = false;
                this.cX32 = this.X;

                if (this.playableCell2) {
                    this.hints[3][2] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 33
            else if (this.mouseBB.collide(this.cell3.cell3) && this.playableCell[3][3]) {
                this.playableCell[3][3] = false;
                this.cX33 = this.X;

                if (this.playableCell3) {
                    this.hints[3][3] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 34
            else if (this.mouseBB.collide(this.cell3.cell4) && this.playableCell[3][4]) {
                this.playableCell[3][4] = false;
                this.cX34 = this.X;

                if (this.playableCell4) {
                    this.hints[3][4] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 35
            else if (this.mouseBB.collide(this.cell3.cell5) && this.playableCell[3][5]) {
                this.playableCell[3][5] = false;
                this.cX35 = this.X;

                if (this.playableCell5) {
                    this.hints[3][5] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 36
            else if (this.mouseBB.collide(this.cell3.cell6) && this.playableCell[3][6]) {
                this.playableCell[3][6] = false;
                this.cX36 = this.X;

                if (this.playableCell6) {
                    this.hints[3][6] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 37
            else if (this.mouseBB.collide(this.cell3.cell7) && this.playableCell[3][7]) {
                this.playableCell[3][7] = false;
                this.cX37 = this.X;

                if (this.playableCell3) {
                    this.hints[3][7] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 38
            else if (this.mouseBB.collide(this.cell3.cell8) && this.playableCell[3][8]) {
                this.playableCell[3][8] = false;
                this.cX38 = this.X;

                if (this.playableCell8) {
                    this.hints[3][8] = true;
                } else {
                    this.anywhere = true;
                }
            }

            else {
                return;
            }
            this.turnCount++;
        }
    };

    updateCell2() {
        // Cell 2
        if (this.mouseBB.collide(this.cell2)) {
            this.disableHints();
            // Cell 20
            if (this.mouseBB.collide(this.cell2.cell0) && this.playableCell[2][0]) {
                this.playableCell[2][0] = false;
                this.cX20 = this.X;

                if (this.playableCell0) {
                    this.hints[2][0] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 21
            else if (this.mouseBB.collide(this.cell2.cell1) && this.playableCell[2][1]) {
                this.playableCell[2][1] = false;
                this.cX21 = this.X;

                if (this.playableCell1) {
                    this.hints[2][1] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 22
            else if (this.mouseBB.collide(this.cell2.cell2) && this.playableCell[2][2]) {
                this.playableCell[2][2] = false;
                this.cX22 = this.X;

                if (this.playableCell2) {
                    this.hints[2][2] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 23
            else if (this.mouseBB.collide(this.cell2.cell3) && this.playableCell[2][3]) {
                this.playableCell[2][3] = false;
                this.cX23 = this.X;

                if (this.playableCell3) {
                    this.hints[2][3] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 24
            else if (this.mouseBB.collide(this.cell2.cell4) && this.playableCell[2][4]) {
                this.playableCell[2][4] = false;
                this.cX24 = this.X;

                if (this.playableCell4) {
                    this.hints[2][4] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 25
            else if (this.mouseBB.collide(this.cell2.cell5) && this.playableCell[2][5]) {
                this.playableCell[2][5] = false;
                this.cX25 = this.X;

                if (this.playableCell5) {
                    this.hints[2][5] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 26
            else if (this.mouseBB.collide(this.cell2.cell6) && this.playableCell[2][6]) {
                this.playableCell[2][6] = false;
                this.cX26 = this.X;

                if (this.playableCell6) {
                    this.hints[2][6] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 27
            else if (this.mouseBB.collide(this.cell2.cell7) && this.playableCell[2][7]) {
                this.playableCell[2][7] = false;
                this.cX27 = this.X;

                if (this.playableCell2) {
                    this.hints[2][7] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 28
            else if (this.mouseBB.collide(this.cell2.cell8) && this.playableCell[2][8]) {
                this.playableCell[2][8] = false;
                this.cX28 = this.X;

                if (this.playableCell8) {
                    this.hints[2][8] = true;
                } else {
                    this.anywhere = true;
                }
            }

            else {
                return;
            }
            this.turnCount++;
        }
    };

    updateCell1() {
        // Cell 1
        if (this.mouseBB.collide(this.cell1)) {
            this.disableHints();
            // Cell 10
            if (this.mouseBB.collide(this.cell1.cell0) && this.playableCell[1][0]) {
                this.playableCell[1][0] = false;
                this.cX10 = this.X;

                if (this.playableCell0) {
                    this.hints[1][0] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 11
            else if (this.mouseBB.collide(this.cell1.cell1) && this.playableCell[1][1]) {
                this.playableCell[1][1] = false;
                this.cX11 = this.X;

                if (this.playableCell1) {
                    this.hints[1][1] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 12
            else if (this.mouseBB.collide(this.cell1.cell2) && this.playableCell[1][2]) {
                this.playableCell[1][2] = false;
                this.cX12 = this.X;

                if (this.playableCell2) {
                    this.hints[1][2] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 13
            else if (this.mouseBB.collide(this.cell1.cell3) && this.playableCell[1][3]) {
                this.playableCell[1][3] = false;
                this.cX13 = this.X;

                if (this.playableCell3) {
                    this.hints[1][3] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 14
            else if (this.mouseBB.collide(this.cell1.cell4) && this.playableCell[1][4]) {
                this.playableCell[1][4] = false;
                this.cX14 = this.X;

                if (this.playableCell4) {
                    this.hints[1][4] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 15
            else if (this.mouseBB.collide(this.cell1.cell5) && this.playableCell[1][5]) {
                this.playableCell[1][5] = false;
                this.cX15 = this.X;

                if (this.playableCell5) {
                    this.hints[1][5] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 16
            else if (this.mouseBB.collide(this.cell1.cell6) && this.playableCell[1][6]) {
                this.playableCell[1][6] = false;
                this.cX16 = this.X;

                if (this.playableCell6) {
                    this.hints[1][6] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 17
            else if (this.mouseBB.collide(this.cell1.cell7) && this.playableCell[1][7]) {
                this.playableCell[1][7] = false;
                this.cX17 = this.X;

                if (this.playableCell1) {
                    this.hints[1][7] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 18
            else if (this.mouseBB.collide(this.cell1.cell8) && this.playableCell[1][8]) {
                this.playableCell[1][8] = false;
                this.cX18 = this.X;

                if (this.playableCell8) {
                    this.hints[1][8] = true;
                } else {
                    this.anywhere = true;
                }
            }

            else {
                return;
            }
            this.turnCount++;
        }
    };

    updateCell0() {
        // Cell 0
        if (this.mouseBB.collide(this.cell0)) {
            this.disableHints();
            // Cell 00
            if (this.mouseBB.collide(this.cell0.cell0) && this.playableCell[0][0]) {
                this.playableCell[0][0] = false;
                this.cX00 = this.X;

                if (this.playableCell0) {
                    this.hints[0][0] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 01
            else if (this.mouseBB.collide(this.cell0.cell1) && this.playableCell[0][1]) {
                this.playableCell[0][1] = false;
                this.cX01 = this.X;

                if (this.playableCell1) {
                    this.hints[0][1] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 02
            else if (this.mouseBB.collide(this.cell0.cell2) && this.playableCell[0][2]) {
                this.playableCell[0][2] = false;
                this.cX02 = this.X;

                if (this.playableCell2) {
                    this.hints[0][2] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 03
            else if (this.mouseBB.collide(this.cell0.cell3) && this.playableCell[0][3]) {
                this.playableCell[0][3] = false;
                this.cX03 = this.X;

                if (this.playableCell3) {
                    this.hints[0][3] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 04
            else if (this.mouseBB.collide(this.cell0.cell4) && this.playableCell[0][4]) {
                this.playableCell[0][4] = false;
                this.cX04 = this.X;

                if (this.playableCell4) {
                    this.hints[0][4] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 05
            else if (this.mouseBB.collide(this.cell0.cell5) && this.playableCell[0][5]) {
                this.playableCell[0][5] = false;
                this.cX05 = this.X;

                if (this.playableCell5) {
                    this.hints[0][5] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 06
            else if (this.mouseBB.collide(this.cell0.cell6) && this.playableCell[0][6]) {
                this.playableCell[0][6] = false;
                this.cX06 = this.X;

                if (this.playableCell6) {
                    this.hints[0][6] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 07
            else if (this.mouseBB.collide(this.cell0.cell7) && this.playableCell[0][7]) {
                this.playableCell[0][7] = false;
                this.cX07 = this.X;

                if (this.playableCell0) {
                    this.hints[0][7] = true;
                } else {
                    this.anywhere = true;
                }
            }
            // Cell 08
            else if (this.mouseBB.collide(this.cell0.cell8) && this.playableCell[0][8]) {
                this.playableCell[0][8] = false;
                this.cX08 = this.X;

                if (this.playableCell8) {
                    this.hints[0][8] = true;
                } else {
                    this.anywhere = true;
                }
            }

            else {
                return;
            }
            this.turnCount++;
        }
    };

    draw(ctx) {
        // draw which player's turn
        setCustomStroke(ctx, "black");
        let turnText = this.setTurnDisplayText();
        ctx.fillText(turnText, PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT - 8);

        // draw gameboard
        this.drawBoard(ctx);

        // on first turn, hint player can go anywhere for first move
        if (this.turnCount === 1 || this.anywhere) {
            setCustomStroke(ctx, "black");
            this.playAnywhere(ctx);
        }

        // fill cell with user's play
        this.fillInCell(ctx);
        
        // CELL 0
        if (this.winC0) {
            this.drawWin(ctx, this.cell0, this.winType0);
            this.disableCell0();
            this.cell0.win = this.winType0;
        } else if (this.tieC0 && !this.winC0) {
            this.disableCell0();
            this.drawWin(ctx, this.cell0, 0);
            this.drawWin(ctx, this.cell0, 1);

        }
        // CELL 1
        if (this.winC1) {
            this.drawWin(ctx, this.cell1, this.winType1);
            this.disableCell1();
            this.cell1.win = this.winType1;
        } else if (this.tieC1 && !this.winC1) {
            this.disableCell1();
            this.drawWin(ctx, this.cell1, 0);
            this.drawWin(ctx, this.cell1, 1);
        }
        // CELL 2
        if (this.winC2) {
            this.drawWin(ctx, this.cell2, this.winType2);
            this.disableCell2();
            this.cell2.win = this.winType2;
        } else if (this.tieC2 && !this.winC2) {
            this.disableCell2();
            this.drawWin(ctx, this.cell2, 0);
            this.drawWin(ctx, this.cell2, 1);
        }
        // CELL 3
        if (this.winC3) {
            this.drawWin(ctx, this.cell3, this.winType3);
            this.disableCell3();
            this.cell3.win = this.winType3;
        } else if (this.tieC3 && !this.winC3) {
            this.disableCell3();
            this.drawWin(ctx, this.cell3, 0);
            this.drawWin(ctx, this.cell3, 1);
        }
        // CELL 4
        if (this.winC4) {
            this.drawWin(ctx, this.cell4, this.winType4);
            this.disableCell4();
            this.cell4.win = this.winType4;
        } else if (this.tieC4 && !this.winC4) {
            this.disableCell4();
            this.drawWin(ctx, this.cell4, 0);
            this.drawWin(ctx, this.cell4, 1);
        }
        // CELL 5
        if (this.winC5) {
            this.drawWin(ctx, this.cell5, this.winType5);
            this.disableCell5();
            this.cell5.win = this.winType5;
        } else if (this.tieC5 && !this.winC5) {
            this.disableCell5();
            this.drawWin(ctx, this.cell5, 0);
            this.drawWin(ctx, this.cell5, 1);
        }
        // CELL 6
        if (this.winC6) {
            this.drawWin(ctx, this.cell6, this.winType6);
            this.disableCell6();
            this.cell6.win = this.winType6;
        } else if (this.tieC6 && !this.winC6) {
            this.disableCell6();
            this.drawWin(ctx, this.cell6, 0);
            this.drawWin(ctx, this.cell6, 1);
        }
        // CELL 7
        if (this.winC7) {
            this.drawWin(ctx, this.cell7, this.winType7);
            this.disableCell7();
            this.cell7.win = this.winType7;
        } else if (this.tieC7 && !this.winC7) {
            this.disableCell7();
            this.drawWin(ctx, this.cell7, 0);
            this.drawWin(ctx, this.cell7, 1);
        }
        // CELL 8
        if (this.winC8) {
            this.drawWin(ctx, this.cell8, this.winType8);
            this.disableCell8();
            this.cell8.win = this.winType8;
        } else if (this.tieC8 && !this.winC8) {
            this.disableCell8();
            this.drawWin(ctx, this.cell8, 0);
            this.drawWin(ctx, this.cell8, 1);
        }

        setCustomStroke(ctx, "black");

        // showChat
        if (this.showChatBox) {
            ctx.fillRect(0, PARAMS.CANVAS_HEIGHT / 3, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT / 3);

            setCustomStroke(ctx, "white");
            ctx.fillText("Welcome to Ultimate Tic Tac Toe!", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 3 + 40);
            ctx.fillText("A helpful hint: follow the highlighted", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 3 + 60);
            ctx.fillText("rainbow boxes to know where to play your", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 3 + 80);
            ctx.fillText("next move.", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 3 + 100);
            ctx.fillText("Also, make sure to read the \"How To Play\" ", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 3 + 120);
            ctx.fillText("instructions in upper right-hand corner.", PARAMS.CANVAS_WIDTH / 2, PARAMS.CANVAS_HEIGHT / 3 + 140);

            if (this.mouseBB.collide(this.exitChatBB)) {
                setRainbowStroke(ctx, this.exitChatBB, true);
            }
            ctx.fillText("CONTINUE", PARAMS.CANVAS_WIDTH / 2, ((2 * PARAMS.CANVAS_HEIGHT) / 3) - 40);
            ctx.strokeRect(this.exitChatBB.x, this.exitChatBB.y, this.exitChatBB.width, this.exitChatBB.height);
        }
    };




    //--------------------FILL IN BOARD--------------------
    drawWin(ctx, cell, winType) {
        setCustomStroke(ctx, "black");
        ctx.beginPath();
        if (winType) {
            ctx.moveTo(cell.x, cell.y);
            ctx.lineTo(cell.x + cell.width, cell.y + cell.height);
            ctx.moveTo(cell.x, cell.y + cell.height);
            ctx.lineTo(cell.x + cell.width, cell.y);
        }  else if (!winType) {
            let radius = 90;
            ctx.arc(cell.x + cell.width / 2, cell.y + cell.height / 2, radius, 0, 2 * Math.PI, false);
        }
        ctx.stroke();
    };

    fillInCell(ctx) {
        // CELL 0
        if (!this.playableCell[0][0]) {
            this.drawTurn(ctx, this.cell0.cell0, this.cX00);
            if (this.hints[0][0]) {
                this.playInCell(ctx, this.cell0, 200);
            }
        } if (!this.playableCell[0][1]) {
            this.drawTurn(ctx, this.cell0.cell1, this.cX01);
            if (this.hints[0][1]) {
                this.playInCell(ctx, this.cell1, 200);
            }
        } if (!this.playableCell[0][2]) {
            this.drawTurn(ctx, this.cell0.cell2, this.cX02);
            if (this.hints[0][2]) {
                this.playInCell(ctx, this.cell2, 200);
            }
        } if (!this.playableCell[0][3]) {
            this.drawTurn(ctx, this.cell0.cell3, this.cX03);
            if (this.hints[0][3]) {
                this.playInCell(ctx, this.cell3, 200);
            }
        } if (!this.playableCell[0][4]) {
            this.drawTurn(ctx, this.cell0.cell4, this.cX04);
            if (this.hints[0][4]) {
                this.playInCell(ctx, this.cell4, 200);
            }
        } if (!this.playableCell[0][5]) {
            this.drawTurn(ctx, this.cell0.cell5, this.cX05);
            if (this.hints[0][5]) {
                this.playInCell(ctx, this.cell5, 200);
            }
        } if (!this.playableCell[0][6]) {
            this.drawTurn(ctx, this.cell0.cell6, this.cX06);
            if (this.hints[0][6]) {
                this.playInCell(ctx, this.cell6, 200);
            }
        } if (!this.playableCell[0][7]) {
            this.drawTurn(ctx, this.cell0.cell7, this.cX07);
            if (this.hints[0][7]) {
                this.playInCell(ctx, this.cell7, 200);
            }
        } if (!this.playableCell[0][8]) {
            this.drawTurn(ctx, this.cell0.cell8, this.cX08);
            if (this.hints[0][8]) {
                this.playInCell(ctx, this.cell8, 200);
            }
        }
        
        // CELL 1
        if (!this.playableCell[1][0]) {
            this.drawTurn(ctx, this.cell1.cell0, this.cX10);
            if (this.hints[1][0]) {
                this.playInCell(ctx, this.cell0, 200);
            }
        } if (!this.playableCell[1][1]) {
            this.drawTurn(ctx, this.cell1.cell1, this.cX11);
            if (this.hints[1][1]) {
                this.playInCell(ctx, this.cell1, 200);
            }
        } if (!this.playableCell[1][2]) {
            this.drawTurn(ctx, this.cell1.cell2, this.cX12);
            if (this.hints[1][2]) {
                this.playInCell(ctx, this.cell2, 200);
            }
        } if (!this.playableCell[1][3]) {
            this.drawTurn(ctx, this.cell1.cell3, this.cX13);
            if (this.hints[1][3]) {
                this.playInCell(ctx, this.cell3, 200);
            }
        } if (!this.playableCell[1][4]) {
            this.drawTurn(ctx, this.cell1.cell4, this.cX14);
            if (this.hints[1][4]) {
                this.playInCell(ctx, this.cell4, 200);
            }
        } if (!this.playableCell[1][5]) {
            this.drawTurn(ctx, this.cell1.cell5, this.cX15);
            if (this.hints[1][5]) {
                this.playInCell(ctx, this.cell5, 200);
            }
        } if (!this.playableCell[1][6]) {
            this.drawTurn(ctx, this.cell1.cell6, this.cX16);
            if (this.hints[1][6]) {
                this.playInCell(ctx, this.cell6, 200);
            }
        } if (!this.playableCell[1][7]) {
            this.drawTurn(ctx, this.cell1.cell7, this.cX17);
            if (this.hints[1][7]) {
                this.playInCell(ctx, this.cell7, 200);
            }
        } if (!this.playableCell[1][8]) {
            this.drawTurn(ctx, this.cell1.cell8, this.cX18);
            if (this.hints[1][8]) {
                this.playInCell(ctx, this.cell8, 200);
            }
        }
        
        // CELL 2
        if (!this.playableCell[2][0]) {
            this.drawTurn(ctx, this.cell2.cell0, this.cX20);
            if (this.hints[2][0]) {
                this.playInCell(ctx, this.cell0, 200);
            }
        } if (!this.playableCell[2][1]) {
            this.drawTurn(ctx, this.cell2.cell1, this.cX21);
            if (this.hints[2][1]) {
                this.playInCell(ctx, this.cell1, 200);
            }
        } if (!this.playableCell[2][2]) {
            this.drawTurn(ctx, this.cell2.cell2, this.cX22);
            if (this.hints[2][2]) {
                this.playInCell(ctx, this.cell2, 200);
            }
        } if (!this.playableCell[2][3]) {
            this.drawTurn(ctx, this.cell2.cell3, this.cX23);
            if (this.hints[2][3]) {
                this.playInCell(ctx, this.cell3, 200);
            }
        } if (!this.playableCell[2][4]) {
            this.drawTurn(ctx, this.cell2.cell4, this.cX24);
            if (this.hints[2][4]) {
                this.playInCell(ctx, this.cell4, 200);
            }
        } if (!this.playableCell[2][5]) {
            this.drawTurn(ctx, this.cell2.cell5, this.cX25);
            if (this.hints[2][5]) {
                this.playInCell(ctx, this.cell5, 200);
            }
        } if (!this.playableCell[2][6]) {
            this.drawTurn(ctx, this.cell2.cell6, this.cX26);
            if (this.hints[2][6]) {
                this.playInCell(ctx, this.cell6, 200);
            }
        } if (!this.playableCell[2][7]) {
            this.drawTurn(ctx, this.cell2.cell7, this.cX27);
            if (this.hints[2][7]) {
                this.playInCell(ctx, this.cell7, 200);
            }
        } if (!this.playableCell[2][8]) {
            this.drawTurn(ctx, this.cell2.cell8, this.cX28);
            if (this.hints[2][8]) {
                this.playInCell(ctx, this.cell8, 200);
            }
        }
        
        // CELL 3
        if (!this.playableCell[3][0]) {
            this.drawTurn(ctx, this.cell3.cell0, this.cX30);
            if (this.hints[3][0]) {
                this.playInCell(ctx, this.cell0, 200);
            }
        } if (!this.playableCell[3][1]) {
            this.drawTurn(ctx, this.cell3.cell1, this.cX31);
            if (this.hints[3][1]) {
                this.playInCell(ctx, this.cell1, 200);
            }
        } if (!this.playableCell[3][2]) {
            this.drawTurn(ctx, this.cell3.cell2, this.cX32);
            if (this.hints[3][2]) {
                this.playInCell(ctx, this.cell2, 200);
            }
        } if (!this.playableCell[3][3]) {
            this.drawTurn(ctx, this.cell3.cell3, this.cX33);
            if (this.hints[3][3]) {
                this.playInCell(ctx, this.cell3, 200);
            }
        } if (!this.playableCell[3][4]) {
            this.drawTurn(ctx, this.cell3.cell4, this.cX34);
            if (this.hints[3][4]) {
                this.playInCell(ctx, this.cell4, 200);
            }
        } if (!this.playableCell[3][5]) {
            this.drawTurn(ctx, this.cell3.cell5, this.cX35);
            if (this.hints[3][5]) {
                this.playInCell(ctx, this.cell5, 200);
            }
        } if (!this.playableCell[3][6]) {
            this.drawTurn(ctx, this.cell3.cell6, this.cX36);
            if (this.hints[3][6]) {
                this.playInCell(ctx, this.cell6, 200);
            }
        } if (!this.playableCell[3][7]) {
            this.drawTurn(ctx, this.cell3.cell7, this.cX37);
            if (this.hints[3][7]) {
                this.playInCell(ctx, this.cell7, 200);
            }
        } if (!this.playableCell[3][8]) {
            this.drawTurn(ctx, this.cell3.cell8, this.cX38);
            if (this.hints[3][8]) {
                this.playInCell(ctx, this.cell8, 200);
            }
        }
        
        // CELL 4
        if (!this.playableCell[4][0]) {
            this.drawTurn(ctx, this.cell4.cell0, this.cX40);
            if (this.hints[4][0]) {
                this.playInCell(ctx, this.cell0, 200);
            }
        } if (!this.playableCell[4][1]) {
            this.drawTurn(ctx, this.cell4.cell1, this.cX41);
            if (this.hints[4][1]) {
                this.playInCell(ctx, this.cell1, 200);
            }
        } if (!this.playableCell[4][2]) {
            this.drawTurn(ctx, this.cell4.cell2, this.cX42);
            if (this.hints[4][2]) {
                this.playInCell(ctx, this.cell2, 200);
            }
        } if (!this.playableCell[4][3]) {
            this.drawTurn(ctx, this.cell4.cell3, this.cX43);
            if (this.hints[4][3]) {
                this.playInCell(ctx, this.cell3, 200);
            }
        } if (!this.playableCell[4][4]) {
            this.drawTurn(ctx, this.cell4.cell4, this.cX44);
            if (this.hints[4][4]) {
                this.playInCell(ctx, this.cell4, 200);
            }
        } if (!this.playableCell[4][5]) {
            this.drawTurn(ctx, this.cell4.cell5, this.cX45);
            if (this.hints[4][5]) {
                this.playInCell(ctx, this.cell5, 200);
            }
        } if (!this.playableCell[4][6]) {
            this.drawTurn(ctx, this.cell4.cell6, this.cX46);
            if (this.hints[4][6]) {
                this.playInCell(ctx, this.cell6, 200);
            }
        } if (!this.playableCell[4][7]) {
            this.drawTurn(ctx, this.cell4.cell7, this.cX47);
            if (this.hints[4][7]) {
                this.playInCell(ctx, this.cell7, 200);
            }
        } if (!this.playableCell[4][8]) {
            this.drawTurn(ctx, this.cell4.cell8, this.cX48);
            if (this.hints[4][8]) {
                this.playInCell(ctx, this.cell8, 200);
            }
        }
        
        // CELL 5
        if (!this.playableCell[5][0]) {
            this.drawTurn(ctx, this.cell5.cell0, this.cX50);
            if (this.hints[5][0]) {
                this.playInCell(ctx, this.cell0, 200);
            }
        } if (!this.playableCell[5][1]) {
            this.drawTurn(ctx, this.cell5.cell1, this.cX51);
            if (this.hints[5][1]) {
                this.playInCell(ctx, this.cell1, 200);
            }
        } if (!this.playableCell[5][2]) {
            this.drawTurn(ctx, this.cell5.cell2, this.cX52);
            if (this.hints[5][2]) {
                this.playInCell(ctx, this.cell2, 200);
            }
        } if (!this.playableCell[5][3]) {
            this.drawTurn(ctx, this.cell5.cell3, this.cX53);
            if (this.hints[5][3]) {
                this.playInCell(ctx, this.cell3, 200);
            }
        } if (!this.playableCell[5][4]) {
            this.drawTurn(ctx, this.cell5.cell4, this.cX54);
            if (this.hints[5][4]) {
                this.playInCell(ctx, this.cell4, 200);
            }
        } if (!this.playableCell[5][5]) {
            this.drawTurn(ctx, this.cell5.cell5, this.cX55);
            if (this.hints[5][5]) {
                this.playInCell(ctx, this.cell5, 200);
            }
        } if (!this.playableCell[5][6]) {
            this.drawTurn(ctx, this.cell5.cell6, this.cX56);
            if (this.hints[5][6]) {
                this.playInCell(ctx, this.cell6, 200);
            }
        } if (!this.playableCell[5][7]) {
            this.drawTurn(ctx, this.cell5.cell7, this.cX57);
            if (this.hints[5][7]) {
                this.playInCell(ctx, this.cell7, 200);
            }
        } if (!this.playableCell[5][8]) {
            this.drawTurn(ctx, this.cell5.cell8, this.cX58);
            if (this.hints[5][8]) {
                this.playInCell(ctx, this.cell8, 200);
            }
        }
        
        // CELL 6
        if (!this.playableCell[6][0]) {
            this.drawTurn(ctx, this.cell6.cell0, this.cX60);
            if (this.hints[6][0]) {
                this.playInCell(ctx, this.cell0, 200);
            }
        } if (!this.playableCell[6][1]) {
            this.drawTurn(ctx, this.cell6.cell1, this.cX61);
            if (this.hints[6][1]) {
                this.playInCell(ctx, this.cell1, 200);
            }
        } if (!this.playableCell[6][2]) {
            this.drawTurn(ctx, this.cell6.cell2, this.cX62);
            if (this.hints[6][2]) {
                this.playInCell(ctx, this.cell2, 200);
            }
        } if (!this.playableCell[6][3]) {
            this.drawTurn(ctx, this.cell6.cell3, this.cX63);
            if (this.hints[6][3]) {
                this.playInCell(ctx, this.cell3, 200);
            }
        } if (!this.playableCell[6][4]) {
            this.drawTurn(ctx, this.cell6.cell4, this.cX64);
            if (this.hints[6][4]) {
                this.playInCell(ctx, this.cell4, 200);
            }
        } if (!this.playableCell[6][5]) {
            this.drawTurn(ctx, this.cell6.cell5, this.cX65);
            if (this.hints[6][5]) {
                this.playInCell(ctx, this.cell5, 200);
            }
        } if (!this.playableCell[6][6]) {
            this.drawTurn(ctx, this.cell6.cell6, this.cX66);
            if (this.hints[6][6]) {
                this.playInCell(ctx, this.cell6, 200);
            }
        } if (!this.playableCell[6][7]) {
            this.drawTurn(ctx, this.cell6.cell7, this.cX67);
            if (this.hints[6][7]) {
                this.playInCell(ctx, this.cell7, 200);
            }
        } if (!this.playableCell[6][8]) {
            this.drawTurn(ctx, this.cell6.cell8, this.cX68);
            if (this.hints[6][8]) {
                this.playInCell(ctx, this.cell8, 200);
            }
        }
        
        // CELL 7
        if (!this.playableCell[7][0]) {
            this.drawTurn(ctx, this.cell7.cell0, this.cX70);
            if (this.hints[7][0]) {
                this.playInCell(ctx, this.cell0, 200);
            }
        } if (!this.playableCell[7][1]) {
            this.drawTurn(ctx, this.cell7.cell1, this.cX71);
            if (this.hints[7][1]) {
                this.playInCell(ctx, this.cell1, 200);
            }
        } if (!this.playableCell[7][2]) {
            this.drawTurn(ctx, this.cell7.cell2, this.cX72);
            if (this.hints[7][2]) {
                this.playInCell(ctx, this.cell2, 200);
            }
        } if (!this.playableCell[7][3]) {
            this.drawTurn(ctx, this.cell7.cell3, this.cX73);
            if (this.hints[7][3]) {
                this.playInCell(ctx, this.cell3, 200);
            }
        } if (!this.playableCell[7][4]) {
            this.drawTurn(ctx, this.cell7.cell4, this.cX74);
            if (this.hints[7][4]) {
                this.playInCell(ctx, this.cell4, 200);
            }
        } if (!this.playableCell[7][5]) {
            this.drawTurn(ctx, this.cell7.cell5, this.cX75);
            if (this.hints[7][5]) {
                this.playInCell(ctx, this.cell5, 200);
            }
        } if (!this.playableCell[7][6]) {
            this.drawTurn(ctx, this.cell7.cell6, this.cX76);
            if (this.hints[7][6]) {
                this.playInCell(ctx, this.cell6, 200);
            }
        } if (!this.playableCell[7][7]) {
            this.drawTurn(ctx, this.cell7.cell7, this.cX77);
            if (this.hints[7][7]) {
                this.playInCell(ctx, this.cell7, 200);
            }
        } if (!this.playableCell[7][8]) {
            this.drawTurn(ctx, this.cell7.cell8, this.cX78);
            if (this.hints[7][8]) {
                this.playInCell(ctx, this.cell8, 200);
            }
        }
        
        // CELL 8
        if (!this.playableCell[8][0]) {
            this.drawTurn(ctx, this.cell8.cell0, this.cX80);
            if (this.hints[8][0]) {
                this.playInCell(ctx, this.cell0, 200);
            }
        } if (!this.playableCell[8][1]) {
            this.drawTurn(ctx, this.cell8.cell1, this.cX81);
            if (this.hints[8][1]) {
                this.playInCell(ctx, this.cell1, 200);
            }
        } if (!this.playableCell[8][2]) {
            this.drawTurn(ctx, this.cell8.cell2, this.cX82);
            if (this.hints[8][2]) {
                this.playInCell(ctx, this.cell2, 200);
            }
        } if (!this.playableCell[8][3]) {
            this.drawTurn(ctx, this.cell8.cell3, this.cX83);
            if (this.hints[8][3]) {
                this.playInCell(ctx, this.cell3, 200);
            }
        } if (!this.playableCell[8][4]) {
            this.drawTurn(ctx, this.cell8.cell4, this.cX84);
            if (this.hints[8][4]) {
                this.playInCell(ctx, this.cell4, 200);
            }
        } if (!this.playableCell[8][5]) {
            this.drawTurn(ctx, this.cell8.cell5, this.cX85);
            if (this.hints[8][5]) {
                this.playInCell(ctx, this.cell5, 200);
            }
        } if (!this.playableCell[8][6]) {
            this.drawTurn(ctx, this.cell8.cell6, this.cX86);
            if (this.hints[8][6]) {
                this.playInCell(ctx, this.cell6, 200);
            }
        } if (!this.playableCell[8][7]) {
            this.drawTurn(ctx, this.cell8.cell7, this.cX87);
            if (this.hints[8][7]) {
                this.playInCell(ctx, this.cell7, 200);
            }
        } if (!this.playableCell[8][8]) {
            this.drawTurn(ctx, this.cell8.cell8, this.cX88);
            if (this.hints[8][8]) {
                this.playInCell(ctx, this.cell8, 200);
            }
        }
    };

    drawTurn(ctx, cell, X) {
        ctx.lineWidth = 4;
        setCustomStroke(ctx, "black");
        ctx.beginPath();
        if (X === 1) {
            ctx.moveTo(cell.x + 10, cell.y + 10);
            ctx.lineTo(cell.x + cell.width - 10, cell.y + cell.height - 10);
            ctx.moveTo(cell.x + 10, cell.y + cell.height - 10);
            ctx.lineTo(cell.x + cell.width - 10, cell.y + 10);
        } else if (X === 0) {
            let radius = 20;
            ctx.arc(cell.x + cell.width / 2, cell.y + cell.height / 2, radius, 0, 2 * Math.PI, false);
        }
        ctx.stroke();
    };




    //--------------------SET WHO IS PLAYING--------------------
    setPlayer() {
        if (this.turnCount % 2 === 0) {
            this.X = 0;
        } else {
            this.X = 1;
        }
    };

    setTurnDisplayText() {
        let playerXText = "Player X's Turn!";
        let playerOText = "Player O's Turn!";

        if (this.X === 1) {
            return playerXText;
        } else {
            return playerOText;
        }
    };




    //--------------------DETERMINE GAME STATUS--------------------
    determineGameWin() {
        if (((this.cell0.win === 0) && (this.cell1.win === 0) && (this.cell2.win === 0)) || 
            (this.cell0.win && this.cell1.win && this.cell2.win)) {
            this.win = true;
            this.game.winningPlayer = this.cell0.win;
        }
        if (((this.cell3.win === 0) && (this.cell4.win === 0) && (this.cell5.win === 0)) ||
            (this.cell3.win && this.cell4.win && this.cell5.win)) {
            this.win = true;
            this.game.winningPlayer = this.cell3.win;
        }
        if (((this.cell6.win === 0) && (this.cell7.win === 0) && (this.cell8.win === 0)) ||
            (this.cell6.win && this.cell7.win && this.cell8.win)) {
            this.win = true;
            this.game.winningPlayer = this.cell6.win;
        }
        // vert wins
        if (((this.cell0.win === 0) && (this.cell3.win === 0) && (this.cell6.win === 0)) ||
            (this.cell0.win && this.cell3.win && this.cell6.win)) {
            this.win = true;
            this.game.winningPlayer = this.cell0.win;
        }
        if (((this.cell1.win === 0) && (this.cell4.win === 0) && (this.cell7.win === 0)) ||
            (this.cell1.win && this.cell4.win && this.cell7.win)) {
            this.win = true;
            this.game.winningPlayer = this.cell1.win;
        }
        if (((this.cell2.win === 0) && (this.cell5.win === 0) && (this.cell8.win === 0)) ||
            (this.cell2.win && this.cell5.win && this.cell8.win)) {
            this.win = true;
            this.game.winningPlayer = this.cell2.win;
        }
        // // diagonal wins
        if (((this.cell0.win === 0) && (this.cell4.win === 0) && (this.cell8.win === 0)) ||
            (this.cell0.win && this.cell4.win && this.cell8.win)) {
            this.win = true;
            this.game.winningPlayer = this.cell0.win;
        }
        if (((this.cell6.win === 0) && (this.cell4.win === 0) && (this.cell2.win === 0)) ||
            (this.cell6.win && this.cell4.win && this.cell2.win)) {
            this.win = true;
            this.game.winningPlayer = this.cell6.win;
        }
    }

    determineGameTie() {
        if (!this.playableCell0 && !this.playableCell1 && !this.playableCell2 &&
            !this.playableCell3 && !this.playableCell4 && !this.playableCell5 &&
            !this.playableCell6 && !this.playableCell7 && !this.playableCell8) {
            this.tie = true;
        }
    };
    
    determineWin() {
        // CELL 0
        // horiz wins
        if (((this.cX00 === 0) && (this.cX01 === 0) && (this.cX02 === 0)) || (this.cX00 && this.cX01 && this.cX02)) {
            this.winC0 = true;
            this.winType0 = this.cX00;
        }
        if (((this.cX03 === 0) && (this.cX04 === 0) && (this.cX05 === 0)) || (this.cX03 && this.cX04 && this.cX05)) {
            this.winC0 = true;
            this.winType0 = this.cX03;
        }
        if (((this.cX06 === 0) && (this.cX07 === 0) && (this.cX08 === 0)) || (this.cX06 && this.cX07 && this.cX08)) {
            this.winC0 = true;
            this.winType0 = this.cX06;
        }
        // vert wins
        if (((this.cX00 === 0) && (this.cX03 === 0) && (this.cX06 === 0)) || (this.cX00 && this.cX03 && this.cX06)) {
            this.winC0 = true;
            this.winType0 = this.cX00;
        }
        if (((this.cX01 === 0) && (this.cX04 === 0) && (this.cX07 === 0)) || (this.cX01 && this.cX04 && this.cX07)) {
            this.winC0 = true;
            this.winType0 = this.cX01;
        }
        if (((this.cX02 === 0) && (this.cX05 === 0) && (this.cX08 === 0)) || (this.cX02 && this.cX05 && this.cX08)) {
            this.winC0 = true;
            this.winType0 = this.cX02;
        }
        // // diagonal wins
        if (((this.cX00 === 0) && (this.cX04 === 0) && (this.cX08 === 0)) || (this.cX00 && this.cX04 && this.cX08)) {
            this.winC0 = true;
            this.winType0 = this.cX00;
        }
        if (((this.cX06 === 0) && (this.cX04 === 0) && (this.cX02 === 0)) || (this.cX06 && this.cX04 && this.cX02)) {
            this.winC0 = true;
            this.winType0 = this.cX06;
        }

        // CELL 1
        // horiz wins
        if (((this.cX10 == 0) && (this.cX11 == 0) && (this.cX12 == 0)) || (this.cX10 && this.cX11 && this.cX12)) {
            this.winC1 = true;
            this.winType1 = this.cX10;
        }
        if (((this.cX13 == 0) && (this.cX14 == 0) && (this.cX15 == 0)) || (this.cX13 && this.cX14 && this.cX15)) {
            this.winC1 = true;
            this.winType1 = this.cX13;
        }
        if (((this.cX16 == 0) && (this.cX17 == 0) && (this.cX18 == 0)) || (this.cX16 && this.cX17 && this.cX18)) {
            this.winC1 = true;
            this.winType1 = this.cX16;
        }
        // vert wins
        if (((this.cX10 == 0) && (this.cX13 == 0) && (this.cX16 == 0)) || (this.cX10 && this.cX13 && this.cX16)) {
            this.winC1 = true;
            this.winType1 = this.cX10;
        }
        if (((this.cX11 == 0) && (this.cX14 == 0) && (this.cX17 == 0)) || (this.cX11 && this.cX14 && this.cX17)) {
            this.winC1 = true;
            this.winType1 = this.cX11;
        }
        if (((this.cX12 == 0) && (this.cX15 == 0) && (this.cX18 == 0)) || (this.cX12 && this.cX15 && this.cX18)) {
            this.winC1 = true;
            this.winType1 = this.cX12;
        }
        // // diagonal wins
        if (((this.cX10 == 0) && (this.cX14 == 0) && (this.cX18 == 0)) || (this.cX10 && this.cX14 && this.cX18)) {
            this.winC1 = true;
            this.winType1 = this.cX10;
        }
        if (((this.cX16 == 0) && (this.cX14 == 0) && (this.cX12 == 0)) || (this.cX16 && this.cX14 && this.cX12)) {
            this.winC1 = true;
            this.winType1 = this.cX16;
        }

        // CELL 2
        // horiz wins
        if (((this.cX20 == 0) && (this.cX21 == 0) && (this.cX22 == 0)) || (this.cX20 && this.cX21 && this.cX22)) {
            this.winC2 = true;
            this.winType2 = this.cX20;
        }
        if (((this.cX23 == 0) && (this.cX24 == 0) && (this.cX25 == 0)) || (this.cX23 && this.cX24 && this.cX25)) {
            this.winC2 = true;
            this.winType2 = this.cX23;
        }
        if (((this.cX26 == 0) && (this.cX27 == 0) && (this.cX28 == 0)) || (this.cX26 && this.cX27 && this.cX28)) {
            this.winC2 = true;
            this.winType2 = this.cX26;
        }
        // vert wins
        if (((this.cX20 == 0) && (this.cX23 == 0) && (this.cX26 == 0)) || (this.cX20 && this.cX23 && this.cX26)) {
            this.winC2 = true;
            this.winType2 = this.cX20;
        }
        if (((this.cX21 == 0) && (this.cX24 == 0) && (this.cX27 == 0)) || (this.cX21 && this.cX24 && this.cX27)) {
            this.winC2 = true;
            this.winType2 = this.cX21;
        }
        if (((this.cX22 == 0) && (this.cX25 == 0) && (this.cX28 == 0)) || (this.cX22 && this.cX25 && this.cX28)) {
            this.winC2 = true;
            this.winType2 = this.cX22;
        }
        // // diagonal wins
        if (((this.cX20 == 0) && (this.cX24 == 0) && (this.cX28 == 0)) || (this.cX20 && this.cX24 && this.cX28)) {
            this.winC2 = true;
            this.winType2 = this.cX20;
        }
        if (((this.cX26 == 0) && (this.cX24 == 0) && (this.cX22 == 0)) || (this.cX26 && this.cX24 && this.cX22)) {
            this.winC2 = true;
            this.winType2 = this.cX26;
        }

        // CELL 3
        // horiz wins
        if (((this.cX30 == 0) && (this.cX31 == 0) && (this.cX32 == 0)) || (this.cX30 && this.cX31 && this.cX32)) {
            this.winC3 = true;
            this.winType3 = this.cX30;
        }
        if (((this.cX33 == 0) && (this.cX34 == 0) && (this.cX35 == 0)) || (this.cX33 && this.cX34 && this.cX35)) {
            this.winC3 = true;
            this.winType3 = this.cX33;
        }
        if (((this.cX36 == 0) && (this.cX37 == 0) && (this.cX38 == 0)) || (this.cX36 && this.cX37 && this.cX38)) {
            this.winC3 = true;
            this.winType3 = this.cX36;
        }
        // vert wins
        if (((this.cX30 == 0) && (this.cX33 == 0) && (this.cX36 == 0)) || (this.cX30 && this.cX33 && this.cX36)) {
            this.winC3 = true;
            this.winType3 = this.cX30;
        }
        if (((this.cX31 == 0) && (this.cX34 == 0) && (this.cX37 == 0)) || (this.cX31 && this.cX34 && this.cX37)) {
            this.winC3 = true;
            this.winType3 = this.cX31;
        }
        if (((this.cX32 == 0) && (this.cX35 == 0) && (this.cX38 == 0)) || (this.cX32 && this.cX35 && this.cX38)) {
            this.winC3 = true;
            this.winType3 = this.cX32;
        }
        // // diagonal wins
        if (((this.cX30 == 0) && (this.cX34 == 0) && (this.cX38 == 0)) || (this.cX30 && this.cX34 && this.cX38)) {
            this.winC3 = true;
            this.winType3 = this.cX30;
        }
        if (((this.cX36 == 0) && (this.cX34 == 0) && (this.cX32 == 0)) || (this.cX36 && this.cX34 && this.cX32)) {
            this.winC3 = true;
            this.winType3 = this.cX36;
        }

        // CELL 4
        // horiz wins
        if (((this.cX40 == 0) && (this.cX41 == 0) && (this.cX42 == 0)) || (this.cX40 && this.cX41 && this.cX42)) {
            this.winC4 = true;
            this.winType4 = this.cX40;
        }
        if (((this.cX43 == 0) && (this.cX44 == 0) && (this.cX45 == 0)) || (this.cX43 && this.cX44 && this.cX45)) {
            this.winC4 = true;
            this.winType4 = this.cX43;
        }
        if (((this.cX46 == 0) && (this.cX47 == 0) && (this.cX48 == 0)) || (this.cX46 && this.cX47 && this.cX48)) {
            this.winC4 = true;
            this.winType4 = this.cX46;
        }
        // vert wins
        if (((this.cX40 == 0) && (this.cX43 == 0) && (this.cX46 == 0)) || (this.cX40 && this.cX43 && this.cX46)) {
            this.winC4 = true;
            this.winType4 = this.cX40;
        }
        if (((this.cX41 == 0) && (this.cX44 == 0) && (this.cX47 == 0)) || (this.cX41 && this.cX44 && this.cX47)) {
            this.winC4 = true;
            this.winType4 = this.cX41;
        }
        if (((this.cX42 == 0) && (this.cX45 == 0) && (this.cX48 == 0)) || (this.cX42 && this.cX45 && this.cX48)) {
            this.winC4 = true;
            this.winType4 = this.cX42;
        }
        // // diagonal wins
        if (((this.cX40 == 0) && (this.cX44 == 0) && (this.cX48 == 0)) || (this.cX40 && this.cX44 && this.cX48)) {
            this.winC4 = true;
            this.winType4 = this.cX40;
        }
        if (((this.cX46 == 0) && (this.cX44 == 0) && (this.cX42 == 0)) || (this.cX46 && this.cX44 && this.cX42)) {
            this.winC4 = true;
            this.winType4 = this.cX46;
        }
        
        // CELL 5
        // horiz wins
        if (((this.cX50 == 0) && (this.cX51 == 0) && (this.cX52 == 0)) || (this.cX50 && this.cX51 && this.cX52)) {
            this.winC5 = true;
            this.winType5 = this.cX50;
        }
        if (((this.cX53 == 0) && (this.cX54 == 0) && (this.cX55 == 0)) || (this.cX53 && this.cX54 && this.cX55)) {
            this.winC5 = true;
            this.winType5 = this.cX53;
        }
        if (((this.cX56 == 0) && (this.cX57 == 0) && (this.cX58 == 0)) || (this.cX56 && this.cX57 && this.cX58)) {
            this.winC5 = true;
            this.winType5 = this.cX56;
        }
        // vert wins
        if (((this.cX50 == 0) && (this.cX53 == 0) && (this.cX56 == 0)) || (this.cX50 && this.cX53 && this.cX56)) {
            this.winC5 = true;
            this.winType5 = this.cX50;
        }
        if (((this.cX51 == 0) && (this.cX54 == 0) && (this.cX57 == 0)) || (this.cX51 && this.cX54 && this.cX57)) {
            this.winC5 = true;
            this.winType5 = this.cX51;
        }
        if (((this.cX52 == 0) && (this.cX55 == 0) && (this.cX58 == 0)) || (this.cX52 && this.cX55 && this.cX58)) {
            this.winC5 = true;
            this.winType5 = this.cX52;
        }
        // // diagonal wins
        if (((this.cX50 == 0) && (this.cX54 == 0) && (this.cX58 == 0)) || (this.cX50 && this.cX54 && this.cX58)) {
            this.winC5 = true;
            this.winType5 = this.cX50;
        }
        if (((this.cX56 == 0) && (this.cX54 == 0) && (this.cX52 == 0)) || (this.cX56 && this.cX54 && this.cX52)) {
            this.winC5 = true;
            this.winType5 = this.cX56;
        }
        
        // CELL 6
        // horiz wins
        if (((this.cX60 == 0) && (this.cX61 == 0) && (this.cX62 == 0)) || (this.cX60 && this.cX61 && this.cX62)) {
            this.winC6 = true;
            this.winType6 = this.cX60;
        }
        if (((this.cX63 == 0) && (this.cX64 == 0) && (this.cX65 == 0)) || (this.cX63 && this.cX64 && this.cX65)) {
            this.winC6 = true;
            this.winType6 = this.cX63;
        }
        if (((this.cX66 == 0) && (this.cX67 == 0) && (this.cX68 == 0)) || (this.cX66 && this.cX67 && this.cX68)) {
            this.winC6 = true;
            this.winType6 = this.cX66;
        }
        // vert wins
        if (((this.cX60 == 0) && (this.cX63 == 0) && (this.cX66 == 0)) || (this.cX60 && this.cX63 && this.cX66)) {
            this.winC6 = true;
            this.winType6 = this.cX60;
        }
        if (((this.cX61 == 0) && (this.cX64 == 0) && (this.cX67 == 0)) || (this.cX61 && this.cX64 && this.cX67)) {
            this.winC6 = true;
            this.winType6 = this.cX61;
        }
        if (((this.cX62 == 0) && (this.cX65 == 0) && (this.cX68 == 0)) || (this.cX62 && this.cX65 && this.cX68)) {
            this.winC6 = true;
            this.winType6 = this.cX62;
        }
        // // diagonal wins
        if (((this.cX60 == 0) && (this.cX64 == 0) && (this.cX68 == 0)) || (this.cX60 && this.cX64 && this.cX68)) {
            this.winC6 = true;
            this.winType6 = this.cX60;
        }
        if (((this.cX66 == 0) && (this.cX64 == 0) && (this.cX62 == 0)) || (this.cX66 && this.cX64 && this.cX62)) {
            this.winC6 = true;
            this.winType6 = this.cX66;
        }
        
        // CELL 7
        // horiz wins
        if (((this.cX70 == 0) && (this.cX71 == 0) && (this.cX72 == 0)) || (this.cX70 && this.cX71 && this.cX72)) {
            this.winC7 = true;
            this.winType7 = this.cX70;
        }
        if (((this.cX73 == 0) && (this.cX74 == 0) && (this.cX75 == 0)) || (this.cX73 && this.cX74 && this.cX75)) {
            this.winC7 = true;
            this.winType7 = this.cX73;
        }
        if (((this.cX76 == 0) && (this.cX77 == 0) && (this.cX78 == 0)) || (this.cX76 && this.cX77 && this.cX78)) {
            this.winC7 = true;
            this.winType7 = this.cX76;
        }
        // vert wins
        if (((this.cX70 == 0) && (this.cX73 == 0) && (this.cX76 == 0)) || (this.cX70 && this.cX73 && this.cX76)) {
            this.winC7 = true;
            this.winType7 = this.cX70;
        }
        if (((this.cX71 == 0) && (this.cX74 == 0) && (this.cX77 == 0)) || (this.cX71 && this.cX74 && this.cX77)) {
            this.winC7 = true;
            this.winType7 = this.cX71;
        }
        if (((this.cX72 == 0) && (this.cX75 == 0) && (this.cX78 == 0)) || (this.cX72 && this.cX75 && this.cX78)) {
            this.winC7 = true;
            this.winType7 = this.cX72;
        }
        // // diagonal wins
        if (((this.cX70 == 0) && (this.cX74 == 0) && (this.cX78 == 0)) || (this.cX70 && this.cX74 && this.cX78)) {
            this.winC7 = true;
            this.winType7 = this.cX70;
        }
        if (((this.cX76 == 0) && (this.cX74 == 0) && (this.cX72 == 0)) || (this.cX76 && this.cX74 && this.cX72)) {
            this.winC7 = true;
            this.winType7 = this.cX76;
        }
        
        // CELL 8
        // horiz wins
        if (((this.cX80 == 0) && (this.cX81 == 0) && (this.cX82 == 0)) || (this.cX80 && this.cX81 && this.cX82)) {
            this.winC8 = true;
            this.winType8 = this.cX80;
        }
        if (((this.cX83 == 0) && (this.cX84 == 0) && (this.cX85 == 0)) || (this.cX83 && this.cX84 && this.cX85)) {
            this.winC8 = true;
            this.winType8 = this.cX83;
        }
        if (((this.cX86 == 0) && (this.cX87 == 0) && (this.cX88 == 0)) || (this.cX86 && this.cX87 && this.cX88)) {
            this.winC8 = true;
            this.winType8 = this.cX86;
        }
        // vert wins
        if (((this.cX80 == 0) && (this.cX83 == 0) && (this.cX86 == 0)) || (this.cX80 && this.cX83 && this.cX86)) {
            this.winC8 = true;
            this.winType8 = this.cX80;
        }
        if (((this.cX81 == 0) && (this.cX84 == 0) && (this.cX87 == 0)) || (this.cX81 && this.cX84 && this.cX87)) {
            this.winC8 = true;
            this.winType8 = this.cX81;
        }
        if (((this.cX82 == 0) && (this.cX85 == 0) && (this.cX88 == 0)) || (this.cX82 && this.cX85 && this.cX88)) {
            this.winC8 = true;
            this.winType8 = this.cX82;
        }
        // // diagonal wins
        if (((this.cX80 == 0) && (this.cX84 == 0) && (this.cX88 == 0)) || (this.cX80 && this.cX84 && this.cX88)) {
            this.winC8 = true;
            this.winType8 = this.cX80;
        }
        if (((this.cX86 == 0) && (this.cX84 == 0) && (this.cX82 == 0)) || (this.cX86 && this.cX84 && this.cX82)) {
            this.winC8 = true;
            this.winType8 = this.cX86;
        }
    };

    determineTie() {
        // CELL 0
        if (this.playableCell[0][0] === false && this.playableCell[0][1] === false && this.playableCell[0][2] === false &&
            this.playableCell[0][3] === false && this.playableCell[0][4] === false && this.playableCell[0][5] === false &&
            this.playableCell[0][6] === false && this.playableCell[0][7] === false && this.playableCell[0][8] === false &&
            !Number.isNaN(this.playableCell[0][0])) {
            this.tieC0 = true;
        }
        // CELL 1
        if (this.playableCell[1][0] === false && this.playableCell[1][1] === false && this.playableCell[1][2] === false &&
            this.playableCell[1][3] === false && this.playableCell[1][4] === false && this.playableCell[1][5] === false &&
            this.playableCell[1][6] === false && this.playableCell[1][7] === false && this.playableCell[1][8] === false &&
            !Number.isNaN(this.playableCell[1][0])) {
            this.tieC1 = true;
        }
        // CELL 2
        if (this.playableCell[2][0] === false && this.playableCell[2][1] === false && this.playableCell[2][2] === false &&
            this.playableCell[2][3] === false && this.playableCell[2][4] === false && this.playableCell[2][5] === false &&
            this.playableCell[2][6] === false && this.playableCell[2][7] === false && this.playableCell[2][8] === false &&
            !Number.isNaN(this.playableCell[2][0])) {
            this.tieC2 = true;
        }
        // CELL 3
        if (this.playableCell[3][0] === false && this.playableCell[3][1] === false && this.playableCell[3][2] === false &&
            this.playableCell[3][3] === false && this.playableCell[3][4] === false && this.playableCell[3][5] === false &&
            this.playableCell[3][6] === false && this.playableCell[3][7] === false && this.playableCell[3][8] === false &&
            !Number.isNaN(this.playableCell[3][0])) {
            this.tieC3 = true;
        }
        // CELL 4
        if (this.playableCell[4][0] === false && this.playableCell[4][1] === false && this.playableCell[4][2] === false &&
            this.playableCell[4][3] === false && this.playableCell[4][4] === false && this.playableCell[4][5] === false &&
            this.playableCell[4][6] === false && this.playableCell[4][7] === false && this.playableCell[4][8] === false &&
            !Number.isNaN(this.playableCell[4][0])) {
            this.tieC4 = true;
        }
        // CELL 5
        if (this.playableCell[5][0] === false && this.playableCell[5][1] === false && this.playableCell[5][2] === false &&
            this.playableCell[5][3] === false && this.playableCell[5][4] === false && this.playableCell[5][5] === false &&
            this.playableCell[5][6] === false && this.playableCell[5][7] === false && this.playableCell[5][8] === false &&
            !Number.isNaN(this.playableCell[5][0])) {
            this.tieC5 = true;
        }
        // CELL 6
        if (this.playableCell[6][0] === false && this.playableCell[6][1] === false && this.playableCell[6][2] === false &&
            this.playableCell[6][3] === false && this.playableCell[6][4] === false && this.playableCell[6][5] === false &&
            this.playableCell[6][6] === false && this.playableCell[6][7] === false && this.playableCell[6][8] === false &&
            !Number.isNaN(this.playableCell[6][0])) {
            this.tieC6 = true;
        }
        // CELL 7
        if (this.playableCell[7][0] === false && this.playableCell[7][1] === false && this.playableCell[7][2] === false &&
            this.playableCell[7][3] === false && this.playableCell[7][4] === false && this.playableCell[7][5] === false &&
            this.playableCell[7][6] === false && this.playableCell[7][7] === false && this.playableCell[7][8] === false &&
            !Number.isNaN(this.playableCell[7][0])) {
            this.tieC7 = true;
        }
        // CELL 8
        if (this.playableCell[8][0] === false && this.playableCell[8][1] === false && this.playableCell[8][2] === false &&
            this.playableCell[8][3] === false && this.playableCell[8][4] === false && this.playableCell[8][5] === false &&
            this.playableCell[8][6] === false && this.playableCell[8][7] === false && this.playableCell[8][8] === false &&
            !Number.isNaN(this.playableCell[8][0])) {
            this.tieC8 = true;
        }
    };




    //--------------------GAME HINTS--------------------
    initializeHintsArray() {
        for (let i = 0; i < 9; i++) {
            this.hints[i] = [];
        }
    }

    disableHints() {
        let row = 9;
        let col = 9;

        this.anywhere = false;

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                this.hints[i][j] = false;
            }

        }
    }

    // player help
    playAnywhere(ctx) {
        ctx.lineWidth = 8;
        let playHereBB = new BoundingBox(this.rowX, this.rowY, 600, 600);
        setRainbowStroke(ctx, playHereBB, true);
        ctx.strokeRect(this.rowX, this.rowY, 600, 600);
    };

    playInCell(ctx, cell, dimension) {
        ctx.lineWidth = 8;
        let playHereBB = new BoundingBox(cell.x, cell.y, dimension, dimension);
        setRainbowStroke(ctx, playHereBB, true);
        ctx.strokeRect(cell.x, cell.y, dimension, dimension);
    };




    //--------------------GAME BOARD--------------------
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

    // draw main board grid
    drawBoard(ctx) {
        // draw big board
        setCustomStroke(ctx, "black");
        ctx.lineWidth = 8;
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
        ctx.lineWidth = 4;
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




    //--------------------ENABLE/ DISABLE GAME CELLS--------------------
    initializeEnableCellsArray() {
        this.playableCell0 = true;
        this.playableCell1 = true;
        this.playableCell2 = true;
        this.playableCell3 = true;
        this.playableCell4 = true;
        this.playableCell5 = true;
        this.playableCell6 = true;
        this.playableCell7 = true;
        this.playableCell8 = true;

        for (let i = 0; i < 9; i++) {
            this.playableCell[i] = [];
        }
    }

    enableCells() {
        let row = 9;
        let col = 9;

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                this.playableCell[i][j] = true;
            }
        }
    };

    disableCell0() {
        this.playableCell0 = false;

        for (let j = 0; j < 9; j++) {
            this.playableCell[0][j] = false;
        }
    };

    disableCell1() {
        this.playableCell1 = false;

        for (let j = 0; j < 9; j++) {
            this.playableCell[1][j] = false;
        }
    };

    disableCell2() {
        this.playableCell2 = false;

        for (let j = 0; j < 9; j++) {
            this.playableCell[2][j] = false;
        }
    };

    disableCell3() {
        this.playableCell3 = false;

        for (let j = 0; j < 9; j++) {
            this.playableCell[3][j] = false;
        }
    };

    disableCell4() {
        this.playableCell4 = false;

        for (let j = 0; j < 9; j++) {
            this.playableCell[4][j] = false;
        }
    };

    disableCell5() {
        this.playableCell5 = false;

        for (let j = 0; j < 9; j++) {
            this.playableCell[5][j] = false;
        }
    };

    disableCell6() {
        this.playableCell6 = false;

        for (let j = 0; j < 9; j++) {
            this.playableCell[6][j] = false;
        }
    };

    disableCell7() {
        this.playableCell7 = false;

        for (let j = 0; j < 9; j++) {
            this.playableCell[7][j] = false;
        }
    };

    disableCell8() {
        this.playableCell8 = false;

        for (let j = 0; j < 9; j++) {
            this.playableCell[8][j] = false;
        }
    };
}