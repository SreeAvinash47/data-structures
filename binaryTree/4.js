// Inorder tree traversal
const binaryTree  = require('./utils.js');
//Recursion
function inOrder(x){
    if(x==null) return null
    inOrder(x.left)
    console.log(x.data)
    inOrder(x.right)
}

function inOrderIterative(x){
    const stack = [];
    let curr = x;
    while((stack.length!=0) || curr){
        if(curr){
            stack.push(curr)
            curr = curr.left
        }else{
            curr = stack.pop()
            console.log(curr.data)
            curr = curr.right
        }
    }
}
module.exports = function main(){
    //inOrder(binaryTree)
    inOrderIterative(binaryTree)
}
