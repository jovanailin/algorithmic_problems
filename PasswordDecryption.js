function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

function swapChars(arr,ind1,ind2) {
  let temp = arr[ind2]
  arr[ind2] = arr[ind1]
  arr[ind1] = temp
  return arr.join("")
}

function decryptPassword(s) {
    let num = s.replace(/\D/g,"").replace(/[0]/g,"")

    let stars = []
    let zeros = []
    for(let i=0; i<s.length;i++) {
    if(s[i] === "*") stars.push(i)
    if(s[i] === "0") zeros.push(i)
}

    s = s.replace(num,"")

    for(let i=0; i<num.length; i++) {
      let index = zeros[i]-num.length
      let number = num[i]
      s = setCharAt(s,index,number)
    }

    let arr = s.split("")
    let res = ""
    for(let i=0; i<stars.length; i++) {
      res = swapChars(arr,stars[i]-1-num.length,stars[i]-2-num.length)
    }

res = res.replace(/\*/g, "")
return res
}

decryptPassword("51Pa*0Lp*0e")
// decryptPassword("43Ah*ck0rr0nk")
