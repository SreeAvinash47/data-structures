//Given a limited range array of size n where array contains elements between 1 to n-1 with one eleemtn repeating, find teh duplicate number in it

function find_duplicate(inp){
    let ele;
    for (let i in inp){
        ele = inp[i];
        ele = ele>0?ele:-ele;
        if(inp[ele-1] <0){
            return ele
        }
        inp[ele-1] = -inp[ele-1]
    }
}
function main(){
    const inp = [1,2,3,4,2]
    const out = find_duplicate([...inp])
    console.log(`Input: ${inp}`)
    console.log(`Ouput: ${out}`)
}
main()
