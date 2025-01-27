// Strings can be written in both single and double backticks

const name = "abhishek"
const repocount = 50

// console.log(name + repocount + "value")- This is a old way to write which is not good sometime so there is a another way to write it

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repocount}`);

// We can also check lenght of the string

console.log(name.length)
console.log(name[0])

// Try to go through strigs method
//  some more strings method

let gameName = ("GTAV")

console.log(gameName.toLowerCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('V'))

// Substring and Slice

const newString = gameName.substring(0,3)
console.log(newString)

const anotherstring = gameName.toString(0,3)
console.log(anotherstring)

// We can also put -ve values in the string and substring

// trim and replace method

const newstringnone = "     abhishek    "
console.log(newstringnone)
console.log(newstringnone.trim())
//  it will trim space between the string

const url = "https://abhisheksingh.com/abhishek%20singh"
console.log(url.replace('%20','-'))

// It will remove %20 to -