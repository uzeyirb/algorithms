const { BST } = require("./binarySearchTree");

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("PostOrder traversal: ");
nums.postOrder(nums.root);
