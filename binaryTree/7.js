function levelOrderTraversal(x){
    if(x==null) return null
    const q = [];
    q.unshift(x)
    console.log(q)
    while(q.length!==0){
        ele = q.pop()
        console.log(ele.data)
        if(ele.left) q.unshift(ele.left)
        if(ele.right) q.unshift(ele.right)
    }
}
const run = () => {
    const binaryTree = require('./utils.js');
    levelOrderTraversal(binaryTree)
}
module.exports = run
