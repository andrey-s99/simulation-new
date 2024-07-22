import { Grass, Rock, Tree, Herbivore, Predator } from "./entities/entities.js"

export default class Simulation {
    constructor(x, y) {
        this.predator = new Predator(x, y);
    }

    startSimulation() {
        console.log(this.predator);
    }
}