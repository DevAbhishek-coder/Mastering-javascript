// true and flase value

const userEmail = "abhi@gmail.com"

if(userEmail){
    console.log("Got email")
}else{
    console.log("Not get email")
}

// Truthy value are value which assumed. in the example, useremail is a true value. Once we run it will return the console log. In place of value it will not retun the if it will retunr else value


//falsy values

// -false
// -0 and -0 are both falsyvalue
// -empty string are falsyvalue
// -null and undefined are falsyvalue
// -bigint are also falsy value


// Truthy value

// -"0" is a truthy Value. if 0 is in string
// -everything under strin '' are truthy Value
// -function() if declare like this also truthyvalue.Value

// Nullish coalescing Operator(??): null undefined

// // let val1 = 5 ?? 10
// let val1 = 5??null
// let val2 = null??5
// console.log(val1)
// console.log(val2)

//Terniary Operator

// condition ? true:false

const iceteaprice= 100
iceteaprice<=80? console.log("less than 80") 
 :console.log("more than 80")