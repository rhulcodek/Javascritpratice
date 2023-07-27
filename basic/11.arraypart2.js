  const marvel_hr=["thor","Ironman","spiderman"]
  const dc=["superman","flash","batman"]

 // marvel_hr.push(dc)
//   console.log(marvel_hr);
//   console.log(marvel_hr[2][1]);

const allhero=marvel_hr.concat(dc)
console.log(allhero);

const another_arry=[1,2,3,4,[4,5,6],7,[6,4,[3,5]]]
const real_another_array=another_arry.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Rahul"));
console.log(Array.from("Rahul"));
console.log(Array.from("Rahul"));
console.log(Array.from({name:"Rahul"}))//interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
