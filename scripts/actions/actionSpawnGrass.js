import Grass from "../entities/grass.js";
import config from "../utils/config.js";
import ActionSpawn from "./actionSpawn.js";

export default class ActionSpawnGrass extends ActionSpawn {
    spawnEntity(position) {
        return new Grass(position);
    }

    getSpawnRate() {
        return config.grassSpawnRate;
    }
}