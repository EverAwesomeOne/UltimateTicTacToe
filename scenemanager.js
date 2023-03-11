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
            this.game.addEntity(new EndGameScreen(this.game, true));
        }
        
        if (this.currentLevel === loseScreen) {
            this.game.addEntity(new EndGameScreen(this.game, false));
        }

        if (this.currentLevel === titleScreen) {
            this.game.addEntity(new TitleScreen(this.game));
        }

        if (this.currentLevel === playGame) {
            this.game.addEntity(new HUD(this.game));
            this.game.addEntity(new TicTacToe(this.game));
        }
    };

    update() {
        // do nothing
    };

    draw(ctx) {
        // do nothing
    };
};