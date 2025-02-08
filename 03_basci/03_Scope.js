// <!-- ///Scopes/// -->

// <!-- Scope in JavaScript defines the accessibility (visibility) of variables, functions, and objects in different parts of the code. It determines where a variable can be accessed and modified.

// Why is Scope Used?
// -Avoids Variable Conflicts: Prevents unintended overwriting of variables.
// -Encapsulation: Keeps certain data hidden from other parts of the code.
// -Memory Management: Frees up memory when variables are no longer needed.
// -Code Organization: Helps structure code logically and efficiently. -->

// <!-- Global Scooe--Accessible anywhere in the program -->

var globalscope = "I'm global"
function test(){
    console.log(globalscope)
}
test()
console.log(globalscope)

///Nested Scope

function one(){
    const username = "Abhishek"

    function two(){
        const website = "Youtube"
        console.log(username)
    }

    //console.log(website)
    two()
}

one()

// In nested scope. child function can access parent function

if (true){
    const username = "monue"
    if(username === "monue"){
        const website = "Insta"
        console.log(username + website)
    }
    // console.log(website);
}

// console.log(username)

////+++++++++Intresting ++++++++++


function addon(num){
    return num +1
}

console.log(addon(10))

