function checkMagazine(magazine, note) {
    let result = {}
for(let i=0; i<magazine.length; i++){
    if(!result[magazine[i]]) result[magazine[i]]=0
    ++result[magazine[i]]
}
for(let i=0; i<note.length; i++){
    if(!result[note[i]]) result[note[i]]=-1
    --result[note[i]]
}
let values = Object.keys(result).map( (key) => {
    return result[key];
})
if(values.every(val=>val>=0)) console.log("Yes")
else console.log("No")
}
