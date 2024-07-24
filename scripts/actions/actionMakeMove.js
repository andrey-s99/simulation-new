import Action from "./action.js"
import { Herbivore, Predator} from "../entities/entities.js"

export default class ActionMakeMove extends Action {
    perform(map) {
        const creaturesToMove = [...map.getEntitiesByClassName(Herbivore), ...map.getEntitiesByClassName(Predator)];

        creaturesToMove.forEach(creature => creature.makeMove(map));
    }
}