const { Queue } = require("./queueu");

var q = new Queue();
q.enqueue("John");
q.enqueue("Jane");
console.log(q.toString());
