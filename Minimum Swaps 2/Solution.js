function minimumSwaps(arr) {
    let swap = 0
    let original = [...arr]

    for (let i=0; i<arr.length; i++){
        let realInd = original[i]-1
        let currInd = arr.indexOf(original[i])
        if(realInd != currInd) {
            let temp = arr[currInd]
            arr[currInd] = arr[realInd]
            arr[realInd] = temp
            swap++
        }
    }
    return swap
}
