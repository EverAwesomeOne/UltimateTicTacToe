class TicTacToe {
    constructor(game) {
        this.game = game;

        this.turnCount = 1;
        this.rowX = (PARAMS.CANVAS_WIDTH - 600) / 2;
        this.rowY = ((PARAMS.CANVAS_HEIGHT - 600) / 2) + 20;  // account for HUD height

        this.win = false;
        this.showChatBox = false;

        // BBs
        this.mouseBB = new BoundingBox(0, 0, 1, 1);
        this.exitChatBB = new BoundingBox(PARAMS.CANVAS_WIDTH / 2 - 65, ((2 * PARAMS.CANVAS_HEIGHT) / 3) - 72,130,50);
        // set up game
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
            if (this.mouseBB.collide(this.cell8.cell0) && this.playableCell80) {
                this.playableCell80 = false;
                this.cX80 = this.X;
                this.hint80 = true;
                this.turnCount++;
            }
            // Cell 81
            else if (this.mouseBB.collide(this.cell8.cell1) && this.playableCell81) {
                this.playableCell81 = false;
                this.cX81 = this.X;
                this.hint81 = true;
                this.turnCount++;
            }
            // Cell 82
            else if (this.mouseBB.collide(this.cell8.cell2) && this.playableCell82) {
                this.playableCell82 = false;
                this.cX82 = this.X;
                this.hint82 = true;
                this.turnCount++;
            }
            // Cell 83
            else if (this.mouseBB.collide(this.cell8.cell3) && this.playableCell83) {
                this.playableCell83 = false;
                this.cX83 = this.X;
                this.hint83 = true;
                this.turnCount++;
            }
            // Cell 84
            else if (this.mouseBB.collide(this.cell8.cell4) && this.playableCell84) {
                this.playableCell84 = false;
                this.cX84 = this.X;
                this.hint84 = true;
                this.turnCount++;
            }
            // Cell 85
            else if (this.mouseBB.collide(this.cell8.cell5) && this.playableCell85) {
                this.playableCell85 = false;
                this.cX85 = this.X;
                this.hint85 = true;
                this.turnCount++;
            }
            // Cell 86
            else if (this.mouseBB.collide(this.cell8.cell6) && this.playableCell86) {
                this.playableCell86 = false;
                this.cX86 = this.X;
                this.hint86 = true;
                this.turnCount++;
            }
            // Cell 87
            else if (this.mouseBB.collide(this.cell8.cell7) && this.playableCell87) {
                this.playableCell87 = false;
                this.cX87 = this.X;
                this.hint87 = true;
                this.turnCount++;
            }
            // Cell 88
            else if (this.mouseBB.collide(this.cell8.cell8) && this.playableCell88) {
                this.playableCell88 = false;
                this.cX88 = this.X;
                this.hint88 = true;
                this.turnCount++;
            }
        }
    };

    updateCell7() {
        // Cell 7
        if (this.mouseBB.collide(this.cell7)) {
            this.disableHints();
            // Cell 70
            if (this.mouseBB.collide(this.cell7.cell0) && this.playableCell70) {
                this.playableCell70 = false;
                this.cX70 = this.X;
                this.hint70 = true;
                this.turnCount++;
            }
            // Cell 71
            else if (this.mouseBB.collide(this.cell7.cell1) && this.playableCell71) {
                this.playableCell71 = false;
                this.cX71 = this.X;
                this.hint71 = true;
                this.turnCount++;
            }
            // Cell 72
            else if (this.mouseBB.collide(this.cell7.cell2) && this.playableCell72) {
                this.playableCell72 = false;
                this.cX72 = this.X;
                this.hint72 = true;
                this.turnCount++;
            }
            // Cell 73
            else if (this.mouseBB.collide(this.cell7.cell3) && this.playableCell73) {
                this.playableCell73 = false;
                this.cX73 = this.X;
                this.hint73 = true;
                this.turnCount++;
            }
            // Cell 74
            else if (this.mouseBB.collide(this.cell7.cell4) && this.playableCell74) {
                this.playableCell74 = false;
                this.cX74 = this.X;
                this.hint74 = true;
                this.turnCount++;
            }
            // Cell 75
            else if (this.mouseBB.collide(this.cell7.cell5) && this.playableCell75) {
                this.playableCell75 = false;
                this.cX75 = this.X;
                this.hint75 = true;
                this.turnCount++;
            }
            // Cell 76
            else if (this.mouseBB.collide(this.cell7.cell6) && this.playableCell76) {
                this.playableCell76 = false;
                this.cX76 = this.X;
                this.hint76 = true;
                this.turnCount++;
            }
            // Cell 77
            else if (this.mouseBB.collide(this.cell7.cell7) && this.playableCell77) {
                this.playableCell77 = false;
                this.cX77 = this.X;
                this.hint77 = true;
                this.turnCount++;
            }
            // Cell 78
            else if (this.mouseBB.collide(this.cell7.cell8) && this.playableCell78) {
                this.playableCell78 = false;
                this.cX78 = this.X;
                this.hint78 = true;
                this.turnCount++;
            }
        }
    };

    updateCell6() {
        // Cell 6
        if (this.mouseBB.collide(this.cell6)) {
            this.disableHints();
            // Cell 60
            if (this.mouseBB.collide(this.cell6.cell0) && this.playableCell60) {
                this.playableCell60 = false;
                this.cX60 = this.X;
                this.hint60 = true;
                this.turnCount++;
            }
            // Cell 61
            else if (this.mouseBB.collide(this.cell6.cell1) && this.playableCell61) {
                this.playableCell61 = false;
                this.cX61 = this.X;
                this.hint61 = true;
                this.turnCount++;
            }
            // Cell 62
            else if (this.mouseBB.collide(this.cell6.cell2) && this.playableCell62) {
                this.playableCell62 = false;
                this.cX62 = this.X;
                this.hint62 = true;
                this.turnCount++;
            }
            // Cell 63
            else if (this.mouseBB.collide(this.cell6.cell3) && this.playableCell63) {
                this.playableCell63 = false;
                this.cX63 = this.X;
                this.hint63 = true;
                this.turnCount++;
            }
            // Cell 64
            else if (this.mouseBB.collide(this.cell6.cell4) && this.playableCell64) {
                this.playableCell64 = false;
                this.cX64 = this.X;
                this.hint64 = true;
                this.turnCount++;
            }
            // Cell 65
            else if (this.mouseBB.collide(this.cell6.cell5) && this.playableCell65) {
                this.playableCell65 = false;
                this.cX65 = this.X;
                this.hint65 = true;
                this.turnCount++;
            }
            // Cell 66
            else if (this.mouseBB.collide(this.cell6.cell6) && this.playableCell66) {
                this.playableCell66 = false;
                this.cX66 = this.X;
                this.hint66 = true;
                this.turnCount++;
            }
            // Cell 67
            else if (this.mouseBB.collide(this.cell6.cell7) && this.playableCell67) {
                this.playableCell67 = false;
                this.cX67 = this.X;
                this.hint67 = true;
                this.turnCount++;
            }
            // Cell 68
            else if (this.mouseBB.collide(this.cell6.cell8) && this.playableCell68) {
                this.playableCell68 = false;
                this.cX68 = this.X;
                this.hint68 = true;
                this.turnCount++;
            }
        }
    };

    updateCell5() {
        // Cell 5
        if (this.mouseBB.collide(this.cell5)) {
            this.disableHints();
            // Cell 50
            if (this.mouseBB.collide(this.cell5.cell0) && this.playableCell50) {
                this.playableCell50 = false;
                this.cX50 = this.X;
                this.hint50 = true;
                this.turnCount++;
            }
            // Cell 51
            else if (this.mouseBB.collide(this.cell5.cell1) && this.playableCell51) {
                this.playableCell51 = false;
                this.cX51 = this.X;
                this.hint51 = true;
                this.turnCount++;
            }
            // Cell 52
            else if (this.mouseBB.collide(this.cell5.cell2) && this.playableCell52) {
                this.playableCell52 = false;
                this.cX52 = this.X;
                this.hint52 = true;
                this.turnCount++;
            }
            // Cell 53
            else if (this.mouseBB.collide(this.cell5.cell3) && this.playableCell53) {
                this.playableCell53 = false;
                this.cX53 = this.X;
                this.hint53 = true;
                this.turnCount++;
            }
            // Cell 54
            else if (this.mouseBB.collide(this.cell5.cell4) && this.playableCell54) {
                this.playableCell54 = false;
                this.cX54 = this.X;
                this.hint54 = true;
                this.turnCount++;
            }
            // Cell 55
            else if (this.mouseBB.collide(this.cell5.cell5) && this.playableCell55) {
                this.playableCell55 = false;
                this.cX55 = this.X;
                this.hint55 = true;
                this.turnCount++;
            }
            // Cell 56
            else if (this.mouseBB.collide(this.cell5.cell6) && this.playableCell56) {
                this.playableCell56 = false;
                this.cX56 = this.X;
                this.hint56 = true;
                this.turnCount++;
            }
            // Cell 57
            else if (this.mouseBB.collide(this.cell5.cell7) && this.playableCell57) {
                this.playableCell57 = false;
                this.cX57 = this.X;
                this.hint57 = true;
                this.turnCount++;
            }
            // Cell 58
            else if (this.mouseBB.collide(this.cell5.cell8) && this.playableCell58) {
                this.playableCell58 = false;
                this.cX58 = this.X;
                this.hint58 = true;
                this.turnCount++;
            }
        }
    };

    updateCell4() {
        // Cell 4
        if (this.mouseBB.collide(this.cell4)) {
            this.disableHints();
            // Cell 40
            if (this.mouseBB.collide(this.cell4.cell0) && this.playableCell40) {
                this.playableCell40 = false;
                this.cX40 = this.X;
                this.hint40 = true;
                this.turnCount++;
            }
            // Cell 41
            else if (this.mouseBB.collide(this.cell4.cell1) && this.playableCell41) {
                this.playableCell41 = false;
                this.cX41 = this.X;
                this.hint41 = true;
                this.turnCount++;
            }
            // Cell 42
            else if (this.mouseBB.collide(this.cell4.cell2) && this.playableCell42) {
                this.playableCell42 = false;
                this.cX42 = this.X;
                this.hint42 = true;
                this.turnCount++;
            }
            // Cell 43
            else if (this.mouseBB.collide(this.cell4.cell3) && this.playableCell43) {
                this.playableCell43 = false;
                this.cX43 = this.X;
                this.hint43 = true;
                this.turnCount++;
            }
            // Cell 44
            else if (this.mouseBB.collide(this.cell4.cell4) && this.playableCell44) {
                this.playableCell44 = false;
                this.cX44 = this.X;
                this.hint44 = true;
                this.turnCount++;
            }
            // Cell 45
            else if (this.mouseBB.collide(this.cell4.cell5) && this.playableCell45) {
                this.playableCell45 = false;
                this.cX45 = this.X;
                this.hint45 = true;
                this.turnCount++;
            }
            // Cell 46
            else if (this.mouseBB.collide(this.cell4.cell6) && this.playableCell46) {
                this.playableCell46 = false;
                this.cX46 = this.X;
                this.hint46 = true;
                this.turnCount++;
            }
            // Cell 47
            else if (this.mouseBB.collide(this.cell4.cell7) && this.playableCell47) {
                this.playableCell47 = false;
                this.cX47 = this.X;
                this.hint47 = true;
                this.turnCount++;
            }
            // Cell 48
            else if (this.mouseBB.collide(this.cell4.cell8) && this.playableCell48) {
                this.playableCell48 = false;
                this.cX48 = this.X;
                this.hint48 = true;
                this.turnCount++;
            }
        }
    };

    updateCell3() {
        // Cell 3
        if (this.mouseBB.collide(this.cell3)) {
            this.disableHints();
            // Cell 30
            if (this.mouseBB.collide(this.cell3.cell0) && this.playableCell30) {
                this.playableCell30 = false;
                this.cX30 = this.X;
                this.hint30 = true;
                this.turnCount++;
            }
            // Cell 31
            else if (this.mouseBB.collide(this.cell3.cell1) && this.playableCell31) {
                this.playableCell31 = false;
                this.cX31 = this.X;
                this.hint31 = true;
                this.turnCount++;
            }
            // Cell 32
            else if (this.mouseBB.collide(this.cell3.cell2) && this.playableCell32) {
                this.playableCell32 = false;
                this.cX32 = this.X;
                this.hint32 = true;
                this.turnCount++;
            }
            // Cell 33
            else if (this.mouseBB.collide(this.cell3.cell3) && this.playableCell33) {
                this.playableCell33 = false;
                this.cX33 = this.X;
                this.hint33 = true;
                this.turnCount++;
            }
            // Cell 34
            else if (this.mouseBB.collide(this.cell3.cell4) && this.playableCell34) {
                this.playableCell34 = false;
                this.cX34 = this.X;
                this.hint34 = true;
                this.turnCount++;
            }
            // Cell 35
            else if (this.mouseBB.collide(this.cell3.cell5) && this.playableCell35) {
                this.playableCell35 = false;
                this.cX35 = this.X;
                this.hint35 = true;
                this.turnCount++;
            }
            // Cell 36
            else if (this.mouseBB.collide(this.cell3.cell6) && this.playableCell36) {
                this.playableCell36 = false;
                this.cX36 = this.X;
                this.hint36 = true;
                this.turnCount++;
            }
            // Cell 37
            else if (this.mouseBB.collide(this.cell3.cell7) && this.playableCell37) {
                this.playableCell37 = false;
                this.cX37 = this.X;
                this.hint37 = true;
                this.turnCount++;
            }
            // Cell 38
            else if (this.mouseBB.collide(this.cell3.cell8) && this.playableCell38) {
                this.playableCell38 = false;
                this.cX38 = this.X;
                this.hint38 = true;
                this.turnCount++;
            }
        }
    };

    updateCell2() {
        // Cell 2
        if (this.mouseBB.collide(this.cell2)) {
            this.disableHints();
            // Cell 20
            if (this.mouseBB.collide(this.cell2.cell0) && this.playableCell20) {
                this.playableCell20 = false;
                this.cX20 = this.X;
                this.hint20 = true;
                this.turnCount++;
            }
            // Cell 21
            else if (this.mouseBB.collide(this.cell2.cell1) && this.playableCell21) {
                this.playableCell21 = false;
                this.cX21 = this.X;
                this.hint21 = true;
                this.turnCount++;
            }
            // Cell 22
            else if (this.mouseBB.collide(this.cell2.cell2) && this.playableCell22) {
                this.playableCell22 = false;
                this.cX22 = this.X;
                this.hint22 = true;
                this.turnCount++;
            }
            // Cell 23
            else if (this.mouseBB.collide(this.cell2.cell3) && this.playableCell23) {
                this.playableCell23 = false;
                this.cX23 = this.X;
                this.hint23 = true;
                this.turnCount++;
            }
            // Cell 24
            else if (this.mouseBB.collide(this.cell2.cell4) && this.playableCell24) {
                this.playableCell24 = false;
                this.cX24 = this.X;
                this.hint24 = true;
                this.turnCount++;
            }
            // Cell 25
            else if (this.mouseBB.collide(this.cell2.cell5) && this.playableCell25) {
                this.playableCell25 = false;
                this.cX25 = this.X;
                this.hint25 = true;
                this.turnCount++;
            }
            // Cell 26
            else if (this.mouseBB.collide(this.cell2.cell6) && this.playableCell26) {
                this.playableCell26 = false;
                this.cX26 = this.X;
                this.hint26 = true;
                this.turnCount++;
            }
            // Cell 27
            else if (this.mouseBB.collide(this.cell2.cell7) && this.playableCell27) {
                this.playableCell27 = false;
                this.cX27 = this.X;
                this.hint27 = true;
                this.turnCount++;
            }
            // Cell 28
            else if (this.mouseBB.collide(this.cell2.cell8) && this.playableCell28) {
                this.playableCell28 = false;
                this.cX28 = this.X;
                this.hint28 = true;
                this.turnCount++;
            }
        }
    };

    updateCell1() {
        // Cell 1
        if (this.mouseBB.collide(this.cell1)) {
            this.disableHints();
            // Cell 10
            if (this.mouseBB.collide(this.cell1.cell0) && this.playableCell10) {
                this.playableCell10 = false;
                this.cX10 = this.X;
                this.hint10 = true;
                this.turnCount++;
            }
            // Cell 11
            else if (this.mouseBB.collide(this.cell1.cell1) && this.playableCell11) {
                this.playableCell11 = false;
                this.cX11 = this.X;
                this.hint11 = true;
                this.turnCount++;
            }
            // Cell 12
            else if (this.mouseBB.collide(this.cell1.cell2) && this.playableCell12) {
                this.playableCell12 = false;
                this.cX12 = this.X;
                this.hint12 = true;
                this.turnCount++;
            }
            // Cell 13
            else if (this.mouseBB.collide(this.cell1.cell3) && this.playableCell13) {
                this.playableCell13 = false;
                this.cX13 = this.X;
                this.hint13 = true;
                this.turnCount++;
            }
            // Cell 14
            else if (this.mouseBB.collide(this.cell1.cell4) && this.playableCell14) {
                this.playableCell14 = false;
                this.cX14 = this.X;
                this.hint14 = true;
                this.turnCount++;
            }
            // Cell 15
            else if (this.mouseBB.collide(this.cell1.cell5) && this.playableCell15) {
                this.playableCell15 = false;
                this.cX15 = this.X;
                this.hint15 = true;
                this.turnCount++;
            }
            // Cell 16
            else if (this.mouseBB.collide(this.cell1.cell6) && this.playableCell16) {
                this.playableCell16 = false;
                this.cX16 = this.X;
                this.hint16 = true;
                this.turnCount++;
            }
            // Cell 17
            else if (this.mouseBB.collide(this.cell1.cell7) && this.playableCell17) {
                this.playableCell17 = false;
                this.cX17 = this.X;
                this.hint17 = true;
                this.turnCount++;
            }
            // Cell 18
            else if (this.mouseBB.collide(this.cell1.cell8) && this.playableCell18) {
                this.playableCell18 = false;
                this.cX18 = this.X;
                this.hint18 = true;
                this.turnCount++;
            }
        }
    };

    updateCell0() {
        // Cell 0
        if (this.mouseBB.collide(this.cell0)) {
            this.disableHints();
            // Cell 00
            if (this.mouseBB.collide(this.cell0.cell0) && this.playableCell00) {
                this.playableCell00 = false;
                this.cX00 = this.X;
                this.hint00 = true;
                this.turnCount++;
            }
            // Cell 01
            else if (this.mouseBB.collide(this.cell0.cell1) && this.playableCell01) {
                this.playableCell01 = false;
                this.cX01 = this.X;
                this.hint01 = true;
                this.turnCount++;
            }
            // Cell 02
            else if (this.mouseBB.collide(this.cell0.cell2) && this.playableCell02) {
                this.playableCell02 = false;
                this.cX02 = this.X;
                this.hint02 = true;
                this.turnCount++;
            }
            // Cell 03
            else if (this.mouseBB.collide(this.cell0.cell3) && this.playableCell03) {
                this.playableCell03 = false;
                this.cX03 = this.X;
                this.hint03 = true;
                this.turnCount++;
            }
            // Cell 04
            else if (this.mouseBB.collide(this.cell0.cell4) && this.playableCell04) {
                this.playableCell04 = false;
                this.cX04 = this.X;
                this.hint04 = true;
                this.turnCount++;
            }
            // Cell 05
            else if (this.mouseBB.collide(this.cell0.cell5) && this.playableCell05) {
                this.playableCell05 = false;
                this.cX05 = this.X;
                this.hint05 = true;
                this.turnCount++;
            }
            // Cell 06
            else if (this.mouseBB.collide(this.cell0.cell6) && this.playableCell06) {
                this.playableCell06 = false;
                this.cX06 = this.X;
                this.hint06 = true;
                this.turnCount++;
            }
            // Cell 07
            else if (this.mouseBB.collide(this.cell0.cell7) && this.playableCell07) {
                this.playableCell07 = false;
                this.cX07 = this.X;
                this.hint07 = true;
                this.turnCount++;
            }
            // Cell 08
            else if (this.mouseBB.collide(this.cell0.cell8) && this.playableCell08) {
                this.playableCell08 = false;
                this.cX08 = this.X;
                this.hint08 = true;
                this.turnCount++;
            }
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
        if (this.turnCount === 1) {
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
        if (!this.playableCell00) {
            this.drawTurn(ctx, this.cell0.cell0, this.cX00);
            if (this.hint00) {
                this.playInCell(ctx, this.cell0, 200);
            }
        } if (!this.playableCell01) {
            this.drawTurn(ctx, this.cell0.cell1, this.cX01);
            if (this.hint01) {
                this.playInCell(ctx, this.cell1, 200);
            }
        } if (!this.playableCell02) {
            this.drawTurn(ctx, this.cell0.cell2, this.cX02);
            if (this.hint02) {
                this.playInCell(ctx, this.cell2, 200);
            }
        } if (!this.playableCell03) {
            this.drawTurn(ctx, this.cell0.cell3, this.cX03);
            if (this.hint03) {
                this.playInCell(ctx, this.cell3, 200);
            }
        } if (!this.playableCell04) {
            this.drawTurn(ctx, this.cell0.cell4, this.cX04);
            if (this.hint04) {
                this.playInCell(ctx, this.cell4, 200);
            }
        } if (!this.playableCell05) {
            this.drawTurn(ctx, this.cell0.cell5, this.cX05);
            if (this.hint05) {
                this.playInCell(ctx, this.cell5, 200);
            }
        } if (!this.playableCell06) {
            this.drawTurn(ctx, this.cell0.cell6, this.cX06);
            if (this.hint06) {
                this.playInCell(ctx, this.cell6, 200);
            }
        } if (!this.playableCell07) {
            this.drawTurn(ctx, this.cell0.cell7, this.cX07);
            if (this.hint07) {
                this.playInCell(ctx, this.cell7, 200);
            }
        } if (!this.playableCell08) {
            this.drawTurn(ctx, this.cell0.cell8, this.cX08);
            if (this.hint08) {
                this.playInCell(ctx, this.cell8, 200);
            }
        }
        
        // CELL 1
        if (!this.playableCell10) {
            this.drawTurn(ctx, this.cell1.cell0, this.cX10);
            if (this.hint10) {
                this.playInCell(ctx, this.cell0, 200);
            }
        } if (!this.playableCell11) {
            this.drawTurn(ctx, this.cell1.cell1, this.cX11);
            if (this.hint11) {
                this.playInCell(ctx, this.cell1, 200);
            }
        } if (!this.playableCell12) {
            this.drawTurn(ctx, this.cell1.cell2, this.cX12);
            if (this.hint12) {
                this.playInCell(ctx, this.cell2, 200);
            }
        } if (!this.playableCell13) {
            this.drawTurn(ctx, this.cell1.cell3, this.cX13);
            if (this.hint13) {
                this.playInCell(ctx, this.cell3, 200);
            }
        } if (!this.playableCell14) {
            this.drawTurn(ctx, this.cell1.cell4, this.cX14);
            if (this.hint14) {
                this.playInCell(ctx, this.cell4, 200);
            }
        } if (!this.playableCell15) {
            this.drawTurn(ctx, this.cell1.cell5, this.cX15);
            if (this.hint15) {
                this.playInCell(ctx, this.cell5, 200);
            }
        } if (!this.playableCell16) {
            this.drawTurn(ctx, this.cell1.cell6, this.cX16);
            if (this.hint16) {
                this.playInCell(ctx, this.cell6, 200);
            }
        } if (!this.playableCell17) {
            this.drawTurn(ctx, this.cell1.cell7, this.cX17);
            if (this.hint17) {
                this.playInCell(ctx, this.cell7, 200);
            }
        } if (!this.playableCell18) {
            this.drawTurn(ctx, this.cell1.cell8, this.cX18);
            if (this.hint18) {
                this.playInCell(ctx, this.cell8, 200);
            }
        }
        
        // CELL 2
        if (!this.playableCell20) {
            this.drawTurn(ctx, this.cell2.cell0, this.cX20);
            if (this.hint20) {
                this.playInCell(ctx, this.cell0, 200);
            }
        } if (!this.playableCell21) {
            this.drawTurn(ctx, this.cell2.cell1, this.cX21);
            if (this.hint21) {
                this.playInCell(ctx, this.cell1, 200);
            }
        } if (!this.playableCell22) {
            this.drawTurn(ctx, this.cell2.cell2, this.cX22);
            if (this.hint22) {
                this.playInCell(ctx, this.cell2, 200);
            }
        } if (!this.playableCell23) {
            this.drawTurn(ctx, this.cell2.cell3, this.cX23);
            if (this.hint23) {
                this.playInCell(ctx, this.cell3, 200);
            }
        } if (!this.playableCell24) {
            this.drawTurn(ctx, this.cell2.cell4, this.cX24);
            if (this.hint24) {
                this.playInCell(ctx, this.cell4, 200);
            }
        } if (!this.playableCell25) {
            this.drawTurn(ctx, this.cell2.cell5, this.cX25);
            if (this.hint25) {
                this.playInCell(ctx, this.cell5, 200);
            }
        } if (!this.playableCell26) {
            this.drawTurn(ctx, this.cell2.cell6, this.cX26);
            if (this.hint26) {
                this.playInCell(ctx, this.cell6, 200);
            }
        } if (!this.playableCell27) {
            this.drawTurn(ctx, this.cell2.cell7, this.cX27);
            if (this.hint27) {
                this.playInCell(ctx, this.cell7, 200);
            }
        } if (!this.playableCell28) {
            this.drawTurn(ctx, this.cell2.cell8, this.cX28);
            if (this.hint28) {
                this.playInCell(ctx, this.cell8, 200);
            }
        }
        
        // CELL 3
        if (!this.playableCell30) {
            this.drawTurn(ctx, this.cell3.cell0, this.cX30);
            if (this.hint30) {
                this.playInCell(ctx, this.cell0, 200);
            }
        } if (!this.playableCell31) {
            this.drawTurn(ctx, this.cell3.cell1, this.cX31);
            if (this.hint31) {
                this.playInCell(ctx, this.cell1, 200);
            }
        } if (!this.playableCell32) {
            this.drawTurn(ctx, this.cell3.cell2, this.cX32);
            if (this.hint32) {
                this.playInCell(ctx, this.cell2, 200);
            }
        } if (!this.playableCell33) {
            this.drawTurn(ctx, this.cell3.cell3, this.cX33);
            if (this.hint33) {
                this.playInCell(ctx, this.cell3, 200);
            }
        } if (!this.playableCell34) {
            this.drawTurn(ctx, this.cell3.cell4, this.cX34);
            if (this.hint34) {
                this.playInCell(ctx, this.cell4, 200);
            }
        } if (!this.playableCell35) {
            this.drawTurn(ctx, this.cell3.cell5, this.cX35);
            if (this.hint35) {
                this.playInCell(ctx, this.cell5, 200);
            }
        } if (!this.playableCell36) {
            this.drawTurn(ctx, this.cell3.cell6, this.cX36);
            if (this.hint36) {
                this.playInCell(ctx, this.cell6, 200);
            }
        } if (!this.playableCell37) {
            this.drawTurn(ctx, this.cell3.cell7, this.cX37);
            if (this.hint37) {
                this.playInCell(ctx, this.cell7, 200);
            }
        } if (!this.playableCell38) {
            this.drawTurn(ctx, this.cell3.cell8, this.cX38);
            if (this.hint38) {
                this.playInCell(ctx, this.cell8, 200);
            }
        }
        
        // CELL 4
        if (!this.playableCell40) {
            this.drawTurn(ctx, this.cell4.cell0, this.cX40);
            if (this.hint40) {
                this.playInCell(ctx, this.cell0, 200);
            }
        } if (!this.playableCell41) {
            this.drawTurn(ctx, this.cell4.cell1, this.cX41);
            if (this.hint41) {
                this.playInCell(ctx, this.cell1, 200);
            }
        } if (!this.playableCell42) {
            this.drawTurn(ctx, this.cell4.cell2, this.cX42);
            if (this.hint42) {
                this.playInCell(ctx, this.cell2, 200);
            }
        } if (!this.playableCell43) {
            this.drawTurn(ctx, this.cell4.cell3, this.cX43);
            if (this.hint43) {
                this.playInCell(ctx, this.cell3, 200);
            }
        } if (!this.playableCell44) {
            this.drawTurn(ctx, this.cell4.cell4, this.cX44);
            if (this.hint44) {
                this.playInCell(ctx, this.cell4, 200);
            }
        } if (!this.playableCell45) {
            this.drawTurn(ctx, this.cell4.cell5, this.cX45);
            if (this.hint45) {
                this.playInCell(ctx, this.cell5, 200);
            }
        } if (!this.playableCell46) {
            this.drawTurn(ctx, this.cell4.cell6, this.cX46);
            if (this.hint46) {
                this.playInCell(ctx, this.cell6, 200);
            }
        } if (!this.playableCell47) {
            this.drawTurn(ctx, this.cell4.cell7, this.cX47);
            if (this.hint47) {
                this.playInCell(ctx, this.cell7, 200);
            }
        } if (!this.playableCell48) {
            this.drawTurn(ctx, this.cell4.cell8, this.cX48);
            if (this.hint48) {
                this.playInCell(ctx, this.cell8, 200);
            }
        }
        
        // CELL 5
        if (!this.playableCell50) {
            this.drawTurn(ctx, this.cell5.cell0, this.cX50);
            if (this.hint50) {
                this.playInCell(ctx, this.cell0, 200);
            }
        } if (!this.playableCell51) {
            this.drawTurn(ctx, this.cell5.cell1, this.cX51);
            if (this.hint51) {
                this.playInCell(ctx, this.cell1, 200);
            }
        } if (!this.playableCell52) {
            this.drawTurn(ctx, this.cell5.cell2, this.cX52);
            if (this.hint52) {
                this.playInCell(ctx, this.cell2, 200);
            }
        } if (!this.playableCell53) {
            this.drawTurn(ctx, this.cell5.cell3, this.cX53);
            if (this.hint53) {
                this.playInCell(ctx, this.cell3, 200);
            }
        } if (!this.playableCell54) {
            this.drawTurn(ctx, this.cell5.cell4, this.cX54);
            if (this.hint54) {
                this.playInCell(ctx, this.cell4, 200);
            }
        } if (!this.playableCell55) {
            this.drawTurn(ctx, this.cell5.cell5, this.cX55);
            if (this.hint55) {
                this.playInCell(ctx, this.cell5, 200);
            }
        } if (!this.playableCell56) {
            this.drawTurn(ctx, this.cell5.cell6, this.cX56);
            if (this.hint56) {
                this.playInCell(ctx, this.cell6, 200);
            }
        } if (!this.playableCell57) {
            this.drawTurn(ctx, this.cell5.cell7, this.cX57);
            if (this.hint57) {
                this.playInCell(ctx, this.cell7, 200);
            }
        } if (!this.playableCell58) {
            this.drawTurn(ctx, this.cell5.cell8, this.cX58);
            if (this.hint58) {
                this.playInCell(ctx, this.cell8, 200);
            }
        }
        
        // CELL 6
        if (!this.playableCell60) {
            this.drawTurn(ctx, this.cell6.cell0, this.cX60);
            if (this.hint60) {
                this.playInCell(ctx, this.cell0, 200);
            }
        } if (!this.playableCell61) {
            this.drawTurn(ctx, this.cell6.cell1, this.cX61);
            if (this.hint61) {
                this.playInCell(ctx, this.cell1, 200);
            }
        } if (!this.playableCell62) {
            this.drawTurn(ctx, this.cell6.cell2, this.cX62);
            if (this.hint62) {
                this.playInCell(ctx, this.cell2, 200);
            }
        } if (!this.playableCell63) {
            this.drawTurn(ctx, this.cell6.cell3, this.cX63);
            if (this.hint63) {
                this.playInCell(ctx, this.cell3, 200);
            }
        } if (!this.playableCell64) {
            this.drawTurn(ctx, this.cell6.cell4, this.cX64);
            if (this.hint64) {
                this.playInCell(ctx, this.cell4, 200);
            }
        } if (!this.playableCell65) {
            this.drawTurn(ctx, this.cell6.cell5, this.cX65);
            if (this.hint65) {
                this.playInCell(ctx, this.cell5, 200);
            }
        } if (!this.playableCell66) {
            this.drawTurn(ctx, this.cell6.cell6, this.cX66);
            if (this.hint66) {
                this.playInCell(ctx, this.cell6, 200);
            }
        } if (!this.playableCell67) {
            this.drawTurn(ctx, this.cell6.cell7, this.cX67);
            if (this.hint67) {
                this.playInCell(ctx, this.cell7, 200);
            }
        } if (!this.playableCell68) {
            this.drawTurn(ctx, this.cell6.cell8, this.cX68);
            if (this.hint68) {
                this.playInCell(ctx, this.cell8, 200);
            }
        }
        
        // CELL 7
        if (!this.playableCell70) {
            this.drawTurn(ctx, this.cell7.cell0, this.cX70);
            if (this.hint70) {
                this.playInCell(ctx, this.cell0, 200);
            }
        } if (!this.playableCell71) {
            this.drawTurn(ctx, this.cell7.cell1, this.cX71);
            if (this.hint71) {
                this.playInCell(ctx, this.cell1, 200);
            }
        } if (!this.playableCell72) {
            this.drawTurn(ctx, this.cell7.cell2, this.cX72);
            if (this.hint72) {
                this.playInCell(ctx, this.cell2, 200);
            }
        } if (!this.playableCell73) {
            this.drawTurn(ctx, this.cell7.cell3, this.cX73);
            if (this.hint73) {
                this.playInCell(ctx, this.cell3, 200);
            }
        } if (!this.playableCell74) {
            this.drawTurn(ctx, this.cell7.cell4, this.cX74);
            if (this.hint74) {
                this.playInCell(ctx, this.cell4, 200);
            }
        } if (!this.playableCell75) {
            this.drawTurn(ctx, this.cell7.cell5, this.cX75);
            if (this.hint75) {
                this.playInCell(ctx, this.cell5, 200);
            }
        } if (!this.playableCell76) {
            this.drawTurn(ctx, this.cell7.cell6, this.cX76);
            if (this.hint76) {
                this.playInCell(ctx, this.cell6, 200);
            }
        } if (!this.playableCell77) {
            this.drawTurn(ctx, this.cell7.cell7, this.cX77);
            if (this.hint77) {
                this.playInCell(ctx, this.cell7, 200);
            }
        } if (!this.playableCell78) {
            this.drawTurn(ctx, this.cell7.cell8, this.cX78);
            if (this.hint78) {
                this.playInCell(ctx, this.cell8, 200);
            }
        }
        
        // CELL 8
        if (!this.playableCell80) {
            this.drawTurn(ctx, this.cell8.cell0, this.cX80);
            if (this.hint80) {
                this.playInCell(ctx, this.cell0, 200);
            }
        } if (!this.playableCell81) {
            this.drawTurn(ctx, this.cell8.cell1, this.cX81);
            if (this.hint81) {
                this.playInCell(ctx, this.cell1, 200);
            }
        } if (!this.playableCell82) {
            this.drawTurn(ctx, this.cell8.cell2, this.cX82);
            if (this.hint82) {
                this.playInCell(ctx, this.cell2, 200);
            }
        } if (!this.playableCell83) {
            this.drawTurn(ctx, this.cell8.cell3, this.cX83);
            if (this.hint83) {
                this.playInCell(ctx, this.cell3, 200);
            }
        } if (!this.playableCell84) {
            this.drawTurn(ctx, this.cell8.cell4, this.cX84);
            if (this.hint84) {
                this.playInCell(ctx, this.cell4, 200);
            }
        } if (!this.playableCell85) {
            this.drawTurn(ctx, this.cell8.cell5, this.cX85);
            if (this.hint85) {
                this.playInCell(ctx, this.cell5, 200);
            }
        } if (!this.playableCell86) {
            this.drawTurn(ctx, this.cell8.cell6, this.cX86);
            if (this.hint86) {
                this.playInCell(ctx, this.cell6, 200);
            }
        } if (!this.playableCell87) {
            this.drawTurn(ctx, this.cell8.cell7, this.cX87);
            if (this.hint87) {
                this.playInCell(ctx, this.cell7, 200);
            }
        } if (!this.playableCell88) {
            this.drawTurn(ctx, this.cell8.cell8, this.cX88);
            if (this.hint88) {
                this.playInCell(ctx, this.cell8, 200);
            }
        }
    };

    drawTurn(ctx, cell, X) {
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
        if (this.playableCell0 === 0 && this.playableCell1 === 0 && this.playableCell2 === 0 &&
            this.playableCell3 === 0 && this.playableCell4 === 0 && this.playableCell5 === 0 &&
            this.playableCell6 === 0 && this.playableCell7 === 0 && this.playableCell8 === 0) {
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
        if (this.playableCell00 === false && this.playableCell01 === false && this.playableCell02 === false &&
            this.playableCell03 === false && this.playableCell04 === false && this.playableCell05 === false &&
            this.playableCell06 === false && this.playableCell07 === false && this.playableCell08 === false &&
            !Number.isNaN(this.playableCell00)) {
            this.tieC0 = true;
        }
        // CELL 1
        if (this.playableCell10 === false && this.playableCell11 === false && this.playableCell12 === false &&
            this.playableCell13 === false && this.playableCell14 === false && this.playableCell15 === false &&
            this.playableCell16 === false && this.playableCell17 === false && this.playableCell18 === false &&
            !Number.isNaN(this.playableCell10)) {
            this.tieC1 = true;
        }
        // CELL 2
        if (this.playableCell20 === false && this.playableCell21 === false && this.playableCell22 === false &&
            this.playableCell23 === false && this.playableCell24 === false && this.playableCell25 === false &&
            this.playableCell26 === false && this.playableCell27 === false && this.playableCell28 === false &&
            !Number.isNaN(this.playableCell20)) {
            this.tieC2 = true;
        }
        // CELL 3
        if (this.playableCell30 === false && this.playableCell31 === false && this.playableCell32 === false &&
            this.playableCell33 === false && this.playableCell34 === false && this.playableCell35 === false &&
            this.playableCell36 === false && this.playableCell37 === false && this.playableCell38 === false &&
            !Number.isNaN(this.playableCell30)) {
            this.tieC3 = true;
        }
        // CELL 4
        if (this.playableCell40 === false && this.playableCell41 === false && this.playableCell42 === false &&
            this.playableCell43 === false && this.playableCell44 === false && this.playableCell45 === false &&
            this.playableCell46 === false && this.playableCell47 === false && this.playableCell48 === false &&
            !Number.isNaN(this.playableCell40)) {
            this.tieC4 = true;
        }
        // CELL 5
        if (this.playableCell50 === false && this.playableCell51 === false && this.playableCell52 === false &&
            this.playableCell53 === false && this.playableCell54 === false && this.playableCell55 === false &&
            this.playableCell56 === false && this.playableCell57 === false && this.playableCell58 === false &&
            !Number.isNaN(this.playableCell50)) {
            this.tieC5 = true;
        }
        // CELL 6
        if (this.playableCell60 === false && this.playableCell61 === false && this.playableCell62 === false &&
            this.playableCell63 === false && this.playableCell64 === false && this.playableCell65 === false &&
            this.playableCell66 === false && this.playableCell67 === false && this.playableCell68 === false &&
            !Number.isNaN(this.playableCell60)) {
            this.tieC6 = true;
        }
        // CELL 7
        if (this.playableCell70 === false && this.playableCell71 === false && this.playableCell72 === false &&
            this.playableCell73 === false && this.playableCell74 === false && this.playableCell75 === false &&
            this.playableCell76 === false && this.playableCell77 === false && this.playableCell78 === false &&
            !Number.isNaN(this.playableCell70)) {
            this.tieC7 = true;
        }
        // CELL 8
        if (this.playableCell80 === false && this.playableCell81 === false && this.playableCell82 === false &&
            this.playableCell83 === false && this.playableCell84 === false && this.playableCell85 === false &&
            this.playableCell86 === false && this.playableCell87 === false && this.playableCell88 === false &&
            !Number.isNaN(this.playableCell80)) {
            this.tieC8 = true;
        }
    };




    //--------------------GAME HINTS--------------------
    disableHints() {
        // CELL 0
        this.hint00 = false;
        this.hint01 = false;
        this.hint02 = false;
        this.hint03 = false;
        this.hint04 = false;
        this.hint05 = false;
        this.hint06 = false;
        this.hint07 = false;
        this.hint08 = false;
        // CELL 1
        this.hint10 = false;
        this.hint11 = false;
        this.hint12 = false;
        this.hint13 = false;
        this.hint14 = false;
        this.hint15 = false;
        this.hint16 = false;
        this.hint17 = false;
        this.hint18 = false;
        // CELL 2
        this.hint20 = false;
        this.hint21 = false;
        this.hint22 = false;
        this.hint23 = false;
        this.hint24 = false;
        this.hint25 = false;
        this.hint26 = false;
        this.hint27 = false;
        this.hint28 = false;
        // CELL 3
        this.hint30 = false;
        this.hint31 = false;
        this.hint32 = false;
        this.hint33 = false;
        this.hint34 = false;
        this.hint35 = false;
        this.hint36 = false;
        this.hint37 = false;
        this.hint38 = false;
        // CELL 4
        this.hint40 = false;
        this.hint41 = false;
        this.hint42 = false;
        this.hint43 = false;
        this.hint44 = false;
        this.hint45 = false;
        this.hint46 = false;
        this.hint47 = false;
        this.hint48 = false;
        // CELL 5
        this.hint50 = false;
        this.hint51 = false;
        this.hint52 = false;
        this.hint53 = false;
        this.hint54 = false;
        this.hint55 = false;
        this.hint56 = false;
        this.hint57 = false;
        this.hint58 = false;
        // CELL 6
        this.hint60 = false;
        this.hint61 = false;
        this.hint62 = false;
        this.hint63 = false;
        this.hint64 = false;
        this.hint65 = false;
        this.hint66 = false;
        this.hint67 = false;
        this.hint68 = false;
        // CELL 7
        this.hint70 = false;
        this.hint71 = false;
        this.hint72 = false;
        this.hint73 = false;
        this.hint74 = false;
        this.hint75 = false;
        this.hint76 = false;
        this.hint77 = false;
        this.hint78 = false;
        // CELL 8
        this.hint80 = false;
        this.hint81 = false;
        this.hint82 = false;
        this.hint83 = false;
        this.hint84 = false;
        this.hint85 = false;
        this.hint86 = false;
        this.hint87 = false;
        this.hint88 = false;
    };

    // player help
    playAnywhere(ctx) {
        this.disableHints();
        let playHereBB = new BoundingBox(this.rowX, this.rowY, 600, 600);
        setRainbowStroke(ctx, playHereBB, true);
        ctx.strokeRect(this.rowX, this.rowY, 600, 600);
    };

    playInCell(ctx, cell, dimension) {
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

        ctx.lineWidth = 4;
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




    //--------------------ENABLE/ DISABLE GAME CELLS--------------------
    enableCells() {
        // CELL 0
        this.playableCell00 = true;
        this.playableCell01 = true;
        this.playableCell02 = true;
        this.playableCell03 = true;
        this.playableCell04 = true;
        this.playableCell05 = true;
        this.playableCell06 = true;
        this.playableCell07 = true;
        this.playableCell08 = true;

        // CELL 1
        this.playableCell10 = true;
        this.playableCell11 = true;
        this.playableCell12 = true;
        this.playableCell13 = true;
        this.playableCell14 = true;
        this.playableCell15 = true;
        this.playableCell16 = true;
        this.playableCell17 = true;
        this.playableCell18 = true;

        // CELL 2
        this.playableCell20 = true;
        this.playableCell21 = true;
        this.playableCell22 = true;
        this.playableCell23 = true;
        this.playableCell24 = true;
        this.playableCell25 = true;
        this.playableCell26 = true;
        this.playableCell27 = true;
        this.playableCell28 = true;

        // CELL 3
        this.playableCell30 = true;
        this.playableCell31 = true;
        this.playableCell32 = true;
        this.playableCell33 = true;
        this.playableCell34 = true;
        this.playableCell35 = true;
        this.playableCell36 = true;
        this.playableCell37 = true;
        this.playableCell38 = true;

        // CELL 4
        this.playableCell40 = true;
        this.playableCell41 = true;
        this.playableCell42 = true;
        this.playableCell43 = true;
        this.playableCell44 = true;
        this.playableCell45 = true;
        this.playableCell46 = true;
        this.playableCell47 = true;
        this.playableCell48 = true;

        // CELL 5
        this.playableCell50 = true;
        this.playableCell51 = true;
        this.playableCell52 = true;
        this.playableCell53 = true;
        this.playableCell54 = true;
        this.playableCell55 = true;
        this.playableCell56 = true;
        this.playableCell57 = true;
        this.playableCell58 = true;

        // CELL 6
        this.playableCell60 = true;
        this.playableCell61 = true;
        this.playableCell62 = true;
        this.playableCell63 = true;
        this.playableCell64 = true;
        this.playableCell65 = true;
        this.playableCell66 = true;
        this.playableCell67 = true;
        this.playableCell68 = true;

        // CELL 7
        this.playableCell70 = true;
        this.playableCell71 = true;
        this.playableCell72 = true;
        this.playableCell73 = true;
        this.playableCell74 = true;
        this.playableCell75 = true;
        this.playableCell76 = true;
        this.playableCell77 = true;
        this.playableCell78 = true;

        // CELL 8
        this.playableCell80 = true;
        this.playableCell81 = true;
        this.playableCell82 = true;
        this.playableCell83 = true;
        this.playableCell84 = true;
        this.playableCell85 = true;
        this.playableCell86 = true;
        this.playableCell87 = true;
        this.playableCell88 = true;
    };

    disableCell0() {
        this.playableCell0 = 0;
        this.playableCell00 = false;
        this.playableCell01 = false;
        this.playableCell02 = false;
        this.playableCell03 = false;
        this.playableCell04 = false;
        this.playableCell05 = false;
        this.playableCell06 = false;
        this.playableCell07 = false;
        this.playableCell08 = false;
    };

    disableCell1() {
        this.playableCell1 = 0;
        this.playableCell10 = false;
        this.playableCell11 = false;
        this.playableCell12 = false;
        this.playableCell13 = false;
        this.playableCell14 = false;
        this.playableCell15 = false;
        this.playableCell16 = false;
        this.playableCell17 = false;
        this.playableCell18 = false;
    };

    disableCell2() {
        this.playableCell2 = 0;
        this.playableCell20 = false;
        this.playableCell21 = false;
        this.playableCell22 = false;
        this.playableCell23 = false;
        this.playableCell24 = false;
        this.playableCell25 = false;
        this.playableCell26 = false;
        this.playableCell27 = false;
        this.playableCell28 = false;
    };

    disableCell3() {
        this.playableCell3 = 0;
        this.playableCell30 = false;
        this.playableCell31 = false;
        this.playableCell32 = false;
        this.playableCell33 = false;
        this.playableCell34 = false;
        this.playableCell35 = false;
        this.playableCell36 = false;
        this.playableCell37 = false;
        this.playableCell38 = false;
    };

    disableCell4() {
        this.playableCell4 = 0;
        this.playableCell40 = false;
        this.playableCell41 = false;
        this.playableCell42 = false;
        this.playableCell43 = false;
        this.playableCell44 = false;
        this.playableCell45 = false;
        this.playableCell46 = false;
        this.playableCell47 = false;
        this.playableCell48 = false;
    };

    disableCell5() {
        this.playableCell5 = 0;
        this.playableCell50 = false;
        this.playableCell51 = false;
        this.playableCell52 = false;
        this.playableCell53 = false;
        this.playableCell54 = false;
        this.playableCell55 = false;
        this.playableCell56 = false;
        this.playableCell57 = false;
        this.playableCell58 = false;
    };

    disableCell6() {
        this.playableCell6 = 0;
        this.playableCell60 = false;
        this.playableCell61 = false;
        this.playableCell62 = false;
        this.playableCell63 = false;
        this.playableCell64 = false;
        this.playableCell65 = false;
        this.playableCell66 = false;
        this.playableCell67 = false;
        this.playableCell68 = false;
    };

    disableCell7() {
        this.playableCell7 = 0;
        this.playableCell70 = false;
        this.playableCell71 = false;
        this.playableCell72 = false;
        this.playableCell73 = false;
        this.playableCell74 = false;
        this.playableCell75 = false;
        this.playableCell76 = false;
        this.playableCell77 = false;
        this.playableCell78 = false;
    };

    disableCell8() {
        this.playableCell8 = 0;
        this.playableCell80 = false;
        this.playableCell81 = false;
        this.playableCell82 = false;
        this.playableCell83 = false;
        this.playableCell84 = false;
        this.playableCell85 = false;
        this.playableCell86 = false;
        this.playableCell87 = false;
        this.playableCell88 = false;
    };
}