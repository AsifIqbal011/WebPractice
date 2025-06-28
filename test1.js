/* 
var name = "Asif";    // older way
let age = 25;         // modern
const country = "BD"; // cannot be reassigned

console.log(name);
console.log(age);
console.log(country);

for (let i = 0; i < 5; i++) {
  console.log(i);
} 


function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Asif"))

let greet1 = (name) => {console.log("hello", name)}
greet1("samad")
*/

const numbers = [1, 2, 3];
const [a, b] = numbers;     //a=1, b=2
console.log(b)

const person = { name1: "Asif", age1: 25 };
const { name1, age1 } = person;

console.log(age1);

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; 
console.log(arr2);