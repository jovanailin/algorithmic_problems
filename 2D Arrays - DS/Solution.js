function hourglassSum(arr) {
let sums = []

for(let i=0;i<arr.length-2;i++){

    for(let j=0; j<arr.length-2; j++){
    let sum = 0
    sum = sum + arr[i][j] + arr[i][j+1] + arr[i][j+2]
    sum = sum + arr[i+1][j+1]
    sum = sum + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
    sums.push(sum)

    }
}
return Math.max(...sums)
}
