// we can use arrays to store complex data in an object

function weekTemps() {
    this.dataStore = [];
    this.add = add;
    this.average = average;

}

function add(temp) {
    this.dataStore.push(temp);
}

function average() {
    var total = 0;

    for (var i = 0; i < this.dataStore.length; ++i) {
        total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}

var thisWeek = new weekTemps();

thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
let avg = thisWeek.average();
console.log(avg);