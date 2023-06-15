// function sayHello(){
//   console.log("hello")
// }

// const sayHello = () => {
//   console.log("hello")
// }

// const additon = (a,b) => a+b;

// const subtraction = (a,b) => {
//   return a-b
// }

//  const addedValue =  additon(2,5)
//  console.log(addedValue)

//  const subtractedValue = subtraction(5,2)
//  console.log(subtractedValue)

// higher order function

// function which accepts function as a parameter or
// function returns another function

// function add(){
//   var a = Number(document.getElementById("a").value)
//   var b = Number(document.getElementById("b").value)
//   document.getElementById("result").innerHTML = `The addition of ${a} and ${b} = ${a+b}` ;
// }

// function subtract(){
//   var a = Number(document.getElementById("a").value)
//   var b = Number(document.getElementById("b").value)
//   document.getElementById("result").innerHTML = `The addition of ${a} and ${b} = ${a-b}` ;
// }
// function multiply(){
//   var a = Number(document.getElementById("a").value)
//   var b = Number(document.getElementById("b").value)
//   document.getElementById("result").innerHTML = `The addition of ${a} and ${b} = ${a*b}` ;
// }
// function division(){
//   var a = Number(document.getElementById("a").value)
//   var b = Number(document.getElementById("b").value)
//   document.getElementById("result").innerHTML = `The addition of ${a} and ${b} = ${a/b}` ;
// }

function calculate() {
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var operation = document.getElementById("operation").value;
  var outputType = document.getElementById("outputType").value;

  var operator;
  if (operation === "add") {
    operator = add;
  } else if (operation == "subtract") {
    operator = subtract;
  } else if (operation == "multiply") {
    operator = multiply;
  } else if (operation == "division") {
    operator = division;
  }

  var showOutputIn;
  if (outputType == "screen") {
    showOutputIn = showScreenOutput;
  } else if (outputType == "console") {
    showOutputIn = showConsoleoutput;
  } else if (outputType == "alert") {
    showOutputIn = showAlertOutput;
  }

  console.log(a,b,operator, showOutputIn)

  calculateResult(a, b, operator, showOutputIn); 
  // calculateResult function accepts operator and showOutputIn functions as arguments. so, it is called higher order function
}

function calculateResult(a, b, operationType, outputType) {
  console.log(a,b,operationType, outputType )
  var result = operationType(a, b);
  outputType(result);
}

function showScreenOutput(res) {
  document.getElementById("result").innerHTML = res;
}

function showConsoleoutput(res) {
  console.log(res);
}

function showAlertOutput(res) {
  alert(res);
}

const add = (a, b) => a + b;

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}


// callBack 
// if a function accepts a function as a parameter then it is called callback function 