function jumpingOnClouds(c) {
let jump = 0

for(let i=0; i<c.length;)
{
if(c[i+2]==0)
    i=i+2
else i=i+1
if(i!=c.length-1) jump++
}
return jump
}
