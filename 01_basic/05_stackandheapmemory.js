// Memories are two types
// 1-Stack Type and 2-Heap type

// primitive data types use Stack type
// Non Primitive data types use Heap Type

let youtubename = "hiteshchoudhary"

let anothername = youtubename
anothername = "chaiaurcode"

console.log(youtubename)
console.log(anothername)

// Stack memory give a copy of the changes, it will not change original value.
// Where as in heap memory the we do changes in a original value

let userone = {
    userid: "avi@google.com",
    paymnetid: "avi@ybl"

}

let userTwo = userone

userTwo.email = "monu@yahho.com"

console.log(userone)
console.log(userTwo)

