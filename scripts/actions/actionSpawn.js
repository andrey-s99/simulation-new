import config from "../utils/config.js"
import Position from "../utils/position.js";
import Action from "./action.js"

export default class ActionSpawn extends Action {
    perform(map) {
        let spawnRate = this.getSpawnRate();
        
        while (spawnRate) {
            const spawnPosition = this.getNewSpawnPosition(map);
            const newEntity = this.spawnEntity(spawnPosition);
            map.addEntity(newEntity, newEntity.position);

            spawnRate--;
        }
    }

    spawnEntity() {}
    getSpawnRate() {}

    getNewSpawnPosition(map) {
        let spawnPosition = this.getRandomPosition();
        while (!map.isCellEmpty(spawnPosition)) {
            spawnPosition = this.getRandomPosition();
        }

        return spawnPosition;
    }

    getRandomPosition() {
        const x = Math.floor(Math.random() * config.mapWidth);
        const y = Math.floor(Math.random() * config.mapHeight);

        return new Position(x, y);
    }
}