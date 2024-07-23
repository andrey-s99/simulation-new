import Position from "./position";

class Node {
    constructor(position, g, h, f, parent) {
        this.position = position;
        this.g = g;
        this.h = h;
        this.f = f;
        this.parent = parent;
    }
}

// AStar algorithm that finds an optimal path from the start to the nearest goal from the list of goals
// Does not even use a worldMap!!!
export default class AStar {
    constructor (start, goals) {
        this.start = start; // Start position
        this.goals = goals; // Array of goal positions
        this.openList = []; // Set of nodes to explore
    }

    // Chebyshev distance based
    #heuristic(from, to) {
        return Math.max(Math.abs(to.x - from.x),Math.abs(to.y - from.y));
    }

    #findNeighbors(node) {
        let neighbors = [];

        const distances = [         
            {x: 0, y: -1}, // top        
            {x: 1, y: -1}, // top-right         
            {x: 1, y: 0}, // right           
            {x: 1, y: 1}, // bottom-right            
            {x: 0, y: 1}, // bottom        
            {x: -1, y: 1},  // bottom-left     
            {x: -1, y: 0}, // left
            {x: -1, y: -1} // top-left
        ];

        for (const distance of distances) {
            const position = new Position(node.position.x + distance.x, node.position.y + distance.y);
            if (position.isValid()) {
                neighbors.push(position);
            }
        }

        return neighbors;
    }

    findPath() {
        // Add the start node to the openList
        this.openList.push(new Node(this.start, 0, this.#heuristic(this.start, this.goals[0]), 0, null));

        while(this.openList.length) {
            // Get the node with the lowest f value
            this.openList.sort((a, b) => a.f - b.f);
            const currentNode = this.openList.shift();

            // Check if the goal is reached
            if (this.goals.some((goal) => goal.equals(currentNode.position))) {
                console.log(`Found path: ${currentNode}`);
                return;
            }

            // Find and iterate through positions of neighbors
            for (const neighbor of this.#findNeighbors(currentNode)) {
                
                const g = currentNode.g + 1;
                const h = Math.min(...this.goals.map(goal => this.#heuristic(neighbor, goal))); // Get the distance to the closest goal
                const f = g + h;

                const nodeInList = this.openList.find(node => node.position.equals(neighbor));
                if (nodeInList && g < nodeInList.g) { // Found better path to the current neghbor
                    nodeInList.g = g;
                    nodeInList.f = f;
                    nodeInList.h = h;
                    nodeInList.parent = currentNode;
                } else { // Add node to the list for further evaluation
                    this.openList.push(new Node(neighbor, 
                        currentNode.g + 1, 
                        h,
                        this.g + this.h,
                        currentNode));
                }
            }
        }

        console.log(`Could not find path`);
        return;
    }
}