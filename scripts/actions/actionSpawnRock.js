import Rock from "../entities/rock.js";
import config from "../utils/config.js";
import ActionSpawn from "./actionSpawn.js";

export default class ActionSpawnRock extends ActionSpawn {
    spawnEntity(position) {
        return new Rock(position);
    }

    getSpawnRate() {
        return config.rockSpawnRate;
    }
}