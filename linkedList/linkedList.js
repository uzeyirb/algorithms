const { log } = require("console");
const { Node } = require("./node");

function LList() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    // this.findPrevious = findPrevious;
    this.display = display;
    this.print = print;
    this.dispReverse = dispReverse;
    this.findLast = findLast;
}

// function findPrevious(item) {
//     var currNode = this.head;
//     while (!(currNode.next === null) && (currNode.next.element != item)) {
//         currNode = currNode.next;
//     }
//     return currNode;
// }

function print(element) {
    console.log(element)
}

function remove(item) {
    var currNode = this.find(item);
    if (!(currNode.next == null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}
function findLast() {
    var currNode = this.head;
    while (!(currNode.next === null)) {
        currNode = currNode.next;
    }
    return currNode;
}

function dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while (!(currNode.previous === null)) {
        print(currNode.element);
        currNode = currNode.previous;
    }
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next === null) &&
            !(currNode.next.element == 'head')
    ) {
        log(currNode.next.element);
        currNode = currNode.next;
    }
}

module.exports = {
  LList,
};
