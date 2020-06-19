//Given two arrays by satisfying given constraints
//Given two sorted arrays x[] and y[] of size m and n each m>=n and x[] has exactly n vacant cells, merge elements of y[] in therir correct position in array x[]. i.e  merge x,y by keeping th sorted order

/*
 * First sort the array x
 * Iterate in reverse peculiar order - Hard to explain in writing
 * */
function merge(x, y){
    let i=0;
    for(let j in x){
        if(x[j]) {
            x[i]=x[j]
            i++
        }
    }
    i = i-1
    let m = x.length - 1
    let n = y.length - 1
    console.log(x, i, m, n)
    while((i>=0) & (n>=0)){
        if(x[i]<y[n]){
            x[m] =  y[n]
            n--
        }else{
            x[m] = x[i]
            i--
        }
        m--
    }
    while(n>=0){
        x[m] = y[n]
        n--;m--;
    }
}
function main(){
    const x = [0,2,0,3,0,5,6,0,0];
    const y = [1,8,9,10,15];
    merge(x,y)
    console.log(x)
}

main()
