const BinarySearchTree = require('./BinarySearchTree')

// 4. What does this program do?
// Without running this code in your code editor, 
// explain what the following program does. 
// Show with an example the result of executing this program. 
// What is the runtime of this algorithm?

//This function adds up the value of the left node, root node, and right node
//best-case: linear O(n)
function tree(t){
    //if there is no tree, return 0 value
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

// 5. Height of a BST
// Write an algorithm to find the height of a binary search tree. 
// What is the time complexity of your algorithm?
function height(bst) {
    //if current node is null
    if(!bst) {
        return 0;
    } else {
        // traverse through left and right nodes until you reach null 
        if (bst.left && !bst.right) {
            return 1 + height(bst.left);
        } else if (bst.right && !bst.left) {
            return 1 + height(bst.right);
        } else if (!bst.right && !bst.left) {
            return 1;
        } else {
            return 1 + max(height(bst.left), height(bst.right));
        }
    }
}

function max(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

// 6. Is it a BST?
// Write an algorithm to check whether an arbitrary binary tree 
// is a binary search tree, assuming the tree does not contain duplicates.
function isAValidBinarySearchTree(bst) {
    //what makes a valid BST? 
    //nodes, leaf nodes and, nodes with 2 children, 1 left child or 1 right child
    //in reference to the parent: left node has to smaller , every right node has to be larger
    // prove things false first, what is absolutely not true- rule this out first
    // GOAL: make it to the leaf node

    // if tree does not have a left or right, return true, nothing wrong with a tree
    // that has one element
    if (!bst.left && !bst.right) {
        return true;
    }
    // if there is a left 
    if (bst.left) {
        //left is greater, not a bst
        if (bst.left.key > bst.key) {
            return false;
        }
        // recursively call to check on subtrees of the left
        // need to make it to the leaf node
        return isAValidBinarySearchTree(bst.left);
    }
    // if there is a right
    if (bst.right) {
        //right is less, not a bst
        if (bst.right.key < bst.key) {
            return false;
        }
        // recursively call to check on subtrees of the right
        return isAValidBinarySearchTree(bst.right);
    }
}

// 7. 3rd largest node
// Write an algorithm to find the 3rd largest node in a binary search tree.


// 8. Balanced BST
// Write an algorithm that checks if a BST is balanced 
// (i.e., a tree where no 2 leaves differ in distance from the root by more than 1).


// 9. Are they the same BSTs?
// You are given two arrays which represent two sequences of keys 
// that are used to create two binary search trees. 
// Write a program that will tell whether the two BSTs will be identical 
// or not without actually constructing the tree. 
// You may use another data structure such as an array or a linked list but 
// don't construct the BST. What is the time complexity of your algorithm? 

// E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 
// are two sequences of arrays but will create the 
// exact same BSTs and your program should return true.

let arr1 = [3, 5, 4, 6, 1, 0, 2];
let arr2 = [3, 1, 5, 2, 4, 6, 0];