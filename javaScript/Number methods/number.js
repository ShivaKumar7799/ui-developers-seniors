const ghee = 102.85;
const milk = 25.5;

const total = ghee + milk

console.log(total)

// rounding the number to the nearest integer value

console.log(Math.round(total), "using round method")
console.log(Math.round(4.25), "ceil 4.25")
console.log(Math.round(4.85), "ceil 4.85")

// ceil method will round the value to next integer value

console.log(Math.ceil(4.05), "ceil 4.25")
console.log(Math.ceil(4.85), "ceil 4.85")

// floor method will round the value to previous integer value

console.log(Math.floor(4.25), "floor 4.25")
console.log(Math.floor(4.65), "floor 4.65")


// Math.pow() method will be used to find the power of number
console.log(Math.pow(2,5));
console.log(Math.pow(5,2));
console.log(Math.pow(8,4));

// Math.sqrt() is used to find the square root of a number

console.log(Math.sqrt(16))
console.log(Math.sqrt(100))
console.log(Math.sqrt(125))

// absolute method will always gives the positive value 

const visakhapatnam = 0;
const benguluru = 1250;


const visBenDis = benguluru - visakhapatnam;
const BenVisDes = visakhapatnam - benguluru;
console.log( Math.abs(visBenDis) , "distance between visakhapatanam to benguluru");
console.log( Math.abs(BenVisDes), "distance between benguluru to visakhapatanam");

// Math.max is used to find the maximum value

const lastRank = Math.max(2,7,25,88,45,28,4,59)
console.log(lastRank, "last rank in the exam")

const topRank = Math.min(2,7,25,1,88,45,28,4,59)
console.log(topRank, "top rank in the exam")

// getting random value using Math.random()

const lotteryWinningPerson = Math.random();

const lotteryRegistedMembers = ["Adi", "amajaya singh", "balaji", "rajesh", "gnan kumar"]

console.log(lotteryRegistedMembers[Math.floor(lotteryWinningPerson * 5)] , " - lottery winning person number");

const price = 1237.12376545454545;
console.log(price.toFixed(3))

// Number

var newStudents = "25";
var oldStudents = "13";
var totolNumberOfStudetns = Number(newStudents) + Number(oldStudents) 
console.log(totolNumberOfStudetns, "total students");

var a =20;
var b= 30;
var c= "40";
var d =20;
var e= 30;

var sum = a + b + Number(c) + d + e;
console.log(sum)

// var age = Number(prompt("enter your age"));
// console.log(typeof age, age)

// parseInt

var productPrice = 4588.99

console.log(parseInt(productPrice))

var amount = 4588.58;
console.log(parseFloat(amount))





