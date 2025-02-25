// Global Scope

// A variables which declared outside the function or block are known a global scope. It can accessible anywhere from the Scrip. Burt it can cause conflicts if multuple scripts use the same variables name.

var globalscope =  "I am global"

function examplefunction(){
    console.log(globalscope); //Accessible here
}

// console.log(globalscope) ///Accessible here too


// Private Scope

// Variables are declared inside a function or block(let,const)are scoped to that function/Block.

// cannot accessed from outside

function exampleFunction() {
    let privateVar = "I am private";
    console.log(privateVar); // Accessible here
}

// console.log(privateVar); // ❌ Error: privateVar is not defined


// How global cause conflict but private not

// Global Scope

var username = "Abhishek"; // Global variable

function changeUsername() {
    username = "Rohan"; // Overwrites the global variable
}

console.log(username); // "Abhishek"
changeUsername();
console.log(username); // "Rohan" (Oops! It changed globally)



// Private Scope

function changeUsername() {
    let username2 = "Rohan"; // Local variable
    console.log(username2); // "Rohan"
}

let username2 = "Abhishek"; // Global variable
console.log(username2); // "Abhishek"
changeUsername();
console.log(username2); // Still "Abhishek" (No conflict!)
