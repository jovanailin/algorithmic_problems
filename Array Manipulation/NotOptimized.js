function arrayManipulation(n, queries) {
let array = new Array(n).fill(0)
for(let q=0;q<queries.length;q++){
    let a=queries[q][0]-1
    let b=queries[q][1]-1
    let k=queries[q][2]

    for(let i=a;i<=b;i++){
        array[i]=array[i]+k
    }
}
return Math.max(...array)
}
