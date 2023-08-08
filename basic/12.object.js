//singleton
// const mysym = Symbol("key1")

// //object literals

// const Jsuser = {
//     name: "Rahul",
//     "full name": "Rahul Choudhari",
//     [mysym]: "mykey1",
//     age: 16,
//     location: 'kajali',
//     email: 'rahul@gmail.com',
//     isLogged: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(typeof Jsuser[mysym]);

// Jsuser.email = "rahul@gmail.com"
// // Object.freeze(Jsuser)
// Jsuser.email = "rahul@gmail.com"

// console.log(Jsuser);


// Jsuser.greeting = function () {
//     console.log("hello js user");
// }

// Jsuser.greeting2 = function () {
//     console.log('hello js user 22, ${ this.name }');
// }
// console.log(Jsuser.greeting());
// console.log(Jsuser.greeting2());
//object part 2

//const tinderuser=new Object()
const tinderuser={}

tinderuser.id=123
tinderuser.name="Rahul"
tinderuser.isLogged=false
//console.log(tinderuser);    

const regularUser={
    email:"rahul@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Rahul",
            lastname:"Choudhari"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
//const obj3={obj1,obj2}

//const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj4}
//console.log(obj3);


const users=[
    {
    id:1,
    email:"rahul@gmail.com"
},  {
    id:2,
    email:"rahul@gmail.com"
},  {
    id:3,
    email:"rahul@gmail.com"
}
]

users[1].email

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLogged'));
