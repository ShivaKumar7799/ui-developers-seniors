// Hoisting : Variables that are declared with var are hoisted at the top,
//         if we want to access the variable before it was declared
//         it will return the value undefined to that variable

//         Variables that are declared with let and const are also hoisted at the top,
//         but these values are in temporal dead zone, when we are trying to access these variables
//         before it was declare it wil throw errors (uncaught refrence error)

console.log(noOfStudents, "no of students");
var noOfStudents;
console.log(noOfStudents, "after declared noOfStudents with 50");

// console.log(groceries, "price of groceries")
let groceries;
console.log(groceries);

// console.log(area, "area value")
const area = 12000;
