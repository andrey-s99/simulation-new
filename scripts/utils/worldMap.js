import { Position } from "./utils.js";

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

    getEntitiesPositionsByClassName(name) {
        return this.getEntitiesByClassName(name).map(item => item = item.position);
    }

    getEntitiesByClassName(name) {
        let result = [];

        this.mapData.forEach((value) => {
            if (value instanceof name) {
                result.push(value);
            }
        })

        return result;
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
        entity.position = to;
    }
}