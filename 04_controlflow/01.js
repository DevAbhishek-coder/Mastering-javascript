////

// In this code "===" operator compare value as well as data Type


// if(2==="2"){
//     console.log("yes")
// }
// else{
//     console.log("No")
// }

// const score = 200

// if (score>100){
//     let power = "fly"
//     console.log(`User Power: ${power}`)
// }
// else{
//     console.log(`User Power:Not fly`)
// }

// console.log(`User Power: ${power}`)


// Var is global scope. it will accessible from everywhere
// Error should be come


// Nesting

// const balance = 1000

// if(balance < 500){
//     console.log("less than 500");
// }else if (balance < 700) {
//     console.log("less than 1500");

// }else if(balance < 900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }


// Real Life usage.

const userloggedin = false
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userloggedin && debitcard){
    console.log("Allow to buy courses")
}

if(userloggedin || loggedInFromEmail){
    console.log("User loggedin")
}

// "||" this sign is use to compare both CSSConditionRule. If one condition is true it will return true

// "&&" this is sign which is use to compare conditon if one condition is false it will return false