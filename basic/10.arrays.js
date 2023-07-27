const myArr = [0,1,2,3,4,5,6]
console.log(myArr);

const myArr2=new Array(1,2,3,4,5)
console.log(myArr2[1]);

myArr2.push(6)
myArr2.push(8)
myArr2.pop()
myArr2.unshift(9)
myArr2.shift()

console.log(myArr2.includes(9));
console.log(myArr2.indexOf(4));
const newarr=myArr2.join()

console.log(myArr2);
console.log(newarr);

///slice,splice

console.log("A",myArr2);

const myarr=myArr2.slice(1,3)
console.log(myarr);
console.log("B",myArr);

const myn2=myArr2.splice(1,3)
console.log("c",myn2);
console.log(myn2);