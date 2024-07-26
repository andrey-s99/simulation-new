// Setup config as a singleton global immutable instance
class Config {
    constructor() {
        if (Config.instance) {
            return Config.instance;
        }

        this.turnLimit = 1000;
        this.turnDelay = 1000;

        this.mapWidth = 30;
        this.mapHeight = 30;
        this.tileSize = 30;

        this.ground = "🟫";

        this.canvasWidth = (this.mapWidth * this.tileSize) + 12;
        this.canvasHeight = (this.mapHeight * this.tileSize) + 12;

        // Spawn rates at start
        this.rockSpawnRate = Math.floor((this.mapWidth * this.mapHeight) * 0.03); // 3% of map is rocks
        this.grassSpawnRate = Math.floor((this.mapWidth * this.mapHeight) * 0.04); // 4% of map is grass
        this.treeSpawnRate = Math.floor((this.mapWidth * this.mapHeight) * 0.05); // 5% of map is trees

        this.herbivoreSpawnRate = Math.floor((this.mapWidth * this.mapHeight) * 0.05); // 5% of map is herbivores
        this.predatorSpawnRate = Math.floor((this.mapWidth * this.mapHeight) * 0.02); // 2% of map is predators
        
        this.minHerbivoreAmount = Math.floor((this.mapWidth * this.mapHeight) * 0.01); // min 2% of the map should be herbivores at all times
        this.minGrassAmount = Math.floor((this.mapWidth * this.mapHeight) * 0.01); // min 2% of the map should be grass at all times

        this.herbivoreSpeed = 1;
        this.herbivoreHP = 20;

        this.herbivoreMinHPRestore = 5;
        this.herbivoreMaxHPRestore = 11;

        this.predatorSpeed = 2;
        this.predatorHP = 20;
        this.predatorAttackDamage = 10;

        this.entitySprites = {
            tree: "🌲",
            grass: "🌿",
            rock: "⛰️",

            herbivore: "🐄",

            predator: "🐅",
        }

        Config.instance = this;
    }

    // Restore random amount of HP to herbivore when it eats grass
    getHPToRestoreHerbivore() {
        return Math.floor((Math.random() * (this.herbivoreMaxHPRestore - this.herbivoreMinHPRestore)) + this.herbivoreMinHPRestore);
    }
}

const config = new Config();
Object.freeze(config);

export default config;