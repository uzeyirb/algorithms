const { log } = require("console");
const { BST } = require("./binarySearchTree");
const putStr = require("./putStr");

function prArray(arr) {

    putStr(arr[0].toString() + " ");
    for (var i = 1; i < arr.length; ++i) {
        putStr(arr[i].toString() + " ");
        if (i % 10 == 0) {
            putStr("\n");
        }
    }
}

function genArray(length) {
    var arr = [];
    for (var i = 0; i < length; ++i) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}

var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
for (var i = 0; i < grades.length; ++i) {
   var g = grades[i];
   var grade = gradedistro.find(g);
   if (grade === null) {
      gradedistro.insert(g);
   }
   else {
      gradedistro.update(g);
   }
}
var cont = "y";

async function counting() {
    while (cont === "y") {
        var g = parseInt(await putStr("\n\nEnter a grade:  "));
        var aGrade = gradedistro.find(g);
        if (aGrade === null) {
            console.log("No occurrences of " + g);
        } else {
            console.log("Occurrences of " + g + ": " + aGrade.count);
        }
        cont = await putStr("Look at another grade (y/n)?");
    }
}
counting();

