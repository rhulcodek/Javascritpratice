const name="Rahul_RC"
const repoCount=50

console.log('hello my name is ${name} and my repo count is ${repoCount}');
const gameName=new String('Rahul');
console.log(gameName[0]);
console.log(gameName._proto_);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));

const newString =gameName.substring(0,3)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStrings="    Rahul    "
console.log(newStrings);
console.log(newStrings.trim());

const url="https://whizsoftwares.in/BGSS/"
console.log(url.replace('.in','_'));

console.log(url.includes('Rahul'));
console.log(url.includes('.in'));

console.log(gameName.split('-'));