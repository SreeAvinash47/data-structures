//Given two sorted arrays X[] and Y[] of size m and n each, merge elements of X[] with elements of Y[] by maintaining the sorted order. i.e fill X[] with the first m smallest elements and fill Y[] with remaining elements

/*
 * Algorithm:
    * Iterate through one of the array
    * compare teh ele with first smallest of another array
    * if smaller => swap => modify the other array to be sorted
    * else just increment the array
    * Time complexity: O(mn)
    * Space complexity: O(1) not extra space at all
 * */
function swap(x, y, i, j){
    let temp = x[i]
    x[i]=y[j]
    y[j] =temp
}
function inplace_sort(x, y){
    const n = y.length
    let j, temp;
    for (let i in x){
        if(x[i]>y[0]){
            swap(x, y, i, 0)
            j=0
            while(j<n-1){
                if(y[j]>y[j+1]){
                    temp = y[j]
                    y[j]= y[j+1]
                    y[j+1] = temp
                }else{
                    break
                }
                j++
            }
        }
    }
}
function main(){
    const x = [1,4,7,8,10];
    const y = [2, 3, 9];
    console.log(`x: ${x}`)
    console.log(`y: ${y}`)
    inplace_sort(x, y)
    console.log(`x: ${x}`)
    console.log(`y: ${y}`)
}
main()
