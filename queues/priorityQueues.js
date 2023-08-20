//A priority queue is one where elements are removed from the queue
// based on a priority constraint


const { log } = require("console");
const { Queue } = require("./queueu");

function Patient(name, code) {
    this.name = name;
    this.code = code;
}


var ed = new Queue();

var p = new Patient("Smith", 5);
ed.enqueue(p);

var p = new Patient("Jones", 4);
ed.enqueue(p);

var p = new Patient("Fehrenbach", 6);
ed.enqueue(p);

var p = new Patient("Brown", 1);
ed.enqueue(p);

var p = new Patient("Ingram", 1);
ed.enqueue(p);



//first round

seen = ed.dequeue();
log("Patient being treated: " + seen[0].name);
log("Patients waiting to be seen: ");
ed.print();


//second round

seen = ed.dequeue();
log("Patient being treated: " + seen[0].name);
log("Patients waiting to be seen: ");
ed.print();

//third round

seen = ed.dequeue();
log("Patient being treated: " + seen[0].name);
log("Patients waiting to be seen: ");
ed.print();

//fourth round

seen = ed.dequeue();
log("Patient being treated: " + seen[0].name);
log("Patients waiting to be seen: ");
ed.print();