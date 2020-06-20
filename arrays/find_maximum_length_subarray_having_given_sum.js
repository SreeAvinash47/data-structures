/*
 * Problem:
    * Given an array of integers, find maximum length sub-arrau having given sum
 * Algorithm:
    * Initialize the max_length and endingIndex to 0
    * create the hashmap to store the sums and its indices
    * Add the initial entry to hashmap[0]=-1, incase it starts with 0
    * Iterate the given array
        * Add the sum everytime
        * If sum-S and length<i-hashmap[sum-S] => modify endingIndex and max_length
 * */
function find_max_subarray(inp, S){
    let max_length=0;
    let endingIndex=-1;
    let sum=0;
    const hashmap = {};
    for(let i in inp){
        sum += inp[i];
        if (!(sum in hashmap)){
            hashmap[sum] = i
        }
        if((sum-S in hashmap)&(max_length<i-hashmap[sum-S])){
            endingIndex = i
            max_length = i - hashmap[sum-S]
        }
    }
    return [max_length, inp.slice(endingIndex-max_length+1,parseInt(endingIndex)+1)]
}
function main(){
    const inp = [5,6,-5,5,3,5,3,-2,0];
    const S = 8;
    const [max_length, subarray] = find_max_subarray(inp, S)
    console.log(`Max sub-array of Sum=${S}: ${subarray} is of length ${max_length}`)
}
main()
