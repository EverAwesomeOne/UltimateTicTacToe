const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// sprites
ASSET_MANAGER.queueDownload("./sprites/dino.png");

ASSET_MANAGER.downloadAll(() => {
    const canvas = document.getElementById("gameWorld");
    const ctx = canvas.getContext("2d");

    gameEngine.init(ctx);

    // scene manager
    new Scenemanager(gameEngine);

    gameEngine.start();
});