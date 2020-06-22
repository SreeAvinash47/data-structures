/*
 * Problem:
 *  Given an array of integers containing duplicates, return the majority element in an array if present. A majority element appears more than n/2 times where n is the size of the array
 * */

function find_majority(inp){
    const hash_map = {}
    let k;
    let max_key, max_count=0;
    inp.forEach((ele, ind)=>{
        if(Object.keys(hash_map).find(item=>item==ele)){
            k = hash_map[ele] + 1
            hash_map[ele]=k
            if(k>max_count){
                max_key = ele
                max_count = k
            }
        }else{
            hash_map[ele]=1
            if(1>max_count){
                max_key=ele
                max_count=1
            }
        }
    })
    return max_key
}

function main(){
    const inp = [2,8,7,2,2,5,2,3,1,2,2]
    const out = find_majority(inp)
    console.log(`Majority element is ${out}`)
}
main()
