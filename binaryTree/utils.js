class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right= null
    }
}
function binaryTree(){
    let x = new Node(15);
	x.left = new Node(10);
	x.right = new Node(20);
	x.left.left = new Node(8);
	x.left.right = new Node(12);
	x.right.left = new Node(16);
	x.right.right = new Node(25);
    x.right.right.right = new Node(26);
    return x

}
module.exports = binaryTree()

