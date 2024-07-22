import Entity from "./entity.js"

export default class Creature extends Entity {
    constructor(position, sprite, speed, HP) {
        super(position, sprite);
        this.speed = speed;
        this.HP = HP;
    }

    makeMove() {}
}