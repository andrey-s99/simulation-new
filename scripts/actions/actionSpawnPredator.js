import Predator from "../entities/predator.js";
import config from "../utils/config.js";
import ActionSpawn from "./actionSpawn.js";

export default class ActionSpawnPredator extends ActionSpawn {
    spawnEntity(position) {
        return new Predator(position);
    }

    getSpawnRate() {
        return config.predatorSpawnRate;
    }
}