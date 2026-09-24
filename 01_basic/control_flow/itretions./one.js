// // for 
// for ( let index = 0; index <=  10; index++) {
//     const element = index;
// console.log(element);
// if (element == 5) {
//     console.log("Element is 5");     
//      for (let j = 0; j <= 5; j++) {
//          console.log(`  Inner loop value: ${j}`);
//     console.log(i + '*' + j + '=' + (i * j));   
// }
// console.log(element); // This will log the current value of 'element' in each iteration of the loop.    
// }
//  console.log(element); // This will throw an error because 'element' is not defined outside the for loop's block scope.



// for (let index = 0; index <= 10; index++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 5; j++) {
//         console.log(`  Inner loop value: ${j}`);
//         console.log(i + '*' + j + '=' + (i * j));
//     }
// }   

let userEmail = "axdityaaraj@gmail.com"; // This is a string, which is truthy
if (userEmail) {
    console.log("User email is present");
} else {
    console.log("User email is not present");
}               

for (let index = 0; index <= 10; index++) { 
    console.log(`Loop value: ${index}`);
}   