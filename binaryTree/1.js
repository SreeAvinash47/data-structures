//Problem: Check if two given binary trees are identical or not

class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right= null
    }
}

function isIdentical(x, y){
    if(x==null || y==null) return true
    return (x && y) && (x.data===y.data) && isIdentical(x.left, y.left) && isIdentical(x.right, y.right)
}

function main() {
    x = new Node(15);
	x.left = new Node(10);
	x.right = new Node(20);
	x.left.left = new Node(8);
	x.left.right = new Node(12);
	x.right.left = new Node(16);
	x.right.right = new Node(25);

	y = new Node(15);
	y.left = new Node(10);
	y.right = new Node(20);
	y.left.left = new Node(8);
	y.left.right = new Node(12);
	y.right.left = new Node(16);
	y.right.right = new Node(25);

    console.log(isIdentical(x, y))
}

main()
