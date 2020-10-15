#using the prefix sum

function arrayManipulation(n, queries) {
let array = new Array(n).fill(0)
let sum = 0
let max = 0
for(let q=0;q<queries.length;q++){
    let a=queries[q][0]-1
    let b=queries[q][1]-1
    let k=queries[q][2]
    array[a]+=k
    if(b+1<n){
    array[b+1]-=k
    }

}
 for(let i=0;i<n;i++){
        sum = sum + array[i]
        max = Math.max(max,sum)

    }
    return max
}
