const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.downloadAll(() => {
    const canvas = document.getElementById("gameWorld");
    const ctx = canvas.getContext("2d");

    PARAMS.CANVAS_WIDTH = canvas.width;
    PARAMS.CANVAS_HEIGHT = canvas.height;

    gameEngine.init(ctx);

    // scene manager
    new Scenemanager(gameEngine);

    gameEngine.start();
});