//control flow

// const temp=40;
// if(temp===40){

//     console.log("less than 50")
// }else{
//     console.log("temp is greater than 50 ")
// }

//<,>,<=,>=,==,!=,==,!==

// const score=200

// if(score>100){
//     const power ="fly"
//     console.log(`user power:${power}`);
// }

//     console.log(`user power:${power}`);error line

// const balence =500
// //if(balence>500) console.log("test");

// if(balence < 500){
//     console.log("less than")
// }else if(balence<750){
//     console.log("less than 750")
// }else if(balence<900){
//     console.log("less than 900")
// }else{
//     console.log("less than 2000")
// }

// const userLoggedIn=true
// const debitcard=true
// const loggedInFromGoogle=false
// const loggedInFromEmail=true
// if(userLoggedIn && debitcard && 2==2 ){
//     console.log("Allow to buy course");

// }

// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("user logged in");
// }

// const month = 3
// switch(month){
//     case 1:
//          console.log("Jan");
//          break;        

//     case 2:
//          console.log("Feb");
//          break;        

//     case 3:
//          console.log("March");
//          break;        
//     case 4:
//          console.log("April");
//          break;        
//     default:
//          console.log("Default case match");
//          break;        

// }

//truely 


const userEmail=""

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

//falsy values

//false ,0,-0,BigInt, 0n,"",null,undefined,NaN

//truely value
//"0",'false'," ",[],{},function(){}

// if(userEmail.length===0){
//     console.log("Array is empty");

// }

// const emptyobj={}

// if(Object.keys(emptyobj).length===0){
// console.log("Object is empty");
// }


//false==0
//o/p-true
//false ==""
//o/p- true
//0==""
//o/p-true



//Nulish  coalescing operator (??): null undefine

// let val1;
// //val1=5 ?? 10
// //val1=null ?? 10
// //val1=undefined ?? 15
// val1=null ?? 10 ?? 20


// console.log(val1)

//Terniary Operators

//condition ? true : false


 const iceteaprice=200

 iceteaprice >=80 ? console.log("less than 80") :console.log("more than 80");

