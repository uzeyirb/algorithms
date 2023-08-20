const { log } = require("console");
const { BST } = require("./binarySearchTree");
const putStr = require("./putStr");

async function main() {
    var nums = new BST();
    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);
    nums.insert(122);

    console.log("Inorder traversal: ");
   nums.inOrder(nums.root);
    //console.log("Preorder traversal: ");
    //nums.preOrder(nums.root);
    //console.log("Postorder traversal: ");
   // nums.postOrder(nums.root);
    //var min = nums.getMin();
    //console.log("The minimum value of the BST is: " + min);
   //var max = nums.getMax();
    //console.log("The maximm value of the BST is: " + max);

    const value = await putStr("Enter a value to search for: ");
    var found = nums.find(value);
    if (found !== null) {
        log("Found " + value + " in the BST.")
    } else {
        console.log(value + " was not found in the BST.");
    }
  
}

main();