//Definition of a list abstract data type ADT
//List is an ordered sequence of data

 function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; //initializes an empty array to store
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.previous = previous;
    this.next = next;
    this.hasPrevious = hasPrevious;
    this.hasNext = hasNext;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    //By assigning contains to this.contains you're ensuring that when you create an instance of the list object
    //that instance will have a method called contains
    this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i){
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

function moveTo(position) {
    this.pos = position;
}

function previous() {
    return this.dataStore[--this.pos];
}

function next() {
    return this.dataStore[this.pos++];
}
function hasNext() {
    if (this.pos > this.listSize - 1) {
        return false;
    } else {
        return true;
    }
}

function hasPrevious() {
    if (this.pos <= 0) {
        return false;
    } else {
        return true;
    }
}
function front() {
    this.pos = 0;
}
function end() {
    this.pos = this.listSize - 1;
}
function currPos() {
    return pos;
}

function getElement() {
    return this.dataStore[this.pos];
}
var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
names.front();




module.exports = {
    List,
}