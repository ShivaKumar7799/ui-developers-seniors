var firstName = "shiva";
var lastName = "shankar";
var fullName = firstName + " " + lastName;

// string concatenation

var sachinFirstName = "Sachin";
var sachinLastName = "Tendulkar"

// var sachinFullName = sachinFirstName + " " + sachinLastName
var sachinFullName = sachinFirstName.concat(" ", sachinLastName);
console.log("sachin fullName = ", sachinFullName)

console.log("full name is", fullName);

// string length

console.log("fullname length =", fullName.length)
console.log(typeof firstName);

console.log( "firstName length" ,firstName.length);
console.log( "lastname length =", lastName.length);

document.getElementById("firstNameLength").innerHTML = firstName.length;

var car = "Maruthi Suziki";

// charAt method

console.log("car first letter =", car.charAt(0) );
console.log("second letter", car.charAt(1) );
console.log("last letter", car.charAt( car.length - 1))
console.log("second last letter", car.charAt( car.length - 2))

// slice methods

var carFirstName = car.slice(0,7)
console.log(carFirstName)

var carLastName = car.slice(8,14)
console.log(carLastName);

//replace

var wishes = "Good Morning";
console.log("before replacing",wishes)
    wishes = wishes.replace("Morning", "Afternoon")
console.log("after replacing",wishes)

// replaceAll

var story = "person1 is a good boy, person1 want to meet his friend after long time."
    story = story.replaceAll("person1", 'Raju')
console.log(story)

// uppercase

console.log(story.toUpperCase())

//lowercase

console.log(story.toLowerCase())

var userName = prompt("Enter user name").trim()
console.log(userName, userName.length);

// converting string to an array

var cityNames = "hyderabad*benguluru*mumbai*chennai"
console.log(cityNames.split("*"))
console.log(typeof cityNames.split(","))

// includes

const fruits = "mango, guava, papaya, orange, apple"

console.log(fruits.includes("orange"))







