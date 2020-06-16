//Problem reverse level order traversal
function reverseLevelOrder(x){
    if(x==null) return null
    let ele;
    const stack = [];  // output
    const q = []; // for level order
    q.push(x)
    while(q.length!==0){
        ele = q.pop()
        stack.push(ele.data)
        if (ele.right) q.unshift(ele.right)
        if (ele.left) q.unshift(ele.left)
    }
    console.log(stack.reverse())
}
function main(){
    const binaryTree = require('./utils.js');
    reverseLevelOrder(binaryTree)
}
module.exports = main;
