// add 2 number with values 10 and 20 and show the sum

// a = 5;
// b = 2;

a = Number(prompt("enter the value of a"))
b = Number(prompt("enter the value of b"))

console.log("a = ", a , "and b =", b)

document.getElementById("values").innerHTML = "a = " +  a + " and b =" + b

sum = a + b;
console.log("sum of a and b =", sum )
document.getElementById("addition").innerHTML = "sum of a and b = " + sum 

subtraction = a - b;
console.log("subtraction of a and b =", subtraction )
document.getElementById("subtraction").innerHTML = "subtraction of a and b = " + subtraction

multiplication = a * b;
console.log("product of a and b =", multiplication)
document.getElementById("multiplication").innerHTML = "multiplication of two numbers =" + multiplication



division = a /b;
console.log("division of a and b=", division)
document.getElementById("division").innerHTML = "division of two numbers =" + division

remainder = a % b;
console.log("remainder of a and b=", remainder)
document.getElementById("remainder").innerHTML = "remainder of two numbers =" + remainder