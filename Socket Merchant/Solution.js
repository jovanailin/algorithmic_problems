function sockMerchant(n, ar) {
    let num = 0
    let result = { };
    for(let i = 0; i < ar.length; ++i) {
    if(!result[ar[i]])
        result[ar[i]] = 0;
    ++result[ar[i]];
}

for(let property in result) {
    num = num + Math.floor(result[property]/2)
}

return num

}
