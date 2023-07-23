//primitive 
//7 types : string, number,boolean,null,undefined,symbol,bigint

const score= 100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id =Symbol('123')
const anotherId =Symbol('123');
console.log(id==anotherId);
const bigNumber=3636982658642n





//Reference (Non primitive )
//Array,Objects,Functions

const heros=["shaktiman","Naagraj","doga"];
let myobj={
    name:"Rahul",
    age : 22,
}
const myFunction =function(){
console.log("Hello Rahul");
}
console.log(typeof bigNumber);



///****************************////
///stack (primitive) Heap(Non Primitive)

let myYoutube = "rahul"
let anothername=myYoutube
anothername="Vihan"
console.log(myYoutube);
console.log(anothername);


let userone={
    email:"user@google.com",
    upi:"yyfgug"
}

let userTwo=userone

userTwo.email="rahul@gmail.com"

console.log(userone.email);
console.log(userTwo.email);

