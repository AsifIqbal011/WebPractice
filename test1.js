 
var name = "Asif";    // older way
let age = 25;         // modern
const country = "BD"; // cannot be reassigned

console.log(name);
console.log(age);
console.log(country);
console.log(`Hello ${name}, How are you?`)

for (let i = 0; i < 5; i++) {
  console.log(i);
} 


function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Asif"))

//arrow function
let greet1 = (name) => {console.log("hello", name)}
greet1("samad")

//destruction
const numbers = [1, 2, 3];
const [a, b] = numbers;     //a=1, b=2
console.log(b)

const person = { name1: "Asif", age1: 25 };
const { name1, age1 } = person;
console.log(age1);

//spread operator
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; 
console.log(arr2);


//json
const user = { name: "Asif", age: 25 };
const jsonStr = JSON.stringify(user); // convert to JSON string
const parsed = JSON.parse(jsonStr);   // back to object

console.log(jsonStr);
console.log(parsed);

//async await
async function fetchUser() {
    try {
        const res= await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}
fetchUser();
console.log("I am last line");

