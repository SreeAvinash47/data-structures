//Given an array of integers,check if array containers a sun-array having 0 sum

function subarray_exists(inp){
    let sum=0;
    let sumList=[0]
    let i=0;
    for(let item of inp){
        sum += item
        if(sum in sumList){
            return true
        }
        sumList.push(sum)
    }
}

function main(){
    const inp = [3,4,-7,3,1,3,1,-4,-2,-2]
    const out = subarray_exists(inp)
    console.log(`Subarray with 0 sum: ${out}`)
}
main()
