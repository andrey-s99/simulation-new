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
        const nexPosition = path[0];

        if (path.length) {
            // console.log(`${this.sprite} from ${this.position.x}:${this.position.y} found the goal and its next move is ${path[0].x}:${path[0].y}`);
            const entityInNextPosition = map.getEntity(nexPosition); // Keep track of the entity in the next position
            map.moveEntity(this, this.position, nexPosition);
            this.tryToEat(entityInNextPosition);
        } else {
            // console.log(`${this.sprite} from ${this.position.x}:${this.position.y} reached the goal`);
        }
    }
    
    tryToEat(entity) {
        if (entity instanceof Grass) {
            const HPtoRestore = config.restoreHP();
            console.log(`${this.sprite} chomps on some ${config.entitySprites.grass} and restores ${HPtoRestore} HP at ${entity.position.x}:${entity.position.y}`)
            this.HP += HPtoRestore;
        }
    }
}