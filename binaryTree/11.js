function leftView(x){
    if(x===null) return null
    const q=[]
    const output=[]
    let ele, temp;
    let qCount;
    q.push(x)
    while(q.length){
        qCount = q.length
        temp=0
        while(qCount){
        ele = q.pop()
        temp==0?output.push(ele.data):null
        if(ele.left) q.unshift(ele.left)
        if(ele.right) q.unshift(ele.right)
        qCount--
        temp++
        }
    }
    console.log(output)
}
function main(){
    const binaryTree = require('./utils.js');
    leftView(binaryTree)
}
module.exports = main
