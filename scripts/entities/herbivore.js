import Creature from "./creature.js"
import config from "../utils/config.js";

export default class Herbivore extends Creature {
    constructor(position) {
        super(position, config.entitySprites.herbivore, config.herbivoreSpeed, config.herbivoreHP);
    }

    makeMove() {}
    
    eat() {}
}