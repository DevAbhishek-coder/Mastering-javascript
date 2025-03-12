///For Loop-The for loop is used when you need to repeat a block of code a specific number of times.//

// for (let i = 0; i < 10.; i++) {
//     const element = i;

//     console.log(element)
    
// }

// With a conditional rul`e

// for (let i = 0;  i<= 50; i++) {
//     const element = i;
//     if (element == 8) {
//         console.log("8 is found")
//     }
//     console.log(element)
    
// }


// // Loop inside Loop//

for (let i = 1; i <=10 ; i++) {
    // console.log(`Outer Loop value: ${i}`)

    for (let j = 1; j <= 10; j++) {
    //     console.log(`Inner Value ${j} and inner loop ${i}`)
    console.log(`${i} X ${j} = ${i * j}`) ;
        
    };
    
}

// for (let i = 1; i <= 10; i++) {
//     console.log(`2 x ${i} = ${2 * i}`);
// }




// for (let i = 1; i <= 10; i++) {
//     console.log(`2 * ${i}= ${2*i}`)
// }

// Some Keyword

// break and continue

// for (let index = 0; index <=20; index++) {

//     if (index == 5) {
//         console.log("Detected 5");
//         break}

//     console.log(`Value of index is ${index}`)
// }

//Continue//


// for (let index = 0; index <=20; index++) {

//     if (index == 5) {
//         console.log("Detected 5");
//         continue}

//     console.log(`Value of index is ${index}`)
// }


// break will stop the loop when condition match.
// Continue will skip the condition and will continue loop