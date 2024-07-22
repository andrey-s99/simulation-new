export default class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toMapKey() {
        return `${this.x}:${this.y}`;
    }
}