import { Rock, Tree, Herbivore, Predator } from "../entities/entities.js";

export default class WorldMap {
    constructor() {
        this.mapData = new Map();
    }

    isCellEmpty(position) {
        return !this.mapData.has(position.toMapKey());
    }

    isCellWalkable(position, goalsNames) {
        return goalsNames.some((name) => this.getEntity(position) instanceof name) || this.isCellEmpty(position);
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