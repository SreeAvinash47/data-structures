/*
 * Problem:
 * Given an array of integers, find the maximum differemce between two elements in the array such that smaller element appears beofer the larger element
 */
function find_max(inp){
    let ele;
    let max_so_far = inp[inp.length-1]
    let max_diff = -Infinity
    for(let i=inp.length-1;i>=0;i--){
        ele = inp[i]
        if(ele>max_so_far) max_so_far=ele
        else max_diff = Math.max(max_diff, max_so_far-ele)
    }
    return max_diff
}
function main(){
    const inp = [2,7,9,5,1,3,5]
    const max_diff = find_max(inp)
    console.log(max_diff)
}
main()
