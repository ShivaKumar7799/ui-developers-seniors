// console.log(a)
var a = 20;
a = 50;
let b = 30;
var sum = a + b;
// console.log(sum)

// const isStudent = true;
// const a  = 20;
// const technology = "javaScript"
// const tools = ["nelify","git","github", "postman"];
// console.log(tools[0])
// const b = undefined
// const person = {
//     firstName : "abc",
//     lastName : "def"
// }
// console.log(person.firstName, person.lastName)

// function 

// regular functions or first class functions 

function addition(a,b){
    return a+b
}

const addedValues = addition(35,15)
console.log(addedValues, "added value")

// anonomous function

// function(){
//     let a = 20;
//     let b = 30;
//     console.log(a +b)
//     console.log("anonymous function")
// }

//self invoked function

// (function(){
//     let a = 20;
//     let b = 30;
//     console.log(a +b)
//     console.log("anonymous function")
// })()

// arrow functions 

const subtraction = (a,b) =>  a-b


 const subtractedValues = subtraction(87,3);
 console.log(subtractedValues)


//  default parameters 

const multiplication = (a,b = 1) =>  a * b


 const product = multiplication(87);
 console.log(product)


//  objects 

const student1 = {
    firstName : "amajya",
    lastName : "singh",
    phNumber : 466565,
    isStudent : true,
    technologiesKnown : ["html", "css", "js", "react js"],
    studies : {
        ssc : 80,
        intermediate : 89,
        engineering : 78
    },
    fullName : function(){
        console.log(this.firstName, this.lastName)
    }
}
console.log(student1.firstName, student1.lastName,student1.phNumber) // accessing

student1.firstName = "yuvraj"
student1.city = "benguluru"
delete student1.phNumber
console.log(student1)
console.log(student1.phNumber)
student1.fullName()

console.clear()

// console.log(this.a)
// alert("sdf")

// creating objects in js 

const player1 = {
    firstName : "rohit",
    lastName : "sharma",
    matchesPlayed : 87,
    centuriesScore : 13
}

const player2 = {
    firstName : "shikar",
    lastName : "Dhawan",
    matchesPlayed : 56,
    centuriesScore : 9
}

function Player(firstname, lastname, matchesPlayed,centurieScore){
    this.firstName = firstname;
    this.lastname = lastname;
    this.matchesPlayed = matchesPlayed;
    this.centurieScore = centurieScore
}

const player3 = new Player("virat", "kohli", 162, 35);
const palyer4 = new Player("virender", "sehwag", 136,24);

console.log(player3)
console.log(palyer4);

// shallow copy and deep copy 

const ramesh = {
    firstName : "ramesh",
    lastName : 'kumar'
}

// const suresh = {
//     firstName :"suresh",
//     lastName :"kumar"
// }

// const suresh = ramesh  // shallow copy
const suresh = Object.assign({}, ramesh)  // depy copy
console.log(suresh, ramesh)
suresh.firstName = 'suresh'
console.log(suresh, ramesh)



console.clear()
