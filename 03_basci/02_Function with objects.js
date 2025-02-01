// Function with objects

// During making a shopping cart we will use function when user add many items.
// function calculateCartPrice(...num1){
//    return num1
// }

// console.log(calculateCartPrice(200,200,5000,6000))

// "..." this is also a rest operator and spread operator. It work depends on the work case

// This function will calculate all the araay
function calculateCartPrice(...num1) {
    return num1.reduce((total, current) => total + current, 0);
}

// console.log(calculateCartPrice(200, 200, 5000, 6000)); // Output: 11400


// Passing object by using function
const user = {
    username: "Abhishek",
    price: "199"
}

function handleObject(anyobject){
    console.log(` Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)


// Calling array by using function

const myNewArray = [200,300,500,600]

function retrun2value(getarray){
    return getarray[2]
}
console.log(retrun2value(myNewArray))