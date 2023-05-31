// console.log(1);
// console.log(2);
// console.log(3);




// console.log(98);
// console.log(99)
// console.log(100)

// for-loop 

// for(initial value ; condition ; increment/decrement (operation) ){

// }

// printing numbers from 1 to 10;

for(var i = 1 ; i <= 10; i += 2 ){
  console.log(i)
}

// printing numbers from 15 to 40

console.log("printing numbers form 15 to 40")

for(var i = 15 ; i <= 40 ; i++ ){
  console.log(i)
}

console.log("printing number from 10 to 1")

for(var i = 10 ; i >= 1 ; i--){
  console.log(i)
}

console.log("printing number -5 to 5")

for(var i = -5; i <= 5; i++ ){
   console.log(i)
}

var personName = "amajya singh"
// console.log(personName[0])
// console.log(personName[1])
console.log(personName.charAt(0))


for(var i = 0 ; i < personName.length ; i += 2 ){
  console.log(personName.charAt(i),"printing every character of person Name")
}

var students = ["adi", "balaji", "rajesh", "sharmila", "gnan kumar"]

for(let i = 0 ; i <= students.length - 1; i++){
  console.log(i + 1,students[i])
}


// 10 -initial value 

// true
// print - 10
// 9

// true 
// print - 9
// 8

// flow of for-loop 

// it takes inital value   i = 1

// check condition    1 <= 10  true
// execute the block of code  printing 1 in the console
// increment/ decrement (operation)  increase the value of i, 2

// check condition  2 <= 10   true
// execute the block of code  printing 2 in the console
// increment/ decrement (operation) increase the value of i, 3

// check condition  3 <= 10 
// execute the block of code  printing 3 in the console
// increment/ decrement (operation) increase the value of i, 3

// check condition 
// execute the block of code 
// increment/ decrement (operation)

// while loop 

// while(condition){
//   block of code to execute
// }

// printing numbers from 1 to 10 

var j = 1;   //initial value
console.log("printing values from 1 to 10 using for loop")
while(j <= 10){
  console.log(j, "while loop")
  j++
}


// do-while 

var x = 1;
do{
  console.log(x, "do-while")
  x++;
}while(x <= 10)



do{
  var percentage = prompt("Enter your percentage ?");
}while(percentage < 0 || percentage > 100)

if(percentage >= 90 && percentage <= 100 ){
  console.log("O Grade")
} else if(percentage >= 80 && percentage < 90 ){
  console.log("A Grade")
} else if(percentage >= 70 && percentage < 90 ){
  console.log("B Grade")
} else if(percentage >= 60 && percentage < 90 ){
  console.log("C Grade")
} else if(percentage >= 50 && percentage < 90 ){
  console.log("D Grade")
} else if(percentage >=0 && percentage < 50){
  console.log("Failed")
} else {
  console.log("Please enter valid percentage")
}