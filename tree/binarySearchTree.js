const { Node } = require("./node");
const putStr = require("./putStr");

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove = remove;
    this.removeNode = removeNode;
    this.update = update;
}

function remove(data) {
    this.root = removeNode(this.root, data);
 }
 
 function removeNode(node, data) {
    if (node === null) {
       return null;
    }
    if (data == node.data) {
       // node has no children
       if (node.left === null && node.right === null) {
          return null;
       }
       // node has no left child
       if (node.left === null) {
          return node.right;
       }
       // node has no right child
       if (node.right === null) {
          return node.left;
       }
       // node has two children
       var tempNode = getSmallest(node.right);
       node.data = tempNode.data;
       node.right = this.removeNode(node.right, tempNode.data);
       return node;
    }
    else if (data < node.data) {
       node.left = this.removeNode(node.left, data);
       return node;
    }
    else {
       node.right = removeNode(node.right, data);
       return node;
    }
 }
 
 function getSmallest(node) {
   if (node.left == null) {
     return node;
   }
   else {
     return getSmallest(node.left);
   }
 }

function find(data) {
    var current = this.root;
    while (current && current.data != data) {
        if (data < current.data) {
            current = current.left;
        }
        else {
            current = current.right;
        }
    }
    return current;
}

function getMin() {
    var current = this.root;
    while (current.left !== null) {
        current = current.left;
    }
    return current.data;
}

function getMax() {
    var current = this.root;
    while (current.right !== null) {
        current = current.right;
    }
    return current.data;
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root === null) {
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current === null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if (current === null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if (node !== null) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}

function preOrder(node) {
    if (node !== null) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
}
}

function postOrder(node) {
    if (node !== null) {
       postOrder(node.left);
       postOrder(node.right);
       putStr(node.show() + " ");
    }
}
 
function update(data) {
    var grade = this.find(data);
    grade.count++;
    return grade;
}

module.exports = {
    BST,
}