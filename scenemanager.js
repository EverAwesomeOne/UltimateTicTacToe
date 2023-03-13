class Scenemanager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;
        
        this.loadLevel(titleScreen);
    };

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    loadLevel(level) {
        this.currentLevel = level;
        this.clearEntities();

        if (this.currentLevel === winScreen) {
            let endGame = new EndGameScreen(this.game, true);
            this.game.addEntity(endGame);
        }
        
        else if (this.currentLevel === tieScreen) {
            let endGame = new EndGameScreen(this.game, false);
            this.game.addEntity(endGame);
        }

        else if (this.currentLevel === titleScreen) {
            let titleScreen = new TitleScreen(this.game);
            this.game.addEntity(titleScreen);
        }

        else if (this.currentLevel === playGame) {
            let tictactoe = new TicTacToe(this.game);
            tictactoe.showChatBox = true;
            let hud = new HUD(this.game);

            this.game.addEntity(hud);
            this.game.addEntity(tictactoe);

        }
    };

    update() {
        // do nothing
    };

    draw(ctx) {
        // do nothing
    };
}