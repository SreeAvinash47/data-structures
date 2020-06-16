// Top view of Binary Tree
function topView(x){
    if(x===null) return null
    const q=[]
    const output=[]
    const hash = {}
    let ele, temp
    x.key=0
    q.push(x)
    while(q.length){
        ele = q.pop()
        if(ele.key in hash){
            temp = hash[String(ele.key)]
            temp.push(ele.data)
        }else{
            hash[String(ele.key)] = [ele.data]
        }
        if (ele.left) {
            ele.left.key = ele.key - 1
            q.unshift(ele.left)
        }
        if (ele.right) {
            ele.right.key = ele.key + 1
            q.unshift(ele.right)
        }
    }
    let keys = Object.keys(hash)
    keys.sort((a,b)=>a-b)
    keys.forEach(item=>{output.push(hash[item].shift())})
    console.log(output)
}
function main(){
    const binaryTree = require('./utils.js');
    topView(binaryTree)
}
module.exports = main
