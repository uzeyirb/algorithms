const { log } = require("console");
const { BST } = require("./binarySearchTree");
const putStr = require("./putStr");

async function search() {
    var nums = new BST();
    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);
    
    var min = nums.getMin();
    log("The minimum value of the BST is: " + min);
    var max = nums.getMax();
    log("The max value of the BST is: " + max)
    
    
    putStr("Enter a value to search for: ");
    
    const value = await putStr("Enter a value to search for: ");

    var found = nums.find(value);

    if (found !== null) {
        log("Found " + value + " in the BST.");
    }
    else {
        log(value + "was not found in the BST")
    }
    
}

search();