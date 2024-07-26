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
            const entityInNextPosition = map.getEntity(nexPosition); // Keep track of the entity in the next position
            map.moveEntity(this, this.position, nexPosition);
            this.tryToEat(entityInNextPosition);
        } 
    }
    
    tryToEat(entity) {
        if (entity instanceof Grass) {
            const HPtoRestore = config.getHPToRestoreHerbivore();
            console.log(`${this.sprite} chomps on some ${config.entitySprites.grass} and restores ${HPtoRestore} HP at ${entity.position.x}:${entity.position.y}`)
            this.HP += HPtoRestore;
        }
    }
}