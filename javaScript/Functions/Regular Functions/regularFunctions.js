// creating a function in js

// function functionName(){    
//   // code to be executed
//   console.log("regular function is called")
// }

//  functionName()    // invoking a function or calling a function

// function sayHelloToRajaSekhar(){
//   console.log("Hello, Good Morning Raja Sekhar")
// }

// sayHelloToRajaSekhar()


// function sayHelloToRaji(){
//   console.log("Hello, Good Morning Raji")
// }

// sayHelloToRaji()

// function sayHelloToPrakash(){
//   console.log("Hello, Good Morning Prakash")
// }

// sayHelloToPrakash()


function sayHelloToPerson(personName, greetings){    // parameters - defining a function
  console.log("Hello, Good", greetings, personName )
}

/*  sayHelloToPerson("Raja sekhar", "morning")   //  arguments  - calling a function
sayHelloToPerson("Raji", "afternoon")
sayHelloToPerson("Prakash", "night")
sayHelloToPerson("venu gopal", "evening")  */


function sendGreeting(){
  const greetings = document.getElementById("greetings").value;
  const personName = document.getElementById("personName").value
  console.log("hello, Good", greetings, personName)
  document.getElementById("showGreeting").innerHTML = "hello, Good " + greetings + " " + personName
  // document.write("hello, Good " + greetings + " " + personName) 

}

// addition

function add(a,b){
  console.log( "a =", a, " b =", b, " and sum = " ,a+b);
  return a + b
}

// add(2,3)
// add(8,6)

// add(2,5)  = 7

var firstResult = add(2,5)

var secondResult = add(12,27)

// console.log(additionOf2and5, "addition of 2 and 5")
// console.log(additionOf12and27, "sum of 12 and 27" )

var Total = firstResult + secondResult

console.log(Total, "total value")

// adding two numbers

function addition(a, b, c){
    console.log(a*a + b*b +c*c)
}

addition(5,4,6)

function getTime(){
  const date = new Date();
  document.getElementById("show").style.display = "block"
  document.getElementById("time").innerHTML = date;
  document.getElementById("show").style.display = "none"
  document.getElementById("hide").style.display = "block"
}

function hideTime(){
  document.getElementById("time").style.display = "none"
  document.getElementById("show").style.display = "block"
  document.getElementById("hide").style.display = "none"
}