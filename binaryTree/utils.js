// Generate teh binary tree
class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right= null
    }
}
function binaryTree(){
    let x = new Node(2);
	x.left = new Node(3);
	x.right = new Node(4);
	x.left.left = new Node(5);
	x.left.right = new Node(6);
	x.right.left = new Node(7);
	x.left.right.left = new Node(8);
    x.left.right.right = new Node(9);
    return x

}
module.exports = binaryTree()

