// Given an array of integers. rearrange the array such that every second element id greater than its left and right elements. Assume no duplicates in the array

/*
 * Algorithm:
    * Iterate every alternate element
    * Compare with left, if less => swap
    * Compare with right, if less => swap
    * Time complexity: O(n)
    * Space complexity: O(1)
 * */
function swap(inp, i, j){
    let temp = inp[i]
    inp[i]=inp[j]
    inp[j]=temp
}
function get_alternate_hl(inp){
    for(let i=1;i<inp.length;i=i+2){
        if(inp[i]<inp[i-1]) swap(inp, i-1, i)
        if(inp[i]<inp[i+1]) swap(inp, i, i+1)
    }
    return inp
}
function main(){
    const inp = [9,6,8,3,7]
    const out = get_alternate_hl([...inp])
    console.log(`Input: ${inp}`)
    console.log(`Output: ${out}`)
}
main()
