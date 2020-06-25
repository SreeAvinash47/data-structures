// Problem:
// Given an circular array of integers, find subarray in it which has the largest sum
function kadane(inp){
    let sum=0
    let max_start
    let max_end
    let max_sum=0
    inp.forEach((ele, ind) => {
        sum += ele 
        if(sum<=0){
            max_start = ind+1
            sum=0
        }
        if(max_sum<sum){
            max_sum = sum
            max_end = ind
        }
    });
    return [max_start, max_end]
}
function max_circular_subarray(inp){
    const neg_inp = inp.map((ele, ind)=>-ele)
    const [start, end] = kadane(neg_inp)
    return inp.slice(end+1).concat(inp.slice(0,start))
}
function main(){
    const inp = [2,1,-5,4,-3,1,-3,4,-1]
    const out = max_circular_subarray(inp)
    console.log(out)
}
main()