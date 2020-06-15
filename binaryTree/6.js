// Postorder tree traversal
const binaryTree  = require('./utils.js');
//Recursion
function postOrder(x){
    result = []
    if(x==null) return null
    postOrder(x.left)
    postOrder(x.right)
    console.log(x.data)
}
//Iterative
function postOrderIterative(x){
    let ele;
    const output = [];
    const stack = [];
    stack.push(x)
    while(stack.length!==0){
        ele = stack.pop()
        output.push(ele)
        if(ele.left) stack.push(ele.left)
        if(ele.right) stack.push(ele.right)
    }
    while(output.length!=0){
        console.log(output.pop().data)
    }
}
module.exports = function main(){
    //postOrder(binaryTree)
    postOrderIterative(binaryTree)
}
