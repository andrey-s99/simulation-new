import { Grass, Rock, Tree, Herbivore, Predator } from "./entities/entities.js"
import { WorldMap, Renderer, config } from "./utils/utils.js"
import { ActionSpawnGrass, ActionSpawnRock, ActionSpawnTree, ActionSpawnHerbivore, ActionSpawnPredator } from "./actions/actions.js"

export default class Simulation {
    constructor() {
        this.map = new WorldMap();
        this.renderer = new Renderer();

        this.turnCount = 0;

        this.initActions = [new ActionSpawnGrass(), 
                            new ActionSpawnRock(),
                            new ActionSpawnTree(),
                            new ActionSpawnHerbivore(),
                            new ActionSpawnPredator()];

        this.turnActions = [];
    }

    startSimulation() { 
        for (const action of this.initActions) {
            action.perform(this.map);
        }

        this.renderer.renderMap(this.map);
    }
}