/*
 * Problem:
    * Given a binary array containing 0's and 1's, find maximum length subarray having equal number of 0's and 1's
 * Algorithm:
    * Remember here S is always 0
    * Initialize the max_length and endingIndex to 0
    * create the hashmap to store the sums and its indices
    * Add the initial entry to hashmap[0]=-1, incase it starts with 0
    * Iterate the given array
        * Treat element as -1 if 0, 1 if 0 while summing
        * Add the sum everytime
        * If sum-S and length<i-hashmap[sum-S] => modify endingIndex and max_length
 * */
function find_max_subarray(inp, S=0){
    let max_length=0;
    let endingIndex=-1;
    let sum=0;
    const hashmap = {};
    for(let i in inp){
        sum += inp[i]?1:-1;
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
    const inp = [0,0,1,0,1,0,0];
    const [max_length, subarray] = find_max_subarray(inp)
    console.log(`Max sub-array of equal 0's and 1's: ${subarray} is of length ${max_length}`)
}
main()
