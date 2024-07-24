import config from "./config.js";

export default class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toMapKey() {
        return `${this.x}:${this.y}`;
    }

    equals(other) {
        return ((this.x === other.x) && (this.y === other.y));
    }

    isValid() {
        return ((this.x < config.mapWidth) && (this.y < config.mapHeight))
                && ((this.x >= 0) && (this.y >= 0));
    }
}