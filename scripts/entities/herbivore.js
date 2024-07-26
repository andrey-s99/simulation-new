import Creature from "./creature.js"
import { Grass } from "../entities/entities.js"
import config from "../utils/config.js";
import { AStar } from "../utils/utils.js";

export default class Herbivore extends Creature {
    constructor(position) {
        super(position, config.entitySprites.herbivore, config.herbivoreSpeed, config.herbivoreHP);
    }

    makeMove(map) {
        const aStar = new AStar(this.position, map, [Grass]);

        const path = aStar.findPath();

        if (path.length) {
            console.log(`${this.sprite} from ${this.position.x}:${this.position.y} found the goal and its next move is ${path[0].x}:${path[0].y}`);
            map.moveEntity(this, this.position, path[0]);
        } else {
            console.log(`${this.sprite} from ${this.position.x}:${this.position.y} reached the goal`);
        }
    }
    
    eat() {}
}