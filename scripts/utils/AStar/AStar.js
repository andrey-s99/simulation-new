import Position from "../position.js";
import Node from "./node.js"
import PriorityQueue from "./priorityQueue.js"

// AStar algorithm that finds an optimal path from the start to the nearest goal from the list of goals
// Does not even use a worldMap!!!
export default class AStar {
    constructor (start, goals) {
        this.start = start; // Start position
        this.goals = goals; // Array of goal positions
        // this.openList = []; // List of nodes to explore
        this.openList = new PriorityQueue();
        this.closedList = new Set() // Set of evaluated nodes
        console.log(goals);
    }

    // Chebyshev distance based
    #heuristic(from, to) {
        return Math.max(Math.abs(to.x - from.x),Math.abs(to.y - from.y));
    }

    #addNodeToOpenList(position, currentNode, g, h) {
        const f = g + h;

        const nodeInList = this.openList.findNodeByPosition(position);
        if (nodeInList && g < nodeInList.g) { // Found better path to the node
            nodeInList.g = g;
            nodeInList.f = f;
            nodeInList.h = h;
            nodeInList.parent = currentNode;
        } else { // Add node to the list for further evaluation
            this.openList.enqueue(new Node(position, g, h, f, currentNode), f);
        }
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

    #processNeighbor(neighbor, currentNode) {
        // Skip the neighbor if it was already evaluated
        if (this.closedList.has(`${neighbor.x},${neighbor.y}`)) {
            return;
        }
        
        const g = currentNode.g + 1;
        const h = Math.min(...this.goals.map(goal => this.#heuristic(neighbor, goal))); // Get the distance to the closest goal
        this.#addNodeToOpenList(neighbor, currentNode, g, h);
    }

    #reconstructPath(endNode) {
        let parent = endNode.parent;
        let path = [];

        while (parent) {
            path.push(parent);
            parent = parent.parent;
        }

        return path.reverse().map(node => node = node.position);
    }

    findPath() {
        // Add the start node to the openList
        this.openList.enqueue(new Node(this.start, 
                                    0, 
                                    this.#heuristic(this.start, this.goals[0]), 
                                    0, 
                                    null), 0);
        

        while(!this.openList.isEmpty()) {

            // Get the node with the lowest f value
            const currentNode = this.openList.dequeue();
            this.closedList.add(`${currentNode.position.x},${currentNode.position.y}`);

            // Check if the goal is reached
            if (this.goals.some((goal) => goal.equals(currentNode.position))) {
                return this.#reconstructPath(currentNode);
            }
            
            // Find and iterate through positions of neighbors
            const neighbors = this.#findNeighbors(currentNode);
            neighbors.forEach(neighbor => this.#processNeighbor(neighbor, currentNode));
        }

        return [];
    }
}