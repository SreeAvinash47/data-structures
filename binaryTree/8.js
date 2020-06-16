
// Problem: Traverse teh tree in spiral order
function spiralTraversal(x){
    const q=[];
    let flag = true; // Flag to indicate odd or even level
    let qElementCount = 0;
    let ele;
    const output = [];
    q.push(x);
    while(q.length!=0){
        qElementCount = q.length;
        if(flag){
            while(qElementCount!==0){
                ele = q.pop()
                output.push(ele.data)
                if (ele.right) q.unshift(ele.right)
                if (ele.left) q.unshift(ele.left)
                qElementCount -= 1
            }
        }else{
            while(qElementCount!==0){
                ele = q.shift()
                output.push(ele.data)
                if (ele.left) q.push(ele.left)
                if (ele.right) q.push(ele.right)
                qElementCount -= 1
            }
        }
        flag = !flag
    }
    console.log(output)
}

function main(){
    const binaryTree = require('./utils.js')
    spiralTraversal(binaryTree)
}

module.exports = main
