////****Functions**/////

// Functions means- a set of statements that performs a task or calculates a value. We can copy the functions.
 

function sayMyname(){
    console.log("Hello my name is Abhishek")
}

// sayMyname().
// It's a basic way. We have create a function by the name of sayMyname and call it.

// Let add two number by using function

// Here we have created a function called "addNumbers" and pass a parameters number1+ number2 and call the function.

function addNumbers(number1,number2){
        // console.log(number1 + number2)
        return  number1 + number2
}

const result = addNumbers(3,4)
console.log("Result:",result)

// If we run this we can see the result is coming byt there is undefined value. We can write let return number1 + number2



// More way to pass value in function

function loginUser(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`

}

// console.log(loginUser("Abhishek"))

// If someone not the pass value.Let see what Happen.It will return undefined. In  this case we can use if condition. 

console.log(loginUser())


// if(username === undefined) in this one we can also write (!username). This is a another way to write.Both meanings are same.

