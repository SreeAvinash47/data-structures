// Given an array of integers, find maximum product of two integers in an array
function find_max(inp){
    let max1 = inp[0]
    let max2 = -Infinity;
    let min1 = inp[0]
    let min2 = Infinity;
    for (let ele of inp.slice(1)){
        if(ele>max1){
            max2 = max1
            max1 = ele
        }else if (ele>max2){
            max2 = ele
        }
        if(ele<min1){
            min2 = min1
            min1 = ele
        }else if (ele<min2){
            min2 = ele
        }
    }
    if((max1*max2)>(min1*min2)){
        return [max1*max2, max1, max2]
    }else return [min1*min2, min1, min2]
}
const main = () => {
    const inp = [-10,-3,5,6,-2]
    const [max, ele1, ele2] = find_max([...inp])
    console.log(`Input: ${inp}`)
    console.log(`Max product: ${max} ele1: ${ele1} ele2: ${ele2}`)
}
main()
