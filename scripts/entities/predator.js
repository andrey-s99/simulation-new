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
        const aStar = new AStar(this.position, map.getEntitiesPositionsByClassName(Herbivore), map);

        const path = aStar.findPath();

        if (path.length) {
            console.log(`${this.sprite} from ${this.position.x}:${this.position.y} found the goal and its next move is ${path[0].x}:${path[0].y}`);
            map.moveEntity(this, this.position, path[0]);
        } else {
            console.log(`${this.sprite} from ${this.position.x}:${this.position.y} reached the goal`);
        }
    }

    attack() {}
}