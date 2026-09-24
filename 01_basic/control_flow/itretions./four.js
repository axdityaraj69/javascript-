// const myObject = {
//     js: 'javascript',
//     cpp : 'c++',
//     java: 'java',
//     swwift: 'swift'
// }

// for (const [key,value] of Object.entries(myObject)) {
//     // console.log(`${key}: ${value}`);
// }


const programmingLanguages = ["javascript", "c++", "java", "swift"];
for (const key in programmingLanguages)
{
    console.log(programmingLanguages[key]);
}
