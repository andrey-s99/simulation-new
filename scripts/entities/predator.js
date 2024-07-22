import Creature from "./creature.js"
import config from "../utils/config.js";

export default class Predator extends Creature {
    constructor(position) {
        super(position, config.entitySprites.predator, config.predatorSpeed, config.predatorHP);
        this.attackDamage = config.predatorAttackDamage;
    }

    makeMove() {}

    attack() {}
}