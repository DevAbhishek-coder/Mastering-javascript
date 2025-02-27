///**** JAVASCRIPT EXECUTION CONTEXT**** */

// Once JS code execute.It FormDataEvent
// -Global Execution context
// -Function Execution Context . 
// // -Eval Execution Context.  

let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}

let return1 = addNum(val1,val2)
console.log(return1)
let result2 = addNum(10,2)
console.log(result2)


// num1 = 2
// num2 = 3
// function addnum(){
//     let total = num1 + num2
//     return total
// }
// addnum()



// This image explains how JavaScript executes the given code in two main phases:

// ### **1️⃣ Global Execution Context**
// When the script starts, JavaScript creates a **Global Execution Context**, which consists of:
// - **`this` keyword** (refers to the global object, e.g., `window` in browsers).
// - **Memory Phase (Creation Phase)**
// - **Execution Phase (Code Execution)**

// ---

// ### **2️⃣ Memory Phase (Creation Phase)**
// In this phase, JavaScript **allocates memory** for variables and functions **before executing the code**. 

// #### **Step-by-Step Memory Allocation**
// - `val1` → `undefined`
// - `val2` → `undefined`
// - `addNum` → **Function Definition** (not `undefined`, as functions are stored in memory)
// - `result1` → `undefined`
// - `result2` → `undefined`

// At this stage, values are **not assigned** yet—just memory allocation happens.

// ---

// ### **3️⃣ Execution Phase (Code Execution)**
// After memory is allocated, JavaScript **executes** the code line by line.

// #### **Step-by-Step Execution**
// 1. `val1 = 10`
// 2. `val2 = 5`
// 3. `addNum()` function remains stored in memory.
// 4. `result1 = addNum(val1, val2)`
//    - A **new Execution Context** is created for `addNum()`
//    - `num1 = 10`, `num2 = 5`
//    - `total = num1 + num2 = 10 + 5 = 15`
//    - The function **returns 15**, which is assigned to `result1`
//    - The function's **execution context is deleted** after execution.

// 5. `result2 = addNum(10, 2)`
//    - A new **Execution Context** is created.
//    - `num1 = 10`, `num2 = 2`
//    - `total = 10 + 2 = 12`
//    - The function returns `12`, which is assigned to `result2`
//    - The function's **execution context is deleted** after execution.

// ---

// ### **Key Takeaways**
// ✔ JavaScript first **allocates memory** (`undefined` for variables, function stored as definition).  
// ✔ Then, it **executes the code**, updating variable values and creating/deleting function execution contexts dynamically.  
// ✔ **Functions get their own execution contexts**, which are **deleted** after they return a value.  

// // Would you like more details on a specific part? 🚀
