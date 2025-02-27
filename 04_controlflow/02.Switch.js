// Switch-The switch statement in JavaScript is used for conditional branching, similar to if...else if...else, but it's often cleaner when checking multiple conditions against a single value.

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3

// switch (month) {
//     case 1:
//         console.log("jan")
        
//         break;
//     case 2:
//         console.log("Feb")
        
//         break;
//     case 3:
//         console.log("Mar")
        
//         break;
//     case 4:
//         console.log("Apr")
        
//         break;


//     default:
//         console.log("Not Match")
//         break;
// }



const month = "March";

switch (month) {
    case "January":
        console.log(1);
        break;
    case "February":
        console.log(2);
        break;
    case "March":
        console.log(3);
        break;
    case "April":
        console.log(4);
        break;
    default:
        console.log("Not Match");
}
