import config from "../utils/config.js"
import Position from "../utils/position.js";
import Action from "./action.js"

export default class ActionSpawn extends Action {
    perform(map) {
        let spawnRate = this.getSpawnRate();
        
        while (spawnRate) {
            const spawnPosition = this.getNewSpawnPosition(map);
            const newEntity = this.spawnEntity(spawnPosition);
            map.addEntity(newEntity);

            spawnRate--;
        }
    }

    spawnEntity() {}
    getSpawnRate() {}

    getNewSpawnPosition(map) {
        let newSpawnPosition = this.getRandomPosition();
        while (this.isOccupied(newSpawnPosition, map)) {
            newSpawnPosition = this.getRandomPosition();
        }

        return newSpawnPosition;
    }

    getRandomPosition() {
        const x = Math.floor(Math.random() * config.mapWidth);
        const y = Math.floor(Math.random() * config.mapHeight);

        return new Position(x, y);
    }

    isOccupied(position, map) {
        if (map.getEntity(position)) {
            return true;
        }

        return false;
    }
}