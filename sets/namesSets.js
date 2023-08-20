const { Sets } = require("./sets");

var names = new Sets();

names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");

if (names.add("Mike")) {
   // console.log("Mike added");
} 
else {
    //console.log("Can't add Mike, must already be in set");
}

//console.log(names.show());


var it = new Sets();
it.add("Cynthia");
it.add("Clayton");
it.add("Jennifer");
it.add("Danny");
it.add("Jonathan");
it.add("Terrill");
it.add("Raymond");
it.add("Mike");
var dmp = new Sets();
dmp.add("Cynthia");
dmp.add("Raymond");
dmp.add("Jonathan");

if (dmp.subset(it)) {
    console.log("DMP is a subset of IT.");
}
else {
    console.log("DMP is not a subset of IT");
}