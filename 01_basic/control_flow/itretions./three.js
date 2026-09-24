// for of 

// ["apple", "banana", "cherry"].forEach(fruit => {
//     cponsole.log(fruit);
// });

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let value of myArray) {
//     console.log(`value of myArr is ${value}`);
// }           



// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const num of arr){
//     console.log(num);
// }
// const grretings = ["Hello", "Hi", "Hey"];
// for (const greet of greetings){
//     console.log(greet);
// }   

// maps

const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
    
}
