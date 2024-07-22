import Herbivore from "../entities/herbivore.js";
import config from "../utils/config.js";
import ActionSpawn from "./actionSpawn.js";

export default class ActionSpawnHerbivore extends ActionSpawn {
    spawnEntity(position) {
        return new Herbivore(position);
    }

    getSpawnRate() {
        return config.herbivoreSpawnRate;
    }
}