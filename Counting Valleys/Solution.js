function countingValleys(steps, path) {
   let arr = path.split("")
   let level = 0
   let num = 0
   for(let i in arr) {
       if(arr[i]=="U") ++level
       if(arr[i]=="D") --level

        if(level==0 && arr[i]=="U")
        ++num
   }
    return num
}
