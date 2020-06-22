/*
 * Problem:
 * Given an array of intergers, move all zeors present in the array to the end.THe solutions should maintain relative order of items in the array
 * */

function move_zeros(inp){
    let i=0
    inp.forEach((ele, ind)=>{
        if(ele){
            inp[i]=ele
            i++
        }
    })
    while(i<inp.length){
        inp[i]=0
        i++
    }
}
function main(){
    const inp = [6,0,8,2,3,0,4,0,1]
    move_zeros(inp)
    console.log(inp)
}
main()
