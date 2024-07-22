import Tree from "../entities/tree.js";
import config from "../utils/config.js";
import ActionSpawn from "./actionSpawn.js";

export default class ActionSpawnTree extends ActionSpawn {
    spawnEntity(position) {
        return new Tree(position);
    }

    getSpawnRate() {
        return config.treeSpawnRate;
    }
}
