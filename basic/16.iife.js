//Immediately Invoked function Expressions (IIFE)


(function chai(){
    console.log('DB Connectd');
})();
((name) =>{
    console.log(`DB Connectd Two ${name}`);
})('Rahul')