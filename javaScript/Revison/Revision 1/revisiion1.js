document.getElementById("title").innerHTML = "Learning MERN fullstack's web development";
document.getElementById("title").style.color = "green";

// var, let and const 

// variable names should starts with _, a, A, $
// variable names should not start with numbers

var carName = "Audi"
var myCarName = carName 
console.log("my car name is", myCarName)

// data types - string, number, boolean, undefined, null, objects, symbol, arrays

var age = 26;
console.log(age)

console.log(typeof undefined)
console.log(typeof null)

var students = ["raj", "ramesh", "keerthi"]

// students.push("Suresh")
students[5] = "Suresh"
students[0] = "rajesh"


console.log(students[10])

console.log(students)

// console.log(typeof students) 
console.log(Array.isArray(students))

// const pi = 3.14;
// pi = 454

var carprice = 202222;
var carPrice = 121545;

console.log(carprice, carPrice)

let carModel;

// comparison <, > , <= , >= , !=, 

// logical operators  and,or,not &&, ||, !

// increment and decrement ++, --


var a = 15;
var b = a++;

console.log(a,b)

var c = 23;
var d = ++c;
console.log(c,d)

console.log("hello" + "Good Morning")
console.log(1 + 3 + "5")  // 45
console.log(4 + "3" + 2 + 7 )  //4327

// conditional statements

// if, if-else, else-if 

// if(condition){

// } else if(condition){

// } else if(condition){

// } else {

// }

// loops 

// for, while, do-while 

// for(inital values, condition , operation ){
    // block of code to be executed 
// }


// while(condition){
//   //block of code to be executed 
//   //operation
// }

// do{
//    //block of code to be executed 
//    //operation
// }while(condition)

// break and continue

for(var i = 1; i <=10 ; i++){
    if(i==6){
      continue
    }
    console.log(i)
}
