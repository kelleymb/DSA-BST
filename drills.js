// 4. What does this program do?
// Without running this code in your code editor, 
// explain what the following program does. 
// Show with an example the result of executing this program. 
// What is the runtime of this algorithm?

//This function adds up the value of the left node, root node, and right node
//best-case: constant O(1) :: worst case: linear O(n)
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
