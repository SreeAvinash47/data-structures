/*
 * Problem:
 * Given an array containing only 0s, 1s and 2s, sort the array in linear time and using constant space(Dutch national flag problem)
 * Algorithm:
    * Decalare 3 variables
        * i => for iteration of elements in array
        * j => To where we can have 0s
        * k => To where we can have 2s
    * Iterate the elements
        * if element = 1 just iterate
        * if element = 0 just swap(i,j) increment i and j
        * if element = 2 just swap(i,k) decrement k
 * */
function swap(inp, i, j){
    let temp = inp[i]
    inp[i]=inp[j]
    inp[j]=temp
}
function sort_dutch_national_flag(inp){
    let i=j=0;
    let k=inp.length-1;
    while(i<=k){
        if(inp[i]===0){
            swap(inp, i, j)
            i++;
            j++;
        }else if(inp[i]===2){
            swap(inp, i, k)
            k--
        }else{
            i++
        }
    }
}
function main(){
    const inp = [0,1,2,2,1,0,0,2,0,1,1,0]
    sort_dutch_national_flag(inp)
    console.log(inp)
}
main()
