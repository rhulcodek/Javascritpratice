//for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    //console.log(element)

}

// for(let i=0;i<=10;i++){
//     console.log(`outer looop: ${i}`);
//     for(let j=0; j<=10; j++){
//        // console.log(`Inner loop value: ${j} and inner loop ${i}`);

//        console.log(i+`*`+j+`=`+i*j);
//     }
// }

let myArr = ['Rahul', 'Vihu', 'Roshan', 'pihu', 'Pranvil', 'Harshika']
//console.log(myArr.length);
for (let i = 0; i <= myArr.length; i++) {
    const element = myArr[i];
    //console.log(element);

}

//break and continue
// for(let i=1;i<=20;i++){

//     if(i==5){
//         console.log('detected 5');
//         break
//     }
//     console.log(`value of i is ${i}`);
// }

// for(let i=1;i<=20;i++){

//     if(i==5){
//         console.log('detected 5');
//         continue
//     }
//     console.log(`value of i is ${i}`);
// }

//while and do while loop
// let  index=0
// while (index <=10) {
//    // console.log(`Value of index is ${index}`);
//     index =index+2

// }

// let myArr1=['Rahul','Vihu','Pihu','Roshan']

// let arr=0
// while (arr <myArr1.length) {
//     console.log(`Value is ${myArr1[arr]}`);
//     arr=arr+1

// }
// let score=11
// do{
//     console.log(`scrore is ${score}`);
//     score++
// } while(score <=10)


/////High order Array loops

//for of
//["","",""]
//[{},{},{}]

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    //  console.log(num);

}

const greetings = "Rahul Choudhari"

for (const geet of greetings) {
    //    console.log(`Each char is ${geet}`);

}
//Maps

const map = new Map()
map.set('In', "India")
map.set('USA', "United state america")
map.set('Fr', "Frans")
map.set('In', "India")
//console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-' ,value);
}

const myobj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
// for(const [key,value] of myobj){
//     console.log(key, ':-' ,value);

// }//error object not iterable

const myobject = {
    js: 'java',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myobject) {
    //console.log(`${key} shorcuts is for ${myobject[key]}`);
}

const programing = ["js", "rb", "py", "java", "cpp"]

for (const key in programing) {
    //console.log(programing[key]);
}


// const map1=new Map()
// map1.set('In',"India")
// map1.set('USA',"United state america")
// map1.set('Fr',"Frans")
// map1.set('In',"India")
// //console.log(map);

// for(const key in map1){
//     console.log(key);
// }


//const coding=["js","ruby","java","pytthon"]

// coding.forEach( function (item){
//     console.log(item);
//  })

//arrow function
// coding.forEach( (item)=>{

//     console.log(item);
// })
// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{

//     console.log(item,index,arr);
// })

// const mycoding =[
//     {
//     name:'js',
//     lagName:'js'
// },
// {
//     name:'java',
//     lagName:'java'
// }, {
//     name:'py',
//     lagName:'py'
// }, {
//     name:'css',
//     lagName:'css'
// }
// ]

// mycoding.forEach((item)=>{
//   console.log(item.lagName);
// })


const coding = ["js", "ruby", "java", "pytthon"]

const value = coding.forEach((item) => {
    // console.log(item);
    return item
})

//console.log(value);


const num = [1, 2, 3, 4, 5, 6, 7, 8]

// const newnums=num.filter((num) => {
//     return num>4

// })

const newNums = []
num.forEach((num) => {
    if (num > 4) {

        newNums.push(num)
    }
})
console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBook = books.filter((bk) => bk.genre == 'History')
userBook = books.filter((bk) => { return bk.publish >= 1995 && bk.genre == "History" })
//console.log(userBook);


const mynums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//const newNum = mynums1.map((num)=>{ return num+10})
const newNum = mynums1.map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

//console.log(newNum);

const nums = [1, 2, 3, 4, 5]
// const myTotal=nums.reduce(function(acc,currval){
//   console.log(`acc:${acc} and currval: ${currval}`);
//     return acc+currval
// },0)

// console.log(myTotal);

// const myTotal=nums.reduce((acc,curr)=>acc+curr,0)
// console.log(myTotal);

const ShooppingCart = [ {
    itemName: "mobile dev",
        price: 199
},
{
    itemName: "data science",
        price: 199
}, {
    itemName: "python",
        price: 1400
}, {
    itemName: "c++",
        price: 1200
}, {
    itemName: "java",
        price: 1990
}]

const pricepay=ShooppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(pricepay);