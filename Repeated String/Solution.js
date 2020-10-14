function repeatedString(s, n) {
let arr = s.split("")
let count1 = (s.match(new RegExp("a","g")) || []).length
let remainder = n % s.length
let ss = arr.slice(0,remainder).join("")
let count2 = (ss.match(new RegExp("a","g")) || []).length
return count1 * Math.floor((n/s.length)) + count2

}
