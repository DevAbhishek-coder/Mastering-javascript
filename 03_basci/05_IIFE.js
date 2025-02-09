// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined. It is useful for creating a private scope and avoiding global variable pollution.



(function() {
    console.log("This is an IIFE");
})();


// or using arrow function

(() => {
    console.log("IIFE with arrow function");
})();


// Key Features:
// Self-executing: Runs immediately after being defined.
// Encapsulation: Creates a local scope, preventing variables inside from interfering with the global scope.
// Avoids global scope pollution: Useful for preventing conflicts in larger applications.
// // Can be used with parameters: