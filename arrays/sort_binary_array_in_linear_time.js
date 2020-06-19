// Given a binary array, sort in linear time in constant space. Output should print contain all zeroes followed by all ones

function swap(inp, i, j){
    let temp = inp[i]
    inp[i] = inp[j]
    inp[j] = temp
    return inp
}
function sortArray(inp){
    let j=0;
    for(let i in inp){
        if(inp[i]<1){
            inp = swap(inp, i, j)
            j++
        }
    }
    return inp
}
function main(){
    const inp = [1,0,1,0,1,0,0,1]
    const out = sortArray([...inp]);
    console.log(`Input: ${inp}`)
    console.log(`Output: ${out}`)
}
main()
