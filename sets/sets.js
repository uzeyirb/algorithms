

function Sets() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.contains = contains;
    this.show = show;
}

function difference(set) {
    var tempSet = new Sets();
    for (var i = 0; i < this.dataStore.length; ++i){
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i])
        }
    }
    return tempSet;
}


function subset(set) {
    if (this.size() > set.size()) {
       return false;
    }
    else {
       for(var member of this.dataStore) {
          if (!set.contains(member)) {
             return false;
          }
       }
    }
    return true;
}
 
function size() {
    return this.dataStore.length;
}

function intersect(set) {
    var tempSet = new Sets();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}




function union(set) {
    var tempSet = new Sets();
    for (var i = 0; i < this.dataStore.length; ++i) {
        tempSet.add(this.dataStore[i]);
    }
    for (var i = 0; i < set.dataStore.length; ++i) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}

function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    }
    else {
        return false;
    }
}

function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    }
    else {
        return false;
    }
}

function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    }
    else {
        return false;
    }
}

function show() {
    return this.dataStore;
}



module.exports = {
    Sets,
};