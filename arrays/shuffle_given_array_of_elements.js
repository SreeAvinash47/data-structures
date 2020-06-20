/*
 * Problem:
 * Given an array of integers, inplace shuffle it. The algorithm should produce an unbiased permutation. i.e every permutation is equally likely
 * Algorithm:
 * Iterate the elements from 0 to n-2
        For every iteration swap element of that index and randomindex between i and n
 *
 * */
function random(i, j){
    let rand = Math.floor(Math.random()*(j-i+1))+i
    console.log(i,j,rand)
    return rand
}
function swap(inp, i, j){
    let temp = inp[i]
    inp[i] = inp[j]
    inp[j] = temp
}
function shuffle(inp){
    for (let i=0;i<=inp.length-2;i++){
        swap(inp, i, random(i, inp.length))
    }
}
function main(){
    const inp = [1,2,3,4,5,6,7,8]
    shuffle(inp)
    console.log(inp)
}
main()
