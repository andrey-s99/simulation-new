import config from "./config.js";
import Position from "./position.js";

export default class Renderer {
    constructor() {
        this.ctx = this.setupCanvas();
        this.tileSize = config.tileSize;
    }

    setupCanvas() {
        const mapCanvas = document.getElementById("map-canvas");
        mapCanvas.height = config.canvasHeight;
        mapCanvas.width = config.canvasWidth;
        return mapCanvas.getContext("2d");
    }

    renderMap(map) {
        this.#clearScreen();

        for (let y = 0; y < config.mapHeight; y++) {
            for (let x = 0; x < config.mapWidth; x++) {
                let entity = map.getEntity(new Position(x, y));

                if (entity) {
                    this.#drawTile(entity.sprite, x, y);
                } else {
                    this.#drawTile(config.ground, x, y);
                }
            }
        }
    }

    #drawTile(sprite, x, y) {
        this.ctx.font = `${this.tileSize}px sans-serif`;
        this.ctx.fillText(sprite, x * this.tileSize, y * this.tileSize + this.tileSize);
    }

    // Clear the whole canvas
    #clearScreen() {
        this.ctx.clearRect(0, 0, config.canvasWidth, config.canvasHeight)
    }
}