let a=200
if(true){
    let a=10
    const b=20
    //console.log("Inner:",a)


}


//console.log(a);
//console.log(b);
//console.log(c);


//scope level mini hoisting  in js

function one(){
    const username="Rahul"

    function two(){
        const website="Youtube"
        console.log(username)
    }
   // console.log(website);
    two()
}

//one()

if(true){
    const username="Rahul"
    if(username ==="Rahul"){
        const website="youtube"
        //console.log(username + website);

    }
    //console.log(website);
}
//console.log(username);

//*******************Interesting********************//
console.log(addone(5))
function addone(num){
    return num+1
}


const addTwo=function(num){
    return num +2

}
addTwo(5)




