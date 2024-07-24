import MinHeap from "./minHeap.js";

class PQElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    getPriority() {
        return this.priority;
    }
}

export default class PriorityQueue {
    constructor () {
        this.queue = new MinHeap();
    }

    enqueue(element, priority) {
        const newPQElement = new PQElement(element, priority);
        this.queue.insert(newPQElement);
    }

    dequeue() {
        const pQElement = this.queue.extract();
        return pQElement ? pQElement.element : null;
    }

    findNodeByPosition(position) {
        return this.queue.findNodeByPosition(position);
    }

    isEmpty() {
        return this.queue.isEmpty();
    }
}