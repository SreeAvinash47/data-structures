// Preorder tree traversal
const binaryTree  = require('./utils.js');
//Recursion
function preOrder(x){
    result = []
    if(x==null) return null
    console.log(x.data)
    preOrder(x.left)
    preOrder(x.right)
}
//Iterative
function preOrderIterative(x){
    let ele;
    const stack = [];
    stack.push(x)
    while(stack.length!==0){
        ele = stack.pop()
        console.log(ele.data)
        if(ele.right) stack.push(ele.right)
        if(ele.left) stack.push(ele.left)
    }
}
module.exports = function main(){
    //preOrder(binaryTree)
    preOrderIterative(binaryTree)
}
