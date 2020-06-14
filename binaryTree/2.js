const binaryTree = require('./utils.js')

function height(x){
    if (x==null) return -1
    return 1+Math.max(height(x.left), height(x.right))
}
function main(){
    console.log(height(binaryTree))}
module.exports = main
