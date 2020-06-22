/*
 * Problem:
 * Given an array of integers, find contiguous subarray within it which has the largest sum(kadane's Algorithm)
 * */

function find_max(inp){
    let sum=0;
    let max_sum_sofar = 0;
    let max_endingIndex=0;
    let max_startingIndex=0;
    inp.forEach((item, ind)=>{
        sum += item
        if(sum<0){
            sum = 0;
            max_startingIndex=ind+1;
        }
        if (sum>max_sum_sofar){
            max_sum_sofar = sum
            max_endingIndex = ind
        }
    })
    //let startingIndex=max_endingIndex;
    //let sum_for_index=0
    //while(sum_for_index!=max_sum_sofar){
    //    sum_for_index += inp[startingIndex]
     //   startingIndex --
    //}
    return [inp.slice(max_startingIndex, max_endingIndex+1), max_sum_sofar]
}

function main(){
    //const inp = [-2,1,-3,4,-1,2,1,-5,4]
    const inp = [8,-7,-3,5,6,-2,3,-4,2]
    const [subarray, max_sum] = find_max(inp)
    console.log(subarray, max_sum)
}
main()
