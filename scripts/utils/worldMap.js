import config from "./config.js";

export default class WorldMap {
    constructor() {
        this.mapData = new Map();
    }

    clearMap() {}

    updateMap() {}

    getEntity(position) {
        return this.mapData.get(position.toMapKey());
    }

    addEntity(entity) {
        this.mapData.set(entity.position.toMapKey(), entity);
    }

    removeEntity() {}
}