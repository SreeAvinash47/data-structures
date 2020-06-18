// Given an unsorted array of integers, find a pair with given sum in it
// Input: [8, 7, 2, 5, 3, 1]
// Sum = 10
// Output: [0, 2]

function getPair(inp, sum){
    let sorted = [...inp]
    sorted.sort((a,b)=>a-b)
    let i=0;j=sorted.length-1;
    while(i<j){
        if((sorted[i]+sorted[j])<sum){
            i++
        }else if((sorted[i]+sorted[j])>sum){
            j--
        }else{
            return [inp.findIndex(item=>item===sorted[i]),
                    inp.findIndex(item=>item===sorted[j])]
        }
    }
}
function main(){
    const inp = [8,7,2,5,3,1];
    const sum = 10
    const out = getPair(inp, sum)
    console.log(`The pair with the sum=${sum} is ${out[0]} ${out[1]}`)
}
module.exports = main
