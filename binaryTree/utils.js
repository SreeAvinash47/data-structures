// Generate teh binary tree
class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right= null
    }
}
function binaryTree(perfect=false){
    let x;
    if(!perfect){
    x = new Node(2);
	x.left = new Node(3);
	x.right = new Node(4);
	x.left.left = new Node(5);
	x.left.right = new Node(6);
	x.right.left = new Node(7);
	x.left.right.left = new Node(8);
    x.left.right.right = new Node(9);
    return x
    }else{
        x = new Node(1)
        x.left = new Node(2)
        x.right = new Node(3)
        x.left.left = new Node(4)
        x.left.right = new Node(5)
        x.right.left = new Node(6)
        x.right.right = new Node(7)
        x.left.left.left = new Node(8)
        x.left.left.right = new Node(9)
        x.left.right.left = new Node(10)
        x.left.right.right = new Node(11)
        x.right.left.left = new Node(12)
        x.right.left.right = new Node(13)
        x.right.right.left = new Node(14)
        x.right.right.right = new Node(15)
        return x
    }

}
module.exports = binaryTree(true)

