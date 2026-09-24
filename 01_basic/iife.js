// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`)
} ());

// chai() 
// if we remove semicolon it wont work 

( (name) =>  {
    console.log(`DB CONNECTED TWO ${name}`);
})('raj')