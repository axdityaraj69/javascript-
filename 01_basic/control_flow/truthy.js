const userEmail =  "user@example.com"; // This is a string, which is truthy
if (userEmail) {
    console.log("Dont have user email");}
    else {
        console.log("User email is not present");
    }
    

    // falsy values in JavaScript include: false, 0, "", null, undefined, and NaN. All other values are considered truthy.  

    // false, 0  -0, "", null, undefined, NaN, Bigint, 0n, "".
    // truthy values include: true, any non-zero number, any non-empty string, any object, and any array.   
     
    // "0" is a truthy value because it is a non-empty string, even though it represents the number zero.


//  "0" is a truthy value because it is a non-empty string, even though it represents the number zero.
// [] is also a truthy value because it is an object, even though it is an empty array.

// if(useremail.lenth === 0) {
//     console.log("Array   is empty");
// }


if (object.keys(userEmail.at(0)).length === 0) {        
}
