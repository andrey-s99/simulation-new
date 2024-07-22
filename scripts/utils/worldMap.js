import config from "./config.js";

export default class WorldMap {
    constructor() {
        this.mapData = new Map();
    }

    clearMap() {}

    updateMap() {}

    isCellEmpty(position) {
        if (this.getEntity(position)) {
            return false;
        } else {
            return true;
        }
    }

    getEntity(position) {
        return this.mapData.get(position.toMapKey());
    }

    addEntity(entity, position) {
        this.mapData.set(position.toMapKey(), entity);
    }

    removeEntity(position) {
        this.mapData.delete(position.toMapKey());
    }

    moveEntity(entity, from, to) {
        this.removeEntity(from);
        this.addEntity(entity, to);
    }
}