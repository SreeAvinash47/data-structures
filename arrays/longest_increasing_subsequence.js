/*
 * The longest increasing subsequence is to find a subsequence of a gicen sequence in which the subsequence's elements are in sorted order, lowest to highest, and in which the subsequence is as long as possible. THis subsequence is not necessarily contiguos or unique
 * */
function LIS(inp){
    const res = Array.from({length: inp.length}, (ele, ind)=>1)
    for(let i=1;i<inp.length;i++){
        for(let j=0;j<i;j++){
            if(inp[i]>inp[j]){
                res[i] = Math.max(res[j]+1, res[i])
            }
        }
        console.log(res)
    }
    return Math.max(...res)
}
function main(){
    const inp = [0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]
    //const inp = [2,6,3,4,1,2,9,5,8];
    const out = LIS(inp)
    console.log(`LIS of inp: ${inp} is ${out}`)
}
main()
