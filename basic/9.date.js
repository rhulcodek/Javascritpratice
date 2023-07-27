let mydate=new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

console.log(typeof mydate);



let mycretedate=new Date("01-23-2023")
console.log(mycretedate.toLocaleString());


let myTimeStamp=Date.now()

console.log(myTimeStamp);
console.log(mycretedate.getTime());
console.log(Math.floor(Date.now()/1000));

console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})