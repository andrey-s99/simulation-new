import Action from "./action.js"
import { Herbivore, Predator} from "../entities/entities.js"

export default class ActionRemoveZeroHPCreatures extends Action {
    perform(map) {
        const creatures = [...map.getEntitiesByClassName(Herbivore), ...map.getEntitiesByClassName(Predator)];

        creatures.forEach(creature => {
            if (creature.HP <= 0) {
                console.log(`${creature.sprite} died at ${creature.position.x}:${creature.position.y}`);
                map.removeEntity(creature.position);
            }
        });
    }
}