import Creature from "./creature.js"
import config from "../utils/config.js";
import { AStar } from "../utils/utils.js";
import { Herbivore } from "../entities/entities.js"

export default class Predator extends Creature {
    constructor(position) {
        super(position, config.entitySprites.predator, config.predatorSpeed, config.predatorHP);
        this.attackDamage = config.predatorAttackDamage;
    }

    makeMove(map) {
        const aStar = new AStar(this.position, map, [Herbivore]);

        const path = aStar.findPath();
        const nexPosition = path[0];

        if (path.length) {
            const entityInNextPosition = map.getEntity(nexPosition); // Keep track of the entity in the next position
            if (this.canAttack(entityInNextPosition)) { // Try to attack if herbivore is in next position
                this.attack(entityInNextPosition);
            } else {
                map.moveEntity(this, this.position, nexPosition); // Move to the next cell if nothing to attack
            }
        }
    }

    canAttack(entity) {
        return entity instanceof Herbivore;
    }

    attack(herbivore) {
        herbivore.HP -= this.attackDamage;
        console.log(`${this.sprite} attacks ${config.entitySprites.herbivore} for ${this.attackDamage} damage at ${herbivore.position.x}:${herbivore.position.y}`);
    }
}