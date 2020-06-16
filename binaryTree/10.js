// Print all nodes in a PERFECT binary tree in a specific order
// Top Down order
function topDownOrderTraversal(x){
    if(x==null) return x
    const q1=[],q2=[];
    let flag = true;
    let ele, q1Count;
    q1.push(x.left)
    q2.push(x.right)
    const output=[x.data];
    while(q1.length){
        q1Count = q1.length
        while(q1Count){
            ele = q1.pop()
            output.push(ele.data)
            if (ele.left) q1.unshift(ele.left)
            if (ele.right) q1.unshift(ele.right)
            ele = q2.pop()
            output.push(ele.data)
            if (ele.right) q2.unshift(ele.right)
            if (ele.left) q2.unshift(ele.left)
            q1Count--
        }
    }
    console.log(output)
}
// Bottom up order
function bottomUpOrderTraversal(x){
    if(x==null) return x
    const q1=[],q2=[];
    let flag = true;
    let ele, q1Count;
    let tempArr, actualOutput=[];
    q1.push(x.left)
    q2.push(x.right)
    const output=[[x.data]];
    while(q1.length){
        q1Count = q1.length
        tempArr=[]
        while(q1Count){
            ele = q1.pop()
            tempArr.push(ele.data)
            if (ele.left) q1.unshift(ele.left)
            if (ele.right) q1.unshift(ele.right)
            ele = q2.pop()
            tempArr.push(ele.data)
            if (ele.right) q2.unshift(ele.right)
            if (ele.left) q2.unshift(ele.left)
            q1Count--
        }
        output.push(tempArr)
    }
    output.reverse().forEach(item=>{
        actualOutput = [...actualOutput, ...item]
    })
    console.log(actualOutput)
}
function main(){
    const binaryTree = require('./utils.js');
    //topDownOrderTraversal(binaryTree)
    bottomUpOrderTraversal(binaryTree)

}
module.exports = main
