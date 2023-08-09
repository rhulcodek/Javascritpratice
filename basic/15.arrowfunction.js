const user={

    username:"Rahul",
    price:1999,

    welcomemsg:function(){
        console.log(` ${this.username},welcome to website`);
        console.log(this)
    }
}
user.welcomemsg()

user.username="Ram"
user.welcomemsg()
//console.log(this)


// function chai(){
//     let username ="Rahul"
//     console.log(this.username);
// }

// chai()


const chai=() =>{
    let username="Rahul"
    console.log(this);
}

//chai()

//  const addTwo=(num1, num2) =>{

//     return num1 + num2
//  }


//const addTwo=(num1, num2) => num1 + num2

// const addTwo=(num1, num2) => (num1 + num2)
 
const addTwo=(num1, num2) => ({username :"Rahul"})
 console.log(addTwo(4,5))

//  const myArray=[1,2,3,4,5,5]

//  myArray.forEach()

