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
    if(!bst) {
        return 0;
    } else {

    }
}

// 6. Is it a BST?
// Write an algorithm to check whether an arbitrary binary tree 
// is a binary search tree, assuming the tree does not contain duplicates.


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