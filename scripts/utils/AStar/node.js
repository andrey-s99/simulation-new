export default class Node {
    constructor(position, g, h, f, parent) {
        this.position = position;
        this.g = g;
        this.h = h;
        this.f = f;
        this.parent = parent;
    }
}