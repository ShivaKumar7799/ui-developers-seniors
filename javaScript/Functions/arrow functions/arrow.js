// function sayHello(){
//   console.log("sayHello")
// }


const sayHello = () => {
  console.log("sayHello")
}

sayHello()


// function summation(a,b){
//   console.log(a + b);
// }

const summation = (a,b) => {
  const sum = a+b;
  return sum
}

const answer = summation(2,4)
console.log(answer)

// default parameters

const personAddress = (name, age, city, country = "India") => {
    console.log(name, age, city, country)
}

// const personAddress = (name, age, city, country) => {
//   if(country == undefined){
//     country = "India"
//   }
//     console.log(name, age, city, country)
// }

personAddress("abc", 15, "hyderabad")
personAddress("john", 23, "vizag", "london")