/*
 * Problem:
 * Given an array of integers , replace each element of the array  with th product every othere element in the array without using division operator
 * */
function findProduct(inp, n, left=1, i=0){
    if(i==n) return 1
    let right = findProduct(inp, n, left*inp[i], i+1)
    let ele = inp[i]
    inp[i] = left*right
    return right*ele
}
function main(){
    //const inp = [5,3,4,2,6,8]
    const inp = [1,2,3,4,5]
    findProduct(inp, inp.length)
    console.log(inp)
}
main()
