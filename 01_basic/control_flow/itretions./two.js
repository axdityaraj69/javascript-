// while ( 2 == 2 ) {
//     console.log("Hello World");
// }

let index = 0;
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myArr = 0
while (myArr < myArray.length) {
    console.log(`value of myArr is ${myArray[myArr]}`);
    myArr++;
}   

let  score = 11

do {
    console.log(`score is ${score}`);
    score++;
} while (score <= 10);   
