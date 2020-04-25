// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        if (!this.head) return 0;
        let node = this.head;
        let counter = 1;
        while (node.next) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) return null;
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if (!this.head) return;
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;
        let node = this.head;
        if (!this.head.next) {
            this.head = null;
            return;
        }
        while (node) {
            // find before the last one
            if (!node.next.next) {
                break;
            }
            node = node.next;
        }
        node.next = null;
    }

    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        this.getLast().next = new Node(data);
    }

    getAt(num) {
        let node = this.head;
        let counter = 0;
        while (node) {
            if (counter === num) {
                return node;
            }
            node = node.next;
            counter++;
        }
        return null;
    }

    removeAt(num) {
        if (!this.head || this.size() < num) return;
        if (num === 0) {
            this.head = this.head.next;
            return;
        }
        const previousNode = this.getAt(num - 1);
        if (!previousNode || !previousNode.next) return;
        previousNode.next = previousNode.next.next
    }

    insertAt(data, num) {
        const newNode = new Node(data, this.getAt(num));
        if (!newNode.next) return this.insertLast(data);
        if (!this.head || num === 0) return this.head = newNode;
        this.getAt(num - 1).next = newNode;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
        return;
    }
    *[Symbol.iterator]() {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
