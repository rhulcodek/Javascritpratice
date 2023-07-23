const accountId=123
let accountEmail="rahul@gmail.com"
var accountPassword="123"
accountCity="Nagpur"
let accountState; //not value declare but varibale undefined

//accountId=2//not allowed

accountEmail="vihu@gmail.com"
accountPassword="123"
accountCity="Wardha"

console.log(accountId);
/*prefer not to use var because of issue in block scope and funtion scope*/
console.log([accountId,accountEmail,accountPassword,accountCity,accountState]);