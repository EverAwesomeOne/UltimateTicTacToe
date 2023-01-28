const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// sprites
ASSET_MANAGER.queueDownload("./images/dino_original.png");

ASSET_MANAGER.downloadAll(() => {
    const canvas = document.getElementById("gameWorld");
    const ctx = canvas.getContext("2d");

    gameEngine.init(ctx);

    new Scenemanager(gameEngine);

    gameEngine.start();
});