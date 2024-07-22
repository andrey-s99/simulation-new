import Entity from "./entity.js"
import config from "../utils/config.js";

export default class Rock extends Entity {
    constructor(position) {
        super(position, config.entitySprites.rock);
    }
}