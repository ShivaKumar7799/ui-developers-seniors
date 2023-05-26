const students = ["ravi","raju","vinay", "prasad", "ramesh", 1, true, [1,23,4,5,6]];

console.log(students[0]);
console.log(students[1])
console.log(students[3])
console.log(students[5])
console.log(students[7])

// lenth of the array 

console.log(students.length, "the length of students")
console.log(students[students.length - 1])


// const student1 = "ravi"
// const student2 = "raju"
// const student3 = "vinay"
// const student4 = "prasad"
// const student5 = "ramesh"

console.log(typeof students)
console.log(Array.isArray(students))


const fruits = ["apple", "orange", "papaya", "banana"]

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[3])
console.log(fruits[fruits.length - 1])
console.log(fruits[fruits.length - 2])

// adding element to end of the array 

console.log(fruits, "before adding data")

fruits.push("mango")
fruits.push("pine apple")

console.log(fruits, "after adding fruit at the end")

// removing element at the end of the array

const firstRemovedFruit = fruits.pop()
fruits.pop()
fruits.pop()

console.log(firstRemovedFruit, "first removed fruit from the end")

console.log(fruits, "after removing last element from the end")

// adding items to starting of the array

fruits.unshift("straw berry")
console.log(fruits, "after adding element to start of the array")

// removing items from the starting of the array

fruits.shift()
fruits.shift()
console.log(fruits, "after removing elements to the start of the array")

// converting fruits array to string

const fruitsString = fruits.toString();
console.log(fruitsString, "string format")
console.log(fruitsString.split(","), "converted again to array")

console.log(fruits);

// adding two arrays into single array

const nonVeg = ["fish", "meat", "eggs"]
const veg = ["tomoto", "beans", "onions", "cabbage"]

const allItems = nonVeg.concat(veg)
console.log(allItems,"after combing two arrays")

const animals = ["lion", "elephant", "tiger", "deer", "bear", "giraffe"]

console.log("animals names", animals)

// splice method is used to add or remove items in bettween the array
// first argument is index value or starting position
//  and second argument is no' of items to deleted 
// and third argument is elements that are needed to add

animals.splice(2, 0, "rabbit", "monkey")
console.log(animals)


// sort method

console.log(animals.sort())

// reverse

console.log(animals.reverse())

// slice method 

console.log(animals, "all animals")

var middleAnimals = animals.slice(2,6)
console.log(middleAnimals,"middle animals")
console.log(animals)

