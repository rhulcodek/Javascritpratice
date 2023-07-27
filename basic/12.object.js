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

tinderuser.id="1234"
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

console.log(regularUser);