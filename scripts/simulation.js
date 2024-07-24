import { WorldMap, Renderer, TurnTimer, config, Position, AStar } from "./utils/utils.js"
import { ActionSpawnGrass, ActionSpawnRock, ActionSpawnTree, ActionSpawnHerbivore, ActionSpawnPredator, ActionMakeMove } from "./actions/actions.js"

export default class Simulation {
    constructor() {
        this.map = new WorldMap();
        this.renderer = new Renderer();

        this.turnCounter = 0;
        this.turnTimer = new TurnTimer(config.turnDelay);

        this.initActions = [new ActionSpawnGrass(), 
                            new ActionSpawnRock(),
                            new ActionSpawnTree(),
                            new ActionSpawnHerbivore(),
                            new ActionSpawnPredator()];

        this.turnActions = [new ActionMakeMove()];
    }

    startSimulation() { 
        // Spawn new entities if first turn
        if (this.turnCounter === 0) {
            this.initActions.forEach(action => action.perform(this.map));
        }

        this.nextTurn();
    }

    pauseSimulation() {
        this.turnTimer.stopTimer();
    }

    nextTurn() {
        console.log(`Turn: ${this.turnCounter}`);

        this.turnActions.forEach(action => action.perform(this.map));

        this.renderer.renderMap(this.map);
        this.turnCounter++;
        if (this.turnCounter < config.turnLimit) {
            this.turnTimer.startTimer(this.nextTurn.bind(this)); // Binding `this` to the method to not lose the context
        }
    }
}