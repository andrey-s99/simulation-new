import Herbivore from "../entities/herbivore.js";
import config from "../utils/config.js";
import ActionSpawn from "./actionSpawn.js";

export default class ActionSpawnHerbivore extends ActionSpawn {
    perform(map) {
        let spawnRate = this.getSpawnRate();
        
        while (spawnRate && map.getEntitiesByClassName(Herbivore).length <= config.minHerbivoreAmount) {
            const spawnPosition = this.getNewSpawnPosition(map);
            const newEntity = this.spawnEntity(spawnPosition);
            map.addEntity(newEntity, newEntity.position);

            spawnRate--;
        }
    }

    spawnEntity(position) {
        return new Herbivore(position);
    }

    getSpawnRate() {
        return config.herbivoreSpawnRate;
    }
}