// Setup config as a singleton global immutable instance
class Config {
    constructor() {
        if (Config.instance) {
            return Config.instance;
        }

        this.turnLimit = 300;
        this.turnDelay = 1000;

        this.mapWidth = 20;
        this.mapHeight = 20;
        this.tileSize = 50;

        this.ground = "🟫";

        this.canvasWidth = (this.mapWidth * this.tileSize) + 12;
        this.canvasHeight = (this.mapHeight * this.tileSize) + 12;

        // Spawn rates
        this.rockSpawnRate = Math.floor((this.mapWidth * this.mapHeight) * 0.03); // 3% of map is rocks
        this.grassSpawnRate = Math.floor((this.mapWidth * this.mapHeight) * 0.08); // 8% of map is grass
        this.treeSpawnRate = Math.floor((this.mapWidth * this.mapHeight) * 0.05); // 5% of map is trees

        this.herbivoreSpawnRate = Math.floor((this.mapWidth * this.mapHeight) * 0.05); // 5% of map is herbivores
        this.predatorSpawnRate = Math.floor((this.mapWidth * this.mapHeight) * 0.03); // 3% of map is predators
        
        this.herbivoreSpeed = 1;
        this.herbivoreHP = 20;

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
}

const config = new Config();
Object.freeze(config);

export default config;