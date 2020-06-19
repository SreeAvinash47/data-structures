// Print all the sub arrays with sum = 0
function get_all_subarrays(inp, Sum=0){
    const hash = {}; // {'0':[[0,4], [4,7]]}
    const sum=0
    let index=-1
    for (let ele of inp){
        sum += ele
        if(sum in Object.keys(hash).map(item=>String(item)){
        }
    }

}
function main(){
    const inp = [3,4,-7,3,1,3,1,-4,-2,-2];
    const sum=0;
    const out = get_all_subarrays(inp, sum)
    console.log(`All subarrays with sum=0 is ${out}`)
}
main()
