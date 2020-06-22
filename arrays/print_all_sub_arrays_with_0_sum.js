// Print all the sub arrays with sum = 0
function get_all_subarrays(inp, Sum=0){
    const hash = {}; // {'0':[[0,4], [4,7]]}
    const all_subarrays=[]
    let sum=0
    let index=-1
    hash[0]=[-1]
    inp.forEach((ele, ind)=>{
        sum += ele
        if(Object.keys(hash).find(item=>item==sum)){
            content = hash[sum]
            for(let cid in content){
                all_subarrays.push(inp.slice(content[cid]+1, ind+1))
            }
            hash[sum].push(ind)
        }else hash[sum]=[ind]
    })
    return all_subarrays
}
function main(){
    const inp = [3,4,-7,3,1,3,1,-4,-2,-2];
    const sum=0;
    const out = get_all_subarrays(inp, sum)
    console.log(`All subarrays with sum=0 is `, out)
}
main()
