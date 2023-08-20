const { log } = require("console");
const { BST } = require("./binarySearchTree");
const putStr = require("./putStr");

async function removeN() {
    var nums = new BST();
    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);

    console.log("\nInorder traversal before removal:");
    nums.inOrder(nums.root);

    const value = await putStr("Enter a value to remove: ");
    var found = nums.find(value);
    
    if (found !== null) {
        console.log("Found " + value + " in the BST.");
        nums.remove(found);
        console.log("Inorder traversal after removal:");
        nums.inOrder(nums.root);
    }
    else {
        console.log(value + " was not found in the BST.");
    }
}

removeN();