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
 

function add(){
  var a = Number(document.getElementById("a").value)
  var b = Number(document.getElementById("b").value)
  document.getElementById("result").innerHTML = `The addition of ${a} and ${b} = ${a+b}` ;
}