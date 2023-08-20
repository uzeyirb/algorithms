const { HashTable } = require("./hashTable");
const readline = require('readline');
// const putStr = require('putStr');

var pnumbers = new HashTable();

var name, number;
while (name != "finished") {
    console.log("Enter a name (or 'finished' when done): ");
    name = readline();
    if (name == "finished") {
        break;
    }
    putStr("Enter a number: ");
    number = readline();
    pnumbers.put(name, number);
}
name = "";
putStr("Name for number (Enter quit to stop): ");
while (name != "quit") {
    name = readline();
    if (name == "quit") {
        break;
    }
    console.log(name + " 's number is " + pnumbers.get(name));
    putStr("Name for number (Enter quit to stop): ");
}