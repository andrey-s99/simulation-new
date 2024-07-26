import Grass from "../entities/grass.js";
import config from "../utils/config.js";
import ActionSpawn from "./actionSpawn.js";

export default class ActionSpawnGrass extends ActionSpawn {
    perform(map) {
        let spawnRate = this.getSpawnRate();
        
        while (spawnRate && map.getEntitiesByClassName(Grass).length <= config.minGrassAmount) {
            const spawnPosition = this.getNewSpawnPosition(map);
            const newEntity = this.spawnEntity(spawnPosition);
            map.addEntity(newEntity, newEntity.position);

            spawnRate--;
        }
    }

    spawnEntity(position) {
        return new Grass(position);
    }

    getSpawnRate() {
        return config.grassSpawnRate;
    }
}