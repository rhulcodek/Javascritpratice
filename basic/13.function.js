

function Hello() {
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
    console.log("C");
}


//Hello();
// function addTwo(num1,num2){
//     console.log(num1,num2);
// }

function addTwo(num1, num2) {
    //   let result=num1+num2

    // return result
    return num1 + num2
}
const result = addTwo(3, 5)
// console.log("Result :" ,result);
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
 console.log(loginUserMessage("Rahul"))


 function CalculateCarPrice(val1, val2,...num1){
    return num1
 }

 console.log(CalculateCarPrice(200,400,500,2000))

 const user={
    username :"Rahul",
    price:199
 }

 function handleobj(anyObject){
    console.log(`user is ${anyObject.username} and price is ${anyObject.price}`)
 }


 handleobj(user);
 
 handleobj({

    username:"Vihu",
    price:199
 });
const myNewArray=[200,300,400,500]

function returnsecondvalue(getArray){

    return getArray[3]
}

console.log(returnsecondvalue(myNewArray))
console.log(returnsecondvalue([200,400,500,600]))