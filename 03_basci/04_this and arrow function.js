////this and arrow function

// ---This is a keyword, which refer current context

const userdetails = {
    username: "Abhishek",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username},welcome to website`);
    }
}

// userdetails.welcomemessage()
// userdetails.username =  "Sam"
// userdetails.welcomemessage()

// console.log(this)


// function one(){
//     console.log(this)
// }

// one()

// When we run 'This' in a function it will give many values. 

// Arrow function is a more concise way to write functions in JavaScript

const addtwo = (num1,num2) =>{
    return num1 + num2
}

// console.log(addtwo(3,4))

// This is a basic way to WritableStream, there is a another way to write which is implict which mean we do not need to write a parenthisis

const add = (num1,num2) => num1 + num2
console.log(add(3,4))


// If we write currly brackets so we have to write return keyword. 