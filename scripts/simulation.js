import { WorldMap, Renderer, TurnTimer, config, Position } from "./utils/utils.js"
import { ActionSpawnGrass, ActionSpawnRock, ActionSpawnTree, ActionSpawnHerbivore, ActionSpawnPredator } from "./actions/actions.js"
import AStar from "./utils/AStar.js";

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

        this.turnActions = [];
    }

    startSimulation() { 
        // Spawn new entities if first turn
        if (this.turnCounter === 0) {
            for (const action of this.initActions) {
                action.perform(this.map);
            }
        }
        
        this.nextTurn();
    }

    pauseSimulation() {
        this.turnTimer.stopTimer();
    }

    nextTurn() {
        console.log(`Turn: ${this.turnCounter}`);
        this.renderer.renderMap(this.map);
        this.turnCounter++;
        const aStar = new AStar(new Position(0, 0), [new Position(10, 3), new Position(7, 15)]);
        aStar.findPath();
        if (this.turnCounter < config.turnLimit) {
            this.turnTimer.startTimer(this.nextTurn.bind(this)); // Binding `this` to the method to not lose the context
        }
    }
}