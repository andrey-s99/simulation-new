export default class MinHeap {
    constructor () {
        this.heap = [];
    }

    // Left child 2i + 1
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    // Right child 2i + 2
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    // Parent Math.floor((i - 1) / 2)
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    // If index is in heap bounds then child or parent exists
    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.heap.length
    }

    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.heap.length
    }

    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }

    getLeftChild(parentIndex) {
        return this.heap[this.getLeftChildIndex(parentIndex)];
    }

    getRightChild(parentIndex) {
        return this.heap[this.getRightChildIndex(parentIndex)];
    }

    getParent(childIndex) {
        return this.heap[this.getParentIndex(childIndex)];
    }

    swap(a, b) {
        const temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    // Insert an element to the bottom of the heap
    // Call heapifyUp to sort the tree
    insert(element) {
        // Add the element to the bottom level of the heap
        this.heap.push(element);
        this.heapifyUp();
    }

    heapifyUp() {
        // Start with the lat element
        let index = this.heap.length - 1;
        // While the current node has a parent and parent is larger than the child
        while(this.hasParent(index) && this.getParent(index).getPriority() > this.heap[index].getPriority()) {
            const parentIndex = this.getParentIndex(index);
            // Swap child with parent
            this.swap(index, parentIndex);
            index = parentIndex;
        }    
    }

    // Remove and return root from the heap
    // Call heapifyDown to sort the tree
    extract() {
        if (this.isEmpty()) {
            return null;
        }

        // Get the root
        const root = this.heap[0];

        // Replace the root with the last element
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();

        this.heapifyDown();
        
        return root;
    }

    heapifyDown() {
        let index = 0;
        // While the current node has children
        while(this.hasLeftChild(index)) {
            // Get the larger child
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.getRightChild(index).getPriority() < this.getLeftChild(index).getPriority()) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            // If parent is smaller than children, the the order is correct -- return
            if (this.heap[index].getPriority() < this.heap[smallerChildIndex].getPriority()) {
                break;
            } else {
                // Swap parent with the larger child
                this.swap(index, smallerChildIndex);
            }

            index = smallerChildIndex;
        }
    }

    findNodeByPosition(position) {
        return this.heap.find(item => item.element.position.equals(position));
    }
}