const { log } = require("console");
const { Queue } = require("./queueu");
const fs = require('fs');
function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function getDancers(males, females) {
    var names = fs.readFileSync('dancers.txt', 'utf8').split("\n");

    for (var i = 0; i < names.length; ++i) {
        names[i] = names[i].trim();
    }

    for (var i = 0; i < names.length; ++i) {
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];
        if (sex == "F") {
            females.enqueue(new Dancer(name, sex));
        } else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

function dance(males, females) {
    console.log("The dance partners are: \n");

    while (!females.empty() && !males.empty()) {
        person = females.dequeue();
        console.log("Female dance is: " + person.name);
        person = males.dequeue();
        console.log(" and the male dance is: " + person.name);
    }

}

var maleDancers = new Queue();
var femalesDancers = new Queue();

getDancers(maleDancers, femalesDancers);

dance(maleDancers, femalesDancers);

if (!femalesDancers.empty()) {
    console.log(femalesDancers.front().name + " is waiting to dance.");
}
if (!maleDancers.empty()) {
    console.log(maleDancers.front().name + " is waiting to dance.");
}

if (maleDancers.count() > 0) {
    console.log("There are " + maleDancers.count() + " male dancers waiting to dance.");
}

if (femalesDancers.count() > 0) {
    console.log("There are " + femalesDancers.count() + " female dancers waiting to dance")
}