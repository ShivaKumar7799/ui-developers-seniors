var a = 10;
var b = 20;

console.log(a == b);  // false
console.log(a > b);   // false
console.log(a < b);    // true
console.log( a >= b);  // false
console.log( a <= b);  // true


// if statement 

if(a <= b){
  console.log("this line of code is executed")
  // code in this block will execute when the condition is true
}


// if-else 

if(a <= b){
  console.log("condition is true, if block")
}else {
  console.log("condition is false, else block")
}

// else-if

if(a == b){
  console.log("a is equal to b")
}else if( a < b){
  console.log("a is less than b")
} else if(a > b){
  console.log("a is greater than b")
} else if(a <=b){
  console.log("a is less than or equal to b")
} else if(a >= b){
  console.log("a is greater than or equal to b")
}

const myName = "shiva kumar"

if(myName == "shiva"){
  console.log("name is correct")
}

const mathsMarks = 28;

if(mathsMarks >= 35 ){
  console.log("pass")
} else {
  console.log("fail")
}

const date = new Date()
const hours = date.getHours()

if(hours < 12){
  console.log("AM")
} else {
  console.log("PM")
}

const day = date.getDay();
console.log(day)

if(day == 0){
  console.log("holiday")
}else {
  console.log("working day")
}

// else -if

if(day == 0){
  console.log("sunday")
} else if(day == 1){
  console.log("monday")
} else if(day == 2){
  console.log("tuesday")
} else if(day == 3){
  console.log("wednesday")
} else if(day ==4){
  console.log("thursday")
} else if(day == 5){
  console.log("friday")
} else {
  console.log("saturday")
}

var percentage = Number(prompt("Enter your percentage ?"));

// if(percentage >= 90 && percentage <= 100 ){
//   console.log("O Grade")
// } else if(percentage >= 80 && percentage < 90 ){
//   console.log("A Grade")
// } else if(percentage >= 70 && percentage < 90 ){
//   console.log("B Grade")
// } else if(percentage >= 60 && percentage < 90 ){
//   console.log("C Grade")
// } else if(percentage >= 50 && percentage < 90 ){
//   console.log("D Grade")
// } else if(percentage >=0 && percentage < 50){
//   console.log("Failed")
// } else {
//   console.log("Please enter valid percentage")
// }

switch(percentage){
  case 100 : {
      console.log("O grade")
      break;
  }
  case 90 : {
      console.log("A grade");
      break;
  }
  default : {
    console.log("please enter valid percentage")
  }
}


const currentDate = new Date()
const today = currentDate.getDay()
console.log(today)

var weekDay = ""

switch(today){
  case 0 : {
    weekDay = "sunday"
    console.log("sunday")
    break;
  }
  case 1 : {
    weekDay = "monday"
    console.log("monday")
    break
  }
  case 2 : {
    weekDay = "tuesday"
    console.log("tuesday")
    break
  }
  case 3 : {
    weekDay = "wednesday"
    console.log("wednesday")
    break
  }
  case 4 : {
    weekDay = "thursday"
    console.log("thursday")
    break
  }
  case 5 : {
    weekDay = "friday"
    console.log("friday")
    break
  }
  case 6 : {
    weekDay = "saturday"
    console.log("saturday")
    break
  }
  
}


document.getElementById("day").innerHTML = weekDay