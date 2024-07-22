import Entity from "./entity.js"
import config from "../utils/config.js";

export default class Grass extends Entity {
    constructor(position) {
        super(position, config.entitySprites.grass);
    }
}