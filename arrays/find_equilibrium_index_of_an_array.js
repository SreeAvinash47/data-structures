//Find Equilibrium index of an array
//Fiven an array of integers, find a equilibrium index in it
// An index i is said to be equilibrium if a[.. i-1]==a[i+1:..]
// Time complexity: O(n)
// Space complexity: O(1)

function find_equilibrium_indices(inp){
    // Initially find the total sum of the array
    let totalSum = inp.reduce((acc, curr)=>(acc+curr), 0)
    let leftSum = 0
    let newSum;
    const indices=[];
    // Iterate the array
    for(let i in inp){
    // At every index
    // Sutract leftSum and index element from total sum
        newSum = totalSum - leftSum - inp[i]
    // Compare the newSum and the leftSum
    // if equal, save it as equilibrim index
        if(newSum===leftSum){
            indices.push(i)
        }
        // calculate the leftSum
        leftSum = leftSum+inp[i];
    }
    return indices
}

function main(){
    const inp = [0, -3, 5, -4, -2, 3, 1, 0]
    const out= find_equilibrium_indices([...inp])
    console.log(`Equillibrium indeices found at ${out}`)
}

main()
