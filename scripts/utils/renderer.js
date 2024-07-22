import config from "./config.js";
import Position from "./position.js";

export default class Renderer {

    renderMap(map) {
        for (let y = 0; y < config.mapHeight; y++) {
            let line = "";
            for (let x = 0; x < config.mapWidth; x++) {
                let entity = map.getEntity(new Position(x, y));
                if (entity) {
                    line += entity.sprite;
                } else {
                    line += "_";
                }
            }
            console.log(line);
        }
    }
}