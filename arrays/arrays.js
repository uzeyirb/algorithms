//Creating arrays from strings
let sentence = "the quick brown fox jumped over the lazy dog";

let words = sentence.split(" ");

for (let i = 0; i < words.length; i++){
    //console.log("word " + i + ": " + words[i]);
}

//Aggregate Array Operations

var nums = [];
for (var i = 0; i < 10; ++i){
    nums[i] = i + 1;
}
// console.log(nums)
// var samenums = nums; //shallow copy
// nums[0] = 400;
// console.log(samenums[0]);

function copy(arr1, arr2) {
    for (var i = 0; i < arr1.length; ++i) {
        arr2[i] = arr1[i];
    }
}
var samenums = [];
copy(nums, samenums);
nums[0] = 400;
console.log(samenums[0])

//Accessor Functions
//Searching for value

let names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"]
let another = ["Raymond", "Cynthia", "Bryan"]

let itDiv = names.concat(another);
console.log(itDiv);

//Mutator Functions

//Adding Elements to an Array

let nums2 = [1, 2, 3, 4, 5];
console.log(nums2);
nums2.push(6)
console.log(nums2);

//Removing Elements from an Array

let nums3 = [1, 2, 3, 4, 5, 9];
nums3.pop();
console.log(nums3);


// the mutator function we need to remove element from beggining is shiflt()

let nums4 = [6, 1, 2, 3, 4, 5, 9];
nums4.shift();
console.log(nums4);
nums4.shift();
console.log(nums4);

//Adding removing from middle
//splice()

let nums5 = [6, 1, 2, 3, 4, 5, 9];
nums5.splice(1, 3, 33, 44)
console.log(nums5);

//Putting Array Elements in order 
nums2.reverse();
console.log(nums2);

names.sort();
console.log(names);

//Iterator functions
//forEach()

function square(num) {
    console.log(num, num * num);
}
nums2.forEach(square)
 
//every()

function isEven(num) {
    return num % 2 == 0;
}

let even = nums2.every(isEven);
if (even) {
    console.log("all numbers are even");
}
else {
    console.log("not all numbers are even");
}

//some()

let someEven = nums2.some(isEven);
if (someEven) {
    console.log(" some numbers are even");
}
else {
    console.log("no numbers are even");
}


// reduce()

function add(total, value) {
    return total + value;
}
let sum = nums2.reduce(add);
let sum2 = nums2.reduce();
console.log("recude",sum2);
//let sum2 = nums2.reduce();
//console.log("total", sum2);

//iterator to return new Array
//map() filter()

function curve(grade) {
    return grade += 5;
}

let grades = [77, 65, 81, 92, 83];
let newGrades = grades.map(curve);
console.log("Map", newGrades);

function first(word) {
    return word[0];
}

let words2 = ["for", "your", "information"];
let acronym = words2.map(first)
console.log(acronym.join(""));


//filter()

function isEven2(num) {
    return num % 2 == 0;
}

function isOdd(num) {
    return num % 2 != 0;
}

let nums9 = [];

for (let i = 0; i < 20; ++i){
    nums[i] = i + 1;
}